var X=[];
var Y=[];
var X2=[];
var Y2=[];
var punkti_raadius=5;
var tähed=["L1","L2"];


var x_koord=0.0, y_koord=0.0;
var ülesannete_loendur=0;
var õige_vastus=0;
var lõpetamise_tingimus=false;
var teksti_kasti_kõrgus=300;
x1_id_korras=false;
y1_id_korras=false;
punkt1_on_korras=false;
  
x2_id_korras=false;
y2_id_korras=false;
punkt2_on_korras=false;

var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;


function setup() {
  createCanvas(600,900);
  x_koord=width/2;
  y_koord=height/2;
  Write_texts();
  Reset();

}


function draw() {
  clear();
  background(255);
  XYplane(jaotiste_arv, 0.25, 2); //parameetriks on [jaotiste_arv(teljel), tausta_jaotise_paksus, telje_jaotiste_paksus]
  // create_a_Point();
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
    points_on_plot=points_on_plot+1;
  }
}


var X_koordinaadid=Array(2);
var Y_koordinaadid=Array(2);
for (var i=0; i<2; i++){
    X_koordinaadid[i]=-10;
    Y_koordinaadid[i]=-10;
    
}

function create_a_Point(){
  
  if (points_on_plot==1){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==2) {
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot>2){
    points_on_plot=0;
    for (var i=0; i<2; i++){
    X_koordinaadid[i]=-10
    Y_koordinaadid[i]=-10
    }
  }
  
  for (var i = 0; i<2; i++) {
    push();
    fill(0,139,195);
    circle(round_0(X_koordinaadid[i]/3)*3, round_0(Y_koordinaadid[i]/3)*3, punkti_raadius);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text(tähed[i],round_0(X_koordinaadid[i]/3)*3-5, round_0(Y_koordinaadid[i]/3)*3-10 )
    pop();
}
}

function Ylesanne(){
  tous_K1=(round_0(random(-50,50)/5)*5)/10;
  vabaliige_B1=(round_0(random(-50,50)/5)*5)/10;
  ruutliige_A=(round_0(random(-50,50)/5)*5)/10;
  lineaarliige_B=(round_0(random(-50,50)/5)*5)/10;
  vabaliige_C=(round_0(random(-50,50)/5)*5)/10;
  
  diskrim=(lineaarliige_B-tous_K1)*(lineaarliige_B-tous_K1)-4*ruutliige_A*(vabaliige_C-vabaliige_B1);
  
  if (diskrim<0){
    while( diskrim<0){ 
      tous_K1=(round_0(random(-50,50)/5)*5)/10;
      vabaliige_B1=(round_0(random(-50,50)/5)*5)/10;
      ruutliige_A=(round_0(random(-50,50)/5)*5)/10;
      lineaarliige_B=(round_0(random(-50,50)/5)*5)/10;
      vabaliige_C=(round_0(random(-50,50)/5)*5)/10;
  
      diskrim=(lineaarliige_B-tous_K1)*(lineaarliige_B-tous_K1)-4*ruutliige_A*(vabaliige_C-vabaliige_B1);
    }
  }
  
  if (vabaliige_B1>=0){
    vabaliige_B1_str="+ "+str(vabaliige_B1);
  } else {
    vabaliige_B1_str=str(vabaliige_B1)
  }
  
  if (lineaarliige_B>=0){
    lineaarliige_B_str="+ "+str(lineaarliige_B);
  } else {
    lineaarliige_B_str=str(lineaarliige_B);
  }
  
  if (vabaliige_C>=0){
    vabaliige_C_str="+ "+str(vabaliige_C);
  } else {
    vabaliige_C_str=str(vabaliige_C);
  }
  
  
  LaTeX_string1="y="+str(tous_K1)+"x"+vabaliige_B1_str;
  LaTeX_string2="y="+str(ruutliige_A)+" x^{2} "+lineaarliige_B_str+"x"+vabaliige_C_str;
  
  LaTeX_string_full="\\begin{cases}" +LaTeX_string1 +" \\newline "+LaTeX_string2+ "\\end{cases}";
  
  katex.render(LaTeX_string_full, TeX_võrrand.elt);
  yl_text.html("On antud funktsioonid:<br><br> Arvuta funktsioonide lõikepunktid ning kanna leitud tulemused<br> lünkadesse. Kui lõikepunkte on vaid 1, siis kanna selle lõikepunkti<br> väärtused mõlemale reale.<br> Tulemused ümarda 3 kohta pärast koma.");
  yl_text2.html("Vastused:")
  
  punkt_P=str("L_{1}( \\hspace{40px}; \\hspace{40px}     )");
  katex.render(punkt_P, TeX_punkti_koord.elt);
  
  punkt_P2=str("L_{2}( \\hspace{40px}; \\hspace{40px}     )");
  katex.render(punkt_P2, TeX_punkti_koord2.elt);
}


function Write_texts(){
  yl_text=createP("");
  yl_text.position(35,(height-teksti_kasti_kõrgus)+25);
  yl_text.style("font-size", "16px")
  yl_text.style("line-height", "140%")
  yl_text.style("font-family",'"Roboto", sans-serif')
  
  yl_text2=createP("");
  yl_text2.position(35,(height-teksti_kasti_kõrgus)+210);
  yl_text2.style("font-size", "16px")
  yl_text2.style("line-height", "140%")
  yl_text2.style("font-family",'"Roboto", sans-serif')
  
  result_text=createP("");
  result_text.position(160,(height-teksti_kasti_kõrgus)+180);
  result_text.style("font-size", "16px")
  result_text.style("line-height", "140%")
  result_text.style("font-family",'"Roboto", sans-serif')
  
 TeX_võrrand=createP("");
  TeX_võrrand.style("font-size","16px");
  TeX_võrrand.position(width/2-50,(height-295));
  TeX_võrrand.style("line-height", "140%")
  TeX_võrrand.style("font-family",'"Roboto", sans-serif')
  
  
  TeX_punkti_koord=createP("");
  TeX_punkti_koord.position(111, (height-teksti_kasti_kõrgus)+210);
  TeX_punkti_koord.style("font-size", "16px")
  TeX_punkti_koord.style("line-height", "140%")
  TeX_punkti_koord.style("font-family",'"Roboto", sans-serif')
  
TeX_võrrand=createP("");
  TeX_võrrand.style("font-size","16px");
  TeX_võrrand.position(width/2-50,(height-295));
  TeX_võrrand.style("line-height", "140%")
  TeX_võrrand.style("font-family",'"Roboto", sans-serif')
  
  
  TeX_punkti_koord2=createP("");
  TeX_punkti_koord2.position(111, (height-teksti_kasti_kõrgus)+258);
  TeX_punkti_koord2.style("font-size", "16px")
  TeX_punkti_koord2.style("line-height", "140%")
  TeX_punkti_koord2.style("font-family",'"Roboto", sans-serif')
  
}

function Kontroll(){
  x1_id_korras=false;
  y1_id_korras=false;
  punkt1_on_korras=false;
  
  x2_id_korras=false;
  y2_id_korras=false;
  punkt2_on_korras=false;
  
  sisend_x1=round_3(INPUT_X.value());
  sisend_y1=round_1(INPUT_Y.value());
  // if (tõus_K1*sisend_x+vabaliige_B1)
  võrrandi_VP1=round_1(tous_K1*sisend_x1+vabaliige_B1);
  võrrandi_PP1=round_1(ruutliige_A*sisend_x1*sisend_x1+lineaarliige_B*sisend_x1+vabaliige_C);
  
  
  sisend_x2=round_3(INPUT_X2.value());
  sisend_y2=round_1(INPUT_Y2.value());
  võrrandi_VP2=round_1(tous_K1*sisend_x2+vabaliige_B1);
  võrrandi_PP2=round_1(ruutliige_A*sisend_x2*sisend_x2+lineaarliige_B*sisend_x2+vabaliige_C);
  
  
  if (võrrandi_VP1==võrrandi_PP1){
    x1_id_korras=true;
  } else {
    x1_id_korras=false;
  }
  
  if (võrrandi_VP1==sisend_y1 && võrrandi_PP1==sisend_y1) {
    y1_id_korras=true;
  } else {
    y1_id_korras=false;
  }
  
    if (võrrandi_VP2==võrrandi_PP2){
    x2_id_korras=true;
  } else {
    x2_id_korras=false;
  }
  
  if (võrrandi_VP2==sisend_y2 && võrrandi_PP2==sisend_y2) {
    y2_id_korras=true;
  } else {
    y2_id_korras=false;
  }
  
  
  // ########################## KAS KOGU ÜL KORRAS? ##################################
  
  if (y1_id_korras==true && x1_id_korras==true && y2_id_korras==true && x2_id_korras==true){

    result_text.html("Korras!")
    result_text.style("color","green")
  } else {
    result_text.html("Ei sobi!");
    result_text.style("color","red")
  }
  
  // if (y_id_korras==true && x_id_korras==true && punkt_on_korras==true)
  //   {
  //     õige_vastus=õige_vastus+1;
  //     KONTROLL_NUPP.attribute("disabled","");
  //   }
  
  // ################ Ajutine alternatiiv ##############
   if (y1_id_korras==true && x1_id_korras==true && y2_id_korras==true && x2_id_korras==true){
     õige_vastus=õige_vastus+1;
     KONTROLL_NUPP.attribute("disabled","");
   }
}


function Reset(){
  y1_id_korras=false;
  x1_id_korras=false;
  y2_id_korras=false;
  x2_id_korras=false;
  
  if(ülesannete_loendur>0){
    
    INPUT_X.remove();
    INPUT_Y.remove();
    INPUT_X2.remove();
    INPUT_Y2.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    
  }
  
  y_id_korras=false;
  x_id_korras=false;
  punkt_on_korras=false;
  
  result_text.html("");
  yl_text.html("");
  yl_text2.html("");
  TeX_võrrand.html("");
  TeX_punkti_koord.html("");
  TeX_punkti_koord2.html("");
  Ylesanne();
  
   
  KONTROLL_NUPP=createButton("Kontrolli");
  KONTROLL_NUPP.style('padding','10px 20px');
  KONTROLL_NUPP.style('background-color','MidNightBlue');
  KONTROLL_NUPP.style('color','white');
  KONTROLL_NUPP.style('border-radius','30px');
  //KONTROLL_NUPP.position(width/2-80,height+30);
  KONTROLL_NUPP.style('margin-top','30px');
  KONTROLL_NUPP.style('margin-left','100px');
  KONTROLL_NUPP.position(4*width/5-180, (height-teksti_kasti_kõrgus)+130);
  KONTROLL_NUPP.attribute("enabled","");
  
  RESET_NUPP=createButton("Uus ülesanne");
  RESET_NUPP.style('padding','10px 20px');
  RESET_NUPP.style('background-color','#508bc3');
  RESET_NUPP.style('color','white');
  RESET_NUPP.style('border-radius','30px');
  //RESET_NUPP.position(width/2+10,height+30);
  RESET_NUPP.style('margin-top','30px');
  RESET_NUPP.style('margin-left','20px');
  RESET_NUPP.position(4*width/5-100,(height-teksti_kasti_kõrgus)+175);
  
  LÕPETA_NUPP=createButton("Lõpeta");
  LÕPETA_NUPP.style('padding','10px 20px');
  LÕPETA_NUPP.style('background-color','LightSteelBlue');
  LÕPETA_NUPP.style('color','black');
  LÕPETA_NUPP.style('font-weight','bold');
  LÕPETA_NUPP.style('border-radius','30px');
  //LÕPETA_NUPP.position(width/2+140,height+30);
  LÕPETA_NUPP.style('margin-top','30px');
  LÕPETA_NUPP.style('margin-left','80px');
  LÕPETA_NUPP.position(4*width/5-155, (height-teksti_kasti_kõrgus)+220);
  
  // ###################### SISENDID #################################
  INPUT_X=createInput();
  INPUT_X.size(55,17);
  INPUT_X.position(145,(height-teksti_kasti_kõrgus)+226);
  INPUT_X.style("font-size", "16px")
  INPUT_X.style("line-height", "140%")
  INPUT_X.style("font-family",'"Roboto", sans-serif')
  
  
  INPUT_Y=createInput();
  INPUT_Y.size(55,17);
  INPUT_Y.position(230,(height-teksti_kasti_kõrgus)+226);
  INPUT_Y.style("font-size", "16px")
  INPUT_Y.style("line-height", "140%")
  INPUT_Y.style("font-family",'"Roboto", sans-serif')
  
  
  INPUT_X2=createInput();
  INPUT_X2.size(55,17);
  INPUT_X2.position(145,(height-teksti_kasti_kõrgus)+275);

  INPUT_X2.style("font-size", "16px")
  INPUT_X2.style("line-height", "140%")
  INPUT_X2.style("font-family",'"Roboto", sans-serif')
  
  INPUT_Y2=createInput();
  INPUT_Y2.size(55,17);
  INPUT_Y2.position(230,(height-teksti_kasti_kõrgus)+275);
  INPUT_Y2.style("font-size", "16px")
  INPUT_Y2.style("line-height", "140%")
  INPUT_Y2.style("font-family",'"Roboto", sans-serif')
  
  
  ülesannete_loendur=ülesannete_loendur+1;

}

function graafik(xmin,xmax, jaotiste_arv) {
  
     if (y1_id_korras==true && x1_id_korras==true && y2_id_korras==true && x2_id_korras==true) {
  //----- Määramispiirkond X -----
  var i;
  var j;
   for (i = xmin , j = 0; i <=xmax ; i = i+0.1, j=j+1  ) {
     X[j]=i;
     X2[j]=i;
     Y[j]=tous_K1*X[j]+vabaliige_B1; //----- Muutumispiirkond Y -----
     Y2[j]=ruutliige_A*X2[j]*X2[j]+lineaarliige_B*X2[j]+vabaliige_C;
    }
  
  for (var k=0; k<=X.length; k=k+1) {
    if (X[k]*(width/jaotiste_arv)+width/2 >= 0 && X[k]*(width/jaotiste_arv)+width/2 <= width && Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 >=0 && Y[k]*((height-teksti_kasti_kõrgus)/jaotiste_arv)*(-1)+(height-teksti_kasti_kõrgus)/2 <= (height-teksti_kasti_kõrgus)  ){
    push();
    fill(0,0,0);
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
  
 if (mouseX >=0 && mouseX<= width && mouseY>=0 && mouseY<=height-teksti_kasti_kõrgus){
  hover_X=(round_0(mouseX/3)*3-width/2)/30;
  hover_Y=-1*(round_0(mouseY/3)*3-(height-teksti_kasti_kõrgus)/2)/30;
  
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
   
  } else {
    hover_X=0;
    hover_Y=0;
  }

}

function Lõpp(){

  
  KONTROLL_NUPP.attribute("disabled","");
  RESET_NUPP.attribute("disabled","");
  LÕPETA_NUPP.attribute("disabled","");
  
    INPUT_X.remove();
    INPUT_Y.remove();
    INPUT_X2.remove();
    INPUT_Y2.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove();
    yl_text.remove();
    yl_text2.remove();
    result_text.remove();
    TeX_võrrand.remove();
    TeX_punkti_koord.remove();
    TeX_punkti_koord2.remove();
    
  
  
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
