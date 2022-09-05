var X=[];
var Y=[];
var x_koord=0.0, y_koord=0.0;
var ülesannete_loendur=0;
var õige_vastus=0;
var lõpetamise_tingimus=false;
var punkti_raadius=5;
var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;
var teksti_kasti_kõrgus=300;

function setup() {
  createCanvas(500,800);
  x_koord=width/2;
  y_koord=height/2;
  Write_texts();
  Reset();

}


function draw() {
  clear();
  background(255);
  XYplane(jaotiste_arv, 0.25, 2); //parameetriks on [jaotiste_arv(teljel), tausta_jaotise_paksus, telje_jaotiste_paksus]
  create_a_Point();
  create_TABLE();
  graafik(xmin,xmax, jaotiste_arv);
  mouse_Hover();
  
  KONTROLL_NUPP.mousePressed(Kontroll);
  RESET_NUPP.mousePressed(Reset);
  LÕPETA_NUPP.mousePressed(Lõpp);
  
  if(lõpetamise_tingimus==true){
    
    push();
    fill(22, 56, 50);
    rect(0,0,width,height);
    pop();
    

    
    push();
    fill(48, 25, 52);
    strokeWeight(0);
    circle(width,0,mouseY*2);
    pop();
    
    push();
    fill(220, 120, 52);
    strokeWeight(0);
    circle(0,height, mouseY-70);
    pop();
    
    push();
    fill(22,56,50);
    strokeWeight(0);
    circle(width,0,mouseX)
    pop();
  }
}



function XYplane(jaotiste_arv, tausta_jaotise_paksus, telje_jaotiste_paksus) {
  //jaotised Y teljel
  var jaotisY=0;
  var Y_jaotise_väärtus=xmax;
  while (jaotisY <= height-300) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(width*0, jaotisY , width, jaotisY);
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(width/2-5, jaotisY , width/2+5, jaotisY);
    strokeWeight(0);
    stroke(1);
    text(Y_jaotise_väärtus, width/2+10, jaotisY );
    Y_jaotise_väärtus=Y_jaotise_väärtus-1;
    jaotisY = jaotisY+(height-300)/jaotiste_arv;
    
  }
  //jaotised X teljel
  var jaotisX = 0;
  var X_jaotise_väärtus=xmin;
  while (jaotisX <= width) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(jaotisX, (height-300)*0 , jaotisX, (height-300));
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(jaotisX, (height-300)/2+5 , jaotisX, (height-300)/2-5);
    strokeWeight(0);
    stroke(0);
    text(X_jaotise_väärtus, jaotisX, (height-300)/2+20);
    X_jaotise_väärtus=X_jaotise_väärtus+1;
    jaotisX = jaotisX+width/jaotiste_arv;
  }
    // ----- X-Y plane -----
  strokeWeight(telje_jaotiste_paksus);
  stroke(0);
    //Y-axis
  line(width/2, (height-300)*0 , width/2 , (height-300));
    //arrow
  line(width/2-5, 0+15, width/2, 0);
  line(width/2+5, 0+15, width/2, 0);
    //X-axis
  line(width*0, (height-300)/2, width, (height-300)/2);
    //arrow
  line(width-15,(height-300)/2-5,width, (height-300)/2);
  line(width-15,(height-300)/2+5,width, (height-300)/2); 
}

points_on_plot=0;

function mouseClicked() {
  
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<(height-300)){
    x_koord=mouseX;
    y_koord=mouseY;
    points_on_plot=points_on_plot+1;
  }
}



function create_a_Point(){
  
  if (points_on_plot==1) {
    first_point_X = x_koord;
    first_point_Y = y_koord;
    second_point_X = -10;
    second_point_Y = -10;
  } else if (points_on_plot==2) {
        first_point_X = first_point_X;
        first_point_Y = first_point_Y;
        second_point_X = x_koord;
        second_point_Y = y_koord;
        
  } else if (points_on_plot>2) {
    points_on_plot=0;
    first_point_X = -10;
    first_point_Y = -10;
    second_point_X = -10;
    second_point_Y = -10;
  }
    push();
    fill(0,139,195);
    C1=circle(round_0(first_point_X/12.5)*12.5, round_0(first_point_Y/12.5)*12.5, punkti_raadius);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text("A",round_0(first_point_X/12.5)*12.5-5, round_0(first_point_Y/12.5)*12.5-10 )
    pop();
  
  
    push();
    fill(0,139,195);
    C2=circle(round_0(second_point_X/12.5)*12.5, round_0(second_point_Y/12.5)*12.5, punkti_raadius);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text("B",round_0(second_point_X/12.5)*12.5-5, round_0(second_point_Y/12.5)*12.5-10 )
    pop();
}

function Ylesanne(){
  tous_K=(round_0(random(-100,100)/5)*5)/10;
  vabaliige_B=(round_0(random(-100,100)/5)*5)/10;

  if (vabaliige_B>=0){
    vabaliige_B_str="+ "+str(vabaliige_B);
  } else {
    vabaliige_B_str=str(vabaliige_B)
  }
  
  LaTeX_string="y="+str(tous_K)+"x"+vabaliige_B_str;
  
  katex.render(LaTeX_string, TeX_võrrand.elt);
  yl_text.html("On antud funktsioon:<br><br> Täida väärtustetabel, ning kanna leitud punktid graafikule.");
}

function create_TABLE(){
  line(35,(height-300)+110,200,(height-300)+110); // horizontal line 1
  line(35,(height-300)+135,200,(height-300)+135); //horizontal line 2
  line(35,(height-300)+110,35,(height-300)+160); //horizontal line 3
  
  line(35,(height-300)+160,200,(height-300)+160); //vertical line 1
  line(70,(height-300)+110,70,(height-300)+160); //vertical line 2
  line(130,(height-300)+110,130,(height-300)+160); //vertical line 3
  line(200,(height-300)+110,200,(height-300)+160); //vertical line 2
  push();
  strokeWeight(0.5);
  text("X",45,(height-300)+127);
  text("Y",45,(height-300)+152);
  pop();
}

function Write_texts(){
  yl_text=createP("");
  yl_text.position(35,(height-300)+5);
  yl_text.style("font-size","16px");
  yl_text.style("line-height","140%");
  yl_text.style("font-family","'Roboto', sans-serif");
  
  result_text=createP("");
  result_text.position(55,(height-300)+194);
  result_text.style("font-size","16px");
  result_text.style("line-height","140%");
  result_text.style("font-family","'Roboto', sans-serif");
  
  TeX_võrrand=createP("");
  TeX_võrrand.style("font-size","18px");
  TeX_võrrand.position(width/2-50,(height-303));
  
  p1_text=createP("");
  p1_text.position(55,(height-300)+217);
  p1_text.style("font-size","16px");
  p1_text.style("line-height","140%");
  p1_text.style("font-family","'Roboto', sans-serif");
  
  p2_text=createP("");
  p2_text.position(55,(height-300)+240);
  p2_text.style("font-size","16px");
  p2_text.style("line-height","140%");
  p2_text.style("font-family","'Roboto', sans-serif");
  
  current_state_text=createP("Praegune seis:<br><br> 1) <br> 2) <br> 3) ")
  current_state_text.position(35,(height-300)+150);
  current_state_text.style("font-size","16px");
  current_state_text.style("line-height","140%");
  current_state_text.style("font-family","'Roboto', sans-serif");
}

function Kontroll(){
  
  // ##########################  TABELI KONTROLL ###############################
  
  if (INPUT_X1.value()=="" || INPUT_X2.value()=="" || INPUT_Y1.value()==""|| INPUT_Y2.value()==""){
    result_text.html("Tabel on tühi!");
    result_text.style("color",color(255,0,0));
    condition_for_finishing_table=false;
  } else if (INPUT_X1.value() == INPUT_X2.value() || INPUT_X1.value() > INPUT_X2.value()) {
    result_text.html("X-ide rida peab tabelis olema kasvamisjärjekorras!");
    condition_for_finishing_table=false;
    result_text.style("color",color(255,0,0));
  }
  else if (INPUT_X1.value() < INPUT_X2.value() ) {
    func_Y_väärtus_1=tous_K * (INPUT_X1.value()) +vabaliige_B;
    func_Y_väärtus_2=tous_K * (INPUT_X2.value()) +vabaliige_B;
    if (INPUT_Y1.value() == func_Y_väärtus_1 && INPUT_Y2.value() == func_Y_väärtus_2){
        result_text.html("Väärtustetabel on ÕIGESTI arvutatud!")
        result_text.style("color",color(0,128,0));
        condition_for_finishing_table=true;
  } else {
        result_text.html("Väärtustetabel on VALESTI arvutatud.")
        result_text.style("color",color(255,0,0));
        condition_for_finishing_table=false;
  }
  }
  
  
  // ############################# GRAAFIKU KONTROLL ##############################
  
  // PUNKT A
  if ( ((round_0(first_point_X/12.5)*12.5)-250)/25==round_0((INPUT_X1.value()*2 )/2 ) && -1*((round_0(first_point_Y/12.5)*12.5)-250)/25 == (round_0((tous_K*INPUT_X1.value()+vabaliige_B)*2)/2)    ) {
    p1_text.html("Punkt A on korras!");
    p1_text.style('color', color(0,128,0));
    condition_for_finishing_point_A=true;
      } else {
        p1_text.html("Punkti A asukoht ei sobi.");
        p1_text.style('color', color(255,0,0));
        condition_for_finishing_point_A=false;
      }
  
  // PUNKT B
    if ( (((round_0(second_point_X/12.5)*12.5)-250)/25) == round_0(INPUT_X2.value()*2 )/2  && -1*((round_0(second_point_Y/12.5)*12.5)-250)/25 == (round_0((tous_K*INPUT_X2.value()+vabaliige_B)*2)/2)) {
    p2_text.html("Punkt B on korras!");
    p2_text.style('color', color(0, 128, 0));
      condition_for_finishing_point_B=true;
      } else {
        p2_text.html("Punkti B asukoht ei sobi.");
        p2_text.style('color', color(255,0,0));
        condition_for_finishing_point_B=false;
      }

  // ########################## KAS KOGU ÜL KORRAS? ##################################
  
  if (condition_for_finishing_point_B==true && condition_for_finishing_point_A==true && condition_for_finishing_table==true){
    õige_vastus=õige_vastus+1;
    KONTROLL_NUPP.attribute("disabled","");
  }
}


function Reset(){
  
  if(ülesannete_loendur>0){
    
    INPUT_X1.remove();
    INPUT_X2.remove();
    INPUT_Y1.remove();
    INPUT_Y2.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    
  }
  
  
  
  condition_for_finishing_table=false;
  condition_for_finishing_point_A=false;
  condition_for_finishing_point_B=false;
  
  
  points_on_plot=0;
  first_point_X = -10;
  first_point_Y = -10;
  second_point_X = -10;
  second_point_Y = -10;
  
  result_text.html("");
  p1_text.html("");
  p2_text.html("");
  Ylesanne();
    KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.style('padding','10px 20px');
  KONTROLL_NUPP.style('background-color','MidNightBlue');
  KONTROLL_NUPP.style('color','white');
  KONTROLL_NUPP.style('border-radius','30px');
  //KONTROLL_NUPP.position(width/2-80,height+30);
  KONTROLL_NUPP.style('margin-top','30px');
  KONTROLL_NUPP.style('margin-left','100px');
 
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.style('padding','10px 20px');
  RESET_NUPP.style('background-color','#508bc3');
  RESET_NUPP.style('color','white');
  RESET_NUPP.style('border-radius','30px');
  //RESET_NUPP.position(width/2+10,height+30);
  RESET_NUPP.style('margin-top','30px');
  RESET_NUPP.style('margin-left','20px');
 
  LÕPETA_NUPP=createButton("Lõpeta");
  LÕPETA_NUPP.style('padding','10px 20px');
  LÕPETA_NUPP.style('background-color','LightSteelBlue');
  LÕPETA_NUPP.style('color','black');
  LÕPETA_NUPP.style('font-weight','bold');
  LÕPETA_NUPP.style('border-radius','30px');
  //LÕPETA_NUPP.position(width/2+140,height+30);
  LÕPETA_NUPP.style('margin-top','30px');
  LÕPETA_NUPP.style('margin-left','80px');
  
  KONTROLL_NUPP.position(4*width/5-250, (height-300)+90);
  KONTROLL_NUPP.attribute("enabled","");
  RESET_NUPP.position(4*width/5-60,(height-300)+90);
  LÕPETA_NUPP.position(4*width/5-90, (height-90));
  
  
  // ###################### VÄÄRTUSTETABELI SISENDID #################################
  INPUT_X1=createInput();
  INPUT_X1.size(50,17)
  INPUT_X1.position(71,(height-300)+111);
  
  
  INPUT_X2=createInput();
  INPUT_X2.size(59,17)
  INPUT_X2.position(132,(height-300)+111);
  
  INPUT_Y1=createInput();
  INPUT_Y1.size(50,17)
  INPUT_Y1.position(71,(height-300)+136);
  
  INPUT_Y2=createInput();
  INPUT_Y2.size(59,17)
  INPUT_Y2.position(132,(height-300)+136);
  
  ülesannete_loendur=ülesannete_loendur+1;

}

function graafik(xmin,xmax, jaotiste_arv) {
  
    if (condition_for_finishing_point_A == true && condition_for_finishing_point_B == true && condition_for_finishing_table==true ) {
  //----- Määramispiirkond X -----
  var i;
  var j;
   for (i = xmin , j = 0; i <=xmax ; i = i+0.1, j=j+1  ) {
     X[j]=i;
     Y[j]=tous_K*X[j]+vabaliige_B; //----- Muutumispiirkond Y -----
   }
  
  for (var k=0; k<=X.length; k=k+1) {
    if (X[k]*(width/jaotiste_arv)+width/2 >= 0 && X[k]*(width/jaotiste_arv)+width/2 <= width && Y[k]*((height-300)/jaotiste_arv)*(-1)+(height-300)/2 >=0 && Y[k]*((height-300)/jaotiste_arv)*(-1)+(height-300)/2 <= (height-300)  ){
    push();
    fill(255,0,255);
    circle(X[k]*(width/jaotiste_arv)+width/2 , Y[k]*((height-300)/jaotiste_arv)*(-1)+(height-300)/2,0);
   pop();
      if (k>=1) {
      stroke(0, 140, 205);
      strokeWeight(2);
      line(X[k-1]*(width/jaotiste_arv)+width/2, Y[k-1]*((height-300)/jaotiste_arv)*(-1)+(height-300)/2, X[k]*(width/jaotiste_arv)+width/2, Y[k]*((height-300)/jaotiste_arv)*(-1)+(height-300)/2);
  }
    
  } 
    }
    }
}

function mouse_Hover(){
  
  if (mouseX >=0 && mouseX<= width && mouseY>=0 && mouseY<=height-300){
  hover_X=(round_0(mouseX/12.5)*12.5-250)/25;
  hover_Y=-1*(round_0(mouseY/12.5)*12.5-250)/25;
  push();
  fill(255);
  strokeWeight(2);
  stroke(0);
  circle(mouseX, mouseY, punkti_raadius);
  pop();
    
       if ((mouseX<=(width/2)) && (mouseY<=((height-teksti_kasti_kõrgus)/2))){
    strokeWeight(0);
    fill(116,187,251,200);
    rect(mouseX, mouseY, 55, 55, 15);
    fill(0);
    text("X: "+ hover_X, mouseX+11.5, mouseY+21);
    text("Y: "+hover_Y , mouseX+11.5, mouseY+41);
  } else if ((mouseX<=(width/2)) && (mouseY>=((height-teksti_kasti_kõrgus)/2))) {
    strokeWeight(0);
    fill(116,187,251,200);
    rect(mouseX, mouseY-60, 55, 55, 15);
    fill(0);
    text("X: "+hover_X, mouseX+11.5, mouseY-39);
    text("Y: "+hover_Y, mouseX+11.5, mouseY-19);
  } else if ((mouseX>=(width/2)) && (mouseY>=((height-teksti_kasti_kõrgus)/2))) {
    strokeWeight(0);
    fill(116,187,251,200);
    rect(mouseX-60, mouseY-60, 55, 55, 15);
    fill(0);
    text("X: "+ hover_X, mouseX-48.5,mouseY-39);
    text("Y: "+hover_Y, mouseX-48.5, mouseY-19);
  }else if ((mouseX>=(width/2)) && (mouseY<=((height-teksti_kasti_kõrgus)/2))) {
    strokeWeight(0);
    fill(116,187,251,200);
    rect(mouseX-60, mouseY, 55, 55, 15);
    fill(0);
    text("X: "+ hover_X, mouseX-48.5, mouseY+21);
    text("Y: "+ hover_Y, mouseX-48.5, mouseY+41);
  }
    
    
  } else{
    hover_X=0;
    hover_Y=0;
  }

}

function Lõpp(){

  
  KONTROLL_NUPP.attribute("disabled","");
  RESET_NUPP.attribute("disabled","");
  LÕPETA_NUPP.attribute("disabled","");
  
    INPUT_X1.remove();
    INPUT_X2.remove();
    INPUT_Y1.remove();
    INPUT_Y2.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove();
    yl_text.remove();
    result_text.remove();
    TeX_võrrand.remove();
    p1_text.remove();
    p2_text.remove();
    current_state_text.remove();
    
  
  
  Tulemus=createP("Tulemus: "+str(round_2((õige_vastus/ülesannete_loendur)*100))+"%<br>Kogu ülesannete arv: "+str(ülesannete_loendur)+"<br>Õigeid lahendusi: "+str(õige_vastus));
  Tulemus.position(width/2-100,height/2-100);
  Tulemus.style("font-size","28px");
  Tulemus.style("color",color(255,255,255));
  Tulemus.style("line-height","140%");
  
  
  lõpetamise_tingimus=true;
}



function round_0(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)) )
}

function round_1(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*10)/10 )
}

function round_2(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*100)/100 )
}

function round_3(v) {
    return (Math.sign(v) * Math.round(Math.abs(v)*1000)/1000 )
}
