var X=[];
var Y=[];
var X2=[];
var Y2=[];


var x_koord=0.0, y_koord=0.0;
var ülesannete_loendur=0;
var õige_vastus=0;
var lõpetamise_tingimus=false;
var teksti_kasti_kõrgus=300;
var punkti_raadius=5;

var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;


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
    jaotisY = jaotisY+(height-teksti_kasti_kõrgus)/jaotiste_arv;
    
  }
  //jaotised X teljel
  var jaotisX = 0;
  var X_jaotise_väärtus=xmin;
  while (jaotisX <= width) {
    strokeWeight(tausta_jaotise_paksus);
    stroke(200);
    line(jaotisX, (height-teksti_kasti_kõrgus)*0 , jaotisX, (height-teksti_kasti_kõrgus));
    strokeWeight(telje_jaotiste_paksus);
    stroke(0);
    line(jaotisX, (height-teksti_kasti_kõrgus)/2+5 , jaotisX, (height-teksti_kasti_kõrgus)/2-5);
    strokeWeight(0);
    stroke(0);
    text(X_jaotise_väärtus, jaotisX, (height-teksti_kasti_kõrgus)/2+20);
    X_jaotise_väärtus=X_jaotise_väärtus+1;
    jaotisX = jaotisX+width/jaotiste_arv;
  }
    // ----- X-Y plane -----
  strokeWeight(telje_jaotiste_paksus);
  stroke(0);
    //Y-axis
  line(width/2, (height-teksti_kasti_kõrgus)*0 , width/2 , (height-teksti_kasti_kõrgus));
    //arrow
  line(width/2-5, 0+15, width/2, 0);
  line(width/2+5, 0+15, width/2, 0);
    //X-axis
  line(width*0, (height-teksti_kasti_kõrgus)/2, width, (height-teksti_kasti_kõrgus)/2);
    //arrow
  line(width-15,(height-teksti_kasti_kõrgus)/2-5,width, (height-teksti_kasti_kõrgus)/2);
  line(width-15,(height-teksti_kasti_kõrgus)/2+5,width, (height-teksti_kasti_kõrgus)/2); 
}

points_on_plot=0;

function mouseClicked() {
  
  if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<(height-teksti_kasti_kõrgus)){
    x_koord=mouseX;
    y_koord=mouseY;
  }
}



function create_a_Point(){
  
    push();
    fill(0,139,195);
    C1=circle(round_0(x_koord/12.5)*12.5, round_0(y_koord/12.5)*12.5, punkti_raadius);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text("L",round_0(x_koord/12.5)*12.5-5, round_0(y_koord/12.5)*12.5-10 )
    pop();

}

function Ylesanne(){
  tous_K1=(round_0(random(-100,100)/5)*5)/10;
  tous_K2=(round_0(random(-100,100)/5)*5)/10;
  vabaliige_B1=(round_0(random(-50,50)/5)*5)/10;
  vabaliige_B2=(round_0(random(-50,50)/5)*5)/10;
  
  if (tous_K1<0 && tous_K2<0){
    tous_K1=tous_K1*(-1);
  } else if (tous_K1>0 && tous_K2>0){
    tous_K1=tous_K1*(-1);
  }

  
  if (vabaliige_B1>=0){
    vabaliige_B1_str="+ "+str(vabaliige_B1);
  } else {
    vabaliige_B1_str=str(vabaliige_B1)
  }
  
  if (vabaliige_B2>=0){
    vabaliige_B2_str="+ "+str(vabaliige_B2);
  } else {
    vabaliige_B2_str=str(vabaliige_B2)
  }
  
  LaTeX_string1="y="+str(tous_K1)+"x"+vabaliige_B1_str;
  LaTeX_string2="y="+str(tous_K2)+"x"+vabaliige_B2_str;
  
  LaTeX_string_full="\\begin{cases}" +LaTeX_string1+" \\newline "+LaTeX_string2+ "\\end{cases}";
  
  katex.render(LaTeX_string_full, TeX_võrrand.elt);
  yl_text.html("On antud funktsioonid:<br><br><br> Kanna funktsioonide lõikepunkti koordinaadid lünkadesse, tulemused <br>ümarda 3 kohta pärast koma, ning kanna leitud punkt graafikule<br> ligikaudselt.");
  yl_text2.html("Vastus:")
  
  punkt_P=str("L( \\hspace{35px}; \\hspace{35px}     )");
  katex.render(punkt_P, TeX_punkti_koord.elt);
}


function Write_texts(){
  yl_text=createP("");
  yl_text.position(35,(height-teksti_kasti_kõrgus)+25);
  
  yl_text2=createP("");
  yl_text2.position(35,(height-teksti_kasti_kõrgus)+150);

  result_text=createP("");
  result_text.position(160,(height-teksti_kasti_kõrgus)+124);
  
  punkti_result=createP("");
  punkti_result.position(35,(height-teksti_kasti_kõrgus)+220 );
  
  TeX_võrrand=createP("");
  TeX_võrrand.style("font-size","18px");
  TeX_võrrand.position(width/2-60,(height-303));
  
  TeX_punkti_koord=createP("");
  TeX_punkti_koord.position(91, (height-teksti_kasti_kõrgus)+148);
  
}

function Kontroll(){
  x_id_korras=false;
  y_id_korras=false;
  punkt_on_korras=false;
  
  sisend_x=round_3(INPUT_X.value());
  sisend_y=round_1(INPUT_Y.value());
  // if (tõus_K1*sisend_x+vabaliige_B1)
  võrrandi_VP=round_1(tous_K1*sisend_x+vabaliige_B1);
  võrrandi_PP=round_1(tous_K2*sisend_x+vabaliige_B2);
  
  
  
  if (võrrandi_VP==võrrandi_PP){
    x_id_korras=true;
  } else {
    x_id_korras=false;
  }
  
  if (võrrandi_VP==sisend_y && võrrandi_PP==sisend_y) {
    y_id_korras=true;
  } else {
    y_id_korras=false;
  }
  
  
  // ######################## KAS GRAAFIKULE MÄRGITUD PUNKT OK? ########################
  
  // console.log(round(sisend_x*2)/2,"*******",(round(x_koord/12.5)*12.5-250)/25)
  // console.log(round(sisend_y*2)/2,"*******",(round(y_koord/12.5)*12.5-250)/25 )
  if (round_0(sisend_x*2)/2 == (round_0(x_koord/12.5)*12.5-250)/25 && -1*round_0(sisend_y*2)/2==(round_0(y_koord/12.5)*12.5-250)/25 ){
    punkt_on_korras=true;
    punkti_result.html("Lõikepunkt märgitud graafikule õigesti!");
    punkti_result.style("color","green");
  } else {
    punkt_on_korras=false;
    punkti_result.html("Lõikepunkt märgitud graafikule valesti!");
    punkti_result.style("color","red");
    
  }
  
  
  // ########################## KAS KOGU ÜL KORRAS? ##################################
  
  if (y_id_korras==true && x_id_korras==true){

    result_text.html("Korras!")
    result_text.style("color","green")
  } else {
    result_text.html("Ei sobi!");
    result_text.style("color","red")
  }
  
  if (y_id_korras==true && x_id_korras==true && punkt_on_korras==true)
    {
      õige_vastus=õige_vastus+1;
      KONTROLL_NUPP.attribute("disabled","");
    }
  
}


function Reset(){
  
  if(ülesannete_loendur>0){
    
    INPUT_X.remove();
    INPUT_Y.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    
  }
  
  y_id_korras=false;
  x_id_korras=false;
  punkt_on_korras=false;
  
  result_text.html("");
  punkti_result.html("");
  yl_text.html("");
  yl_text2.html("");
  TeX_võrrand.html("");
  Ylesanne();
  
  KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.size(70,40);
  KONTROLL_NUPP.style("background-color",color(80,139,195,255));
  KONTROLL_NUPP.style("color",color(255,255,255,255));
  KONTROLL_NUPP.position(4*width/5-100, (height-teksti_kasti_kõrgus)+160);
  KONTROLL_NUPP.attribute("enabled","");
  
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.size(70,40);
  RESET_NUPP.style("background-color",color(80,139,195,255));
  RESET_NUPP.style("color",color(255,255,255,255));
  RESET_NUPP.position(4*width/5+10,(height-teksti_kasti_kõrgus)+160);
  
  LÕPETA_NUPP=createButton("Lõpeta");
  LÕPETA_NUPP.size(70,30);
  LÕPETA_NUPP.style("background-color",color(80,139,195,255));
  LÕPETA_NUPP.style("color",color(255,255,255,255));
  LÕPETA_NUPP.position(4*width/5+10, (height-teksti_kasti_kõrgus)+220);
  
  
  // ###################### SISENDID #################################
  INPUT_X=createInput();
  INPUT_X.size(55,17);
  INPUT_X.position(115,(height-teksti_kasti_kõrgus)+165);
  
  INPUT_Y=createInput();
  INPUT_Y.size(55,17);
  INPUT_Y.position(190,(height-teksti_kasti_kõrgus)+165);
  
  ülesannete_loendur=ülesannete_loendur+1;

}

function graafik(xmin,xmax, jaotiste_arv) {
  
    if (y_id_korras==true && x_id_korras==true && punkt_on_korras==true ) {
  //----- Määramispiirkond X -----
  var i;
  var j;
   for (i = xmin , j = 0; i <=xmax ; i = i+0.1, j=j+1  ) {
     X[j]=i;
     X2[j]=i;
     Y[j]=tous_K1*X[j]+vabaliige_B1; //----- Muutumispiirkond Y -----
     Y2[j]=tous_K2*X2[j]+vabaliige_B2;
   }
  
  for (var k=0; k<=X.length; k=k+1) {
    if (X[k]*(width/jaotiste_arv)+width/2 >= 0 && X[k]*(width/jaotiste_arv)+width/2 <= width && Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 >=0 && Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 <= (height-teksti_kasti_kõrgus)  ){
    push();
    fill(255,0,255);
    circle(X[k]*(width/jaotiste_arv)+width/2 , Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2,0);
   pop();
      if (k>=1) {
      stroke(0, 140, 205);
      strokeWeight(2);
      line(X[k-1]*(width/jaotiste_arv)+width/2, Y[k-1]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2, X[k]*(width/jaotiste_arv)+width/2, Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2);
  }
    
  } 
    }
      
  for (var k=0; k<=X2.length; k=k+1) {
    if (X2[k]*(width/jaotiste_arv)+width/2 >= 0 && X2[k]*(width/jaotiste_arv)+width/2 <= width && Y2[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 >=0 && Y2[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 <= (height-teksti_kasti_kõrgus)  ){
    push();
    fill(255,0,255);
    circle(X2[k]*(width/jaotiste_arv)+width/2 , Y2[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2,0);
   pop();
      if (k>=1) {
      stroke(0, 140, 205);
      strokeWeight(2);
      line(X2[k-1]*(width/jaotiste_arv)+width/2, Y2[k-1]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2, X2[k]*(width/jaotiste_arv)+width/2, Y2[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2);
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
    
  } else{
    hover_X=0;
    hover_Y=0;
  }
  
  
  push();
  strokeWeight(0);
  fill(0,120,225,80);
  rect(width-90, 10, 70,50,15);
  pop();
  
  push();
  strokeWeight(0);
  text("X: "+ hover_X, width-75, 30);
  text("Y: "+ hover_Y, width-75, 50);
  pop();
}

function Lõpp(){

  
  KONTROLL_NUPP.attribute("disabled","");
  RESET_NUPP.attribute("disabled","");
  LÕPETA_NUPP.attribute("disabled","");
  
    INPUT_X.remove();
    INPUT_Y.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove();
    yl_text.remove();
    yl_text2.remove();
    result_text.remove();
    punkti_result.remove();
    TeX_võrrand.remove();
    TeX_punkti_koord.remove();
    
  
  
  Tulemus=createP("Tulemus: "+str(round_2((õige_vastus/ülesannete_loendur)*100))+"%<br>Kogu ülesannete arv: "+str(ülesannete_loendur)+"<br>Õigeid lahendusi: "+str(õige_vastus));
  Tulemus.position(width/2-100,height/2-100);
  Tulemus.style("font-size","28px");
  Tulemus.style("color",color(255,255,255));
  
  
  
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
