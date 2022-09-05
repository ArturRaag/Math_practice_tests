var X=[];
var Y=[];
var x_koord=0.0, y_koord=0.0;
var ülesannete_loendur=0;
var õige_vastus=0;
var lõpetamise_tingimus=false;
var teksti_kasti_kõrgus=350;
var punkti_raadius=5;
var tähed=["A","B","C","D","E","F","G","H"];

var xmin=-10; // HETKE SEISUGA PEAVAD NEED KOLM KOKKU KLAPPIMA!!!
var xmax=10;  // Teisisõnu xmin + xmax absoluutväärtused peavad kokku andma jaotiste arvu. 
var jaotiste_arv=20;


function setup() {
  createCanvas(800,800+teksti_kasti_kõrgus);
  x_koord=width/2;
  y_koord=height/2;
  Write_texts();
  Reset();
}


function draw() {
  background(255);
  XYplane(jaotiste_arv, 0.25, 2); //parameetriks on [jaotiste_arv(teljel), tausta_jaotise_paksus, telje_jaotiste_paksus]
  create_a_Point();
  create_TABLE();
  graafik(xmin,xmax, jaotiste_arv);
  mouse_Hover()
  
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
  while (jaotisY <= height-teksti_kasti_kõrgus) {
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


var X_koordinaadid=Array(8);
var Y_koordinaadid=Array(8);
for (var i=0; i<8; i++){
    X_koordinaadid[i]=-10
    Y_koordinaadid[i]=-10
}

function create_a_Point(){
  
  if (points_on_plot==1){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==2) {
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==3){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==4){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==5){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==6){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==7){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot==8){
    X_koordinaadid[points_on_plot-1]=x_koord;
    Y_koordinaadid[points_on_plot-1]=y_koord;
  } else if (points_on_plot>8){
    points_on_plot=0;
    for (var i=0; i<8; i++){
    X_koordinaadid[i]=-10
    Y_koordinaadid[i]=-10
    }
  } 
  
  for (var i = 0; i<8; i++) {
    push();
    fill(0,139,195);
    circle(round_0(X_koordinaadid[i]/4)*4, round_0(Y_koordinaadid[i]/4)*4, punkti_raadius);
    pop();
    push();
    strokeWeight(4);
    stroke(255);
    text(tähed[i],round_0(X_koordinaadid[i]/4)*4-5, round_0(Y_koordinaadid[i]/4)*4-10 )
    pop();
    
  }
  
}

function Ylesanne(){
  lugeja=(round_0(random(-100,100)/5)*5)/10;
  vabaliige_B=(round_0(random(-50,50)/5)*5)/10;
  nimetaja=(round_0(random(-100,100)/5)*5)/10;
  
  if (nimetaja==0){
    nimetaja=(round_0(random(0,100)/5)*5)/10;
  }
  
  if (vabaliige_B>=0){
    vabaliige_B_str="+ "+str(vabaliige_B);
  } else {
    vabaliige_B_str=str(vabaliige_B)
  }
  
  LaTeX_string="y=\\dfrac{"+str(lugeja)+ "}{" +str(nimetaja)+"x}"+vabaliige_B_str;
  
  katex.render( LaTeX_string, TeX_text.elt);
}

function create_TABLE(){
  line(35,(height-teksti_kasti_kõrgus)+130,620,(height-teksti_kasti_kõrgus)+130); // horizontal line 1
  line(35,(height-teksti_kasti_kõrgus)+155,620,(height-teksti_kasti_kõrgus)+155); //horizontal line 2
  line(35,(height-teksti_kasti_kõrgus)+180,620,(height-teksti_kasti_kõrgus)+180); //horizontal line 3
  
  
  line(35,(height-teksti_kasti_kõrgus)+130,35,(height-teksti_kasti_kõrgus)+180); //vertical line 1
  line(70,(height-teksti_kasti_kõrgus)+130,70,(height-teksti_kasti_kõrgus)+180); //vertical line 2
  line(130,(height-teksti_kasti_kõrgus)+130,130,(height-teksti_kasti_kõrgus)+180); //vertical line 3
  line(200,(height-teksti_kasti_kõrgus)+130,200,(height-teksti_kasti_kõrgus)+180); //vertical line 4
  line(270,(height-teksti_kasti_kõrgus)+130,270,(height-teksti_kasti_kõrgus)+180); //vertical line 5
  line(340,(height-teksti_kasti_kõrgus)+130,340,(height-teksti_kasti_kõrgus)+180); //vertical line 6
  line(410,(height-teksti_kasti_kõrgus)+130,410,(height-teksti_kasti_kõrgus)+180); //vertical line 7
  line(480,(height-teksti_kasti_kõrgus)+130,480,(height-teksti_kasti_kõrgus)+180); //vertical line 8
  line(550,(height-teksti_kasti_kõrgus)+130,550,(height-teksti_kasti_kõrgus)+180); //vertical line 9
  line(620,(height-teksti_kasti_kõrgus)+130,620,(height-teksti_kasti_kõrgus)+180); //vertical line 10
  
  push();
  strokeWeight(0.5);
  text("X",45,(height-teksti_kasti_kõrgus)+147);
  text("Y",45,(height-teksti_kasti_kõrgus)+172);
  pop();
  
  
  
}

function Write_texts(){
  yl_text=createP("On antud funktsioon: <br><br>Täida funktsiooni väärtustetabel, ning kanna punktid graafikule.<br>Tulemused ümarda 1 koht pärast koma.<br><br><br><br><br>Praegune seis:<br><br> 1) <br> 2) <br> 3)  ");
  yl_text.position(35,(height-teksti_kasti_kõrgus)+17);
  yl_text.style("font-size","16px");
  yl_text.style("line-height","140%");
  yl_text.style("font-family","'Roboto', sans-sarif");
  
  yl_text_2=createP("<br><br><br><br><br><br><br><br><br><br> 4)<br> 5)<br> 6)<br>");
  yl_text_2.position(315, (height-teksti_kasti_kõrgus)+17);
  yl_text_2.style("font-size","16px");
  yl_text_2.style("line-height","140%");
  yl_text_2.style("font-family","'Roboto', sans-sarif");
  
  yl_text_3=createP("<br><br><br><br><br><br><br><br><br><br> 7)<br> 8)<br> 9)<br>");
  yl_text_3.position(515, (height-teksti_kasti_kõrgus)+17);
  yl_text_3.style("font-size","16px");
  yl_text_3.style("line-height","140%");
  yl_text_3.style("font-family","'Roboto', sans-sarif");
  
  TeX_text=createP("");
  TeX_text.position(200,(height-teksti_kasti_kõrgus)+5);
  
  
  result_text=createP("");
  result_text.position(55,(height-teksti_kasti_kõrgus)+240);
  result_text.style("font-size","16px");
  result_text.style("line-height","140%");
  result_text.style("font-family","'Roboto', sans-sarif");
  
  p1_text=createP("");
  p1_text.position(55,(height-teksti_kasti_kõrgus)+263);
  p1_text.style("font-size","16px");
  p1_text.style("line-height","140%");
  p1_text.style("font-family","'Roboto', sans-sarif");
  
  p2_text=createP("");
  p2_text.position(55,(height-teksti_kasti_kõrgus)+287);
  p2_text.style("font-size","16px");
  p2_text.style("line-height","140%");
  p2_text.style("font-family","'Roboto', sans-sarif");
  
  p3_text=createP("");
  p3_text.position(335,(height-teksti_kasti_kõrgus)+240);
  p3_text.style("font-size","16px");
  p3_text.style("line-height","140%");
  p3_text.style("font-family","'Roboto', sans-sarif");
  
  p4_text=createP("");
  p4_text.position(335,(height-teksti_kasti_kõrgus)+263);
  p4_text.style("font-size","16px");
  p4_text.style("line-height","140%");
  p4_text.style("font-family","'Roboto', sans-sarif");
  
  p5_text=createP("");
  p5_text.position(335,(height-teksti_kasti_kõrgus)+287);
  p5_text.style("font-size","16px");
  p5_text.style("line-height","140%");
  p5_text.style("font-family","'Roboto', sans-sarif");
  
  p6_text=createP("");
  p6_text.position(535,(height-teksti_kasti_kõrgus)+240);
  p6_text.style("font-size","16px");
  p6_text.style("line-height","140%");
  p6_text.style("font-family","'Roboto', sans-sarif");
  
  
  p7_text=createP("");
  p7_text.position(535,(height-teksti_kasti_kõrgus)+263);
  p7_text.style("font-size","16px");
  p7_text.style("line-height","140%");
  p7_text.style("font-family","'Roboto', sans-sarif");
  
  p8_text=createP("");
  p8_text.position(535,(height-teksti_kasti_kõrgus)+287);
  p8_text.style("font-size","16px");
  p8_text.style("line-height","140%");
  p8_text.style("font-family","'Roboto', sans-sarif"); 
}

function Kontroll(){
  
  // ##########################  TABELI KONTROLL ###############################
  
  X_ide_massiiv=Array(8);
  X_ide_massiiv[0]=INPUT_X1.value();
  X_ide_massiiv[1]=INPUT_X2.value();
  X_ide_massiiv[2]=INPUT_X3.value();
  X_ide_massiiv[3]=INPUT_X4.value();
  X_ide_massiiv[4]=INPUT_X5.value();
  X_ide_massiiv[5]=INPUT_X6.value();
  X_ide_massiiv[6]=INPUT_X7.value();
  X_ide_massiiv[7]=INPUT_X8.value();
  //console.log(X_ide_massiiv);
  
  Y_ide_massiiv=Array(8);
  Y_ide_massiiv[0]=INPUT_Y1.value();
  Y_ide_massiiv[1]=INPUT_Y2.value();
  Y_ide_massiiv[2]=INPUT_Y3.value();
  Y_ide_massiiv[3]=INPUT_Y4.value();
  Y_ide_massiiv[4]=INPUT_Y5.value();
  Y_ide_massiiv[5]=INPUT_Y6.value();
  Y_ide_massiiv[6]=INPUT_Y7.value();
  Y_ide_massiiv[7]=INPUT_Y8.value();
  
  // ----- Kas tabelis on tühi kast? Lisaks, kas mõni ==0 ? -----
  tühjuse_tingimus=false;
  null_väärtus_tabelis=false;
  for (var i = 0;i<8; i++){
    if (str(X_ide_massiiv[i])=="" || str(Y_ide_massiiv[i])==""){
      tühjuse_tingimus=true;
    }
    if(X_ide_massiiv[i]==0){
      null_väärtus_tabelis=true;
    }
    }
  
  // ----- Kas X-id on kasvamis järjekorras? -----
  ei_ole_kasvav=false;
  for (var i =0; i<7; i++){
    //console.log(str(X_ide_massiiv[7-i])+"*****"+ str(X_ide_massiiv[(7-i)-1]))
    if ( float(X_ide_massiiv[7-i]) <= float(X_ide_massiiv[(7-i)-1]) ){
      ei_ole_kasvav=true;
      //console.log("ei kasva!")
    }
  }
  
  
  if (tühjuse_tingimus==true){
    result_text.html("Tabel on tühi!");
    condition_for_finishing_table=false;
    result_text.style("color","red");
  }
    else if(null_väärtus_tabelis==true){
    result_text.html("X-ide real on 0! Nulliga jagada ei saa!")
    condition_for_finishing_table=false;
    result_text.style("color","red");
  }
   else if (ei_ole_kasvav==true) {
    result_text.html("X-id ei ole kasvavas järjekorras!");
    condition_for_finishing_table=false;
    result_text.style("color","red");
  }
  else if (tühjuse_tingimus==false && ei_ole_kasvav==false && null_väärtus_tabelis==false) {
    func_Y_väärtus_1=round_1((lugeja/(nimetaja*INPUT_X1.value()))+vabaliige_B);
    func_Y_väärtus_2=round_1((lugeja/(nimetaja*INPUT_X2.value()))+vabaliige_B);
    func_Y_väärtus_3=round_1((lugeja/(nimetaja*INPUT_X3.value()))+vabaliige_B);
    func_Y_väärtus_4=round_1((lugeja/(nimetaja*INPUT_X4.value()))+vabaliige_B);
    func_Y_väärtus_5=round_1((lugeja/(nimetaja*INPUT_X5.value()))+vabaliige_B);
    func_Y_väärtus_6=round_1((lugeja/(nimetaja*INPUT_X6.value()))+vabaliige_B);
    func_Y_väärtus_7=round_1((lugeja/(nimetaja*INPUT_X7.value()))+vabaliige_B);
    func_Y_väärtus_8=round_1((lugeja/(nimetaja*INPUT_X8.value()))+vabaliige_B);
    //console.log(func_Y_väärtus_1,func_Y_väärtus_2, func_Y_väärtus_3, func_Y_väärtus_4, func_Y_väärtus_5,func_Y_väärtus_6,func_Y_väärtus_7,func_Y_väärtus_8)
    if (INPUT_Y1.value() == func_Y_väärtus_1 && INPUT_Y2.value() == func_Y_väärtus_2 && INPUT_Y3.value()==func_Y_väärtus_3 && INPUT_Y4.value()==func_Y_väärtus_4 && INPUT_Y5.value()==func_Y_väärtus_5 && INPUT_Y6.value() == func_Y_väärtus_6 && INPUT_Y7.value() == func_Y_väärtus_7 && INPUT_Y8.value()==func_Y_väärtus_8){
        result_text.html("Väärtustetabel on ÕIGESTI arvutatud!")
        condition_for_finishing_table=true;
        result_text.style("color","green");
  } else {
        result_text.html("Väärtustetabel on VALESTI arvutatud.")
        condition_for_finishing_table=false;
        result_text.style("color","red");
  }
  }
  
  
  // ############################# GRAAFIKU KONTROLL ##############################
  
  // PUNKT A
  if ( (((round_0(X_koordinaadid[0]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[0])) && (-1*((round_0(Y_koordinaadid[0]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[0])+vabaliige_B))) ){
    p1_text.html("Punkt A on korras!");
    condition_for_finishing_point_A=true;
    p1_text.style("color","green");
      } else {
        p1_text.html("Punkti A asukoht ei sobi.");
        condition_for_finishing_point_A=false;
        p1_text.style("color","red");
      }
  
  // PUNKT B
  if ( (((round_0(X_koordinaadid[1]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[1])) && (-1*((round_0(Y_koordinaadid[1]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[1])+vabaliige_B))) ){
    p2_text.html("Punkt B on korras!");
    condition_for_finishing_point_B=true;
    p2_text.style("color","green");
      } else {
        p2_text.html("Punkti B asukoht ei sobi.");
        condition_for_finishing_point_B=false;
        p2_text.style("color","red");
      }
  
  // PUNKT C
    if ( (((round_0(X_koordinaadid[2]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[2])) && (-1*((round_0(Y_koordinaadid[2]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[2])+vabaliige_B))) ){
    p3_text.html("Punkt C on korras!");
    condition_for_finishing_point_C=true;
      p3_text.style("color","green");
      } else {
        p3_text.html("Punkti C asukoht ei sobi.");
        condition_for_finishing_point_C=false;
        p3_text.style("color","red");
      }
  // PUNKT D
    if ( (((round_0(X_koordinaadid[3]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[3])) && (-1*((round_0(Y_koordinaadid[3]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[3])+vabaliige_B))) ){
    p4_text.html("Punkt D on korras!");
    condition_for_finishing_point_D=true;
      p4_text.style("color","green");
      } else {
        p4_text.html("Punkti D asukoht ei sobi.");
        condition_for_finishing_point_D=false;
        p4_text.style("color","red");
      }
  // PUNKT E
    if ( (((round_0(X_koordinaadid[4]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[4])) && (-1*((round_0(Y_koordinaadid[4]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[4])+vabaliige_B))) ){
    p5_text.html("Punkt E on korras!");
    condition_for_finishing_point_E=true;
      p5_text.style("color","green");
      } else {
        p5_text.html("Punkti E asukoht ei sobi.");
        condition_for_finishing_point_E=false;
        p5_text.style("color","red");
      }
  // PUNKT F
    if ( (((round_0(X_koordinaadid[5]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[5])) && (-1*((round_0(Y_koordinaadid[5]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[5])+vabaliige_B))) ){
    p6_text.html("Punkt F on korras!");
    condition_for_finishing_point_F=true;
      p6_text.style("color","green");
      } else {
        p6_text.html("Punkti F asukoht ei sobi.");
        condition_for_finishing_point_F=false;
        p6_text.style("color","red");
      }
  // PUNKT G
    if ( (((round_0(X_koordinaadid[6]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[6])) && (-1*((round_0(Y_koordinaadid[6]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[6])+vabaliige_B))) ){
    p7_text.html("Punkt G on korras!");
    condition_for_finishing_point_G=true;
      p7_text.style("color","green");
      } else {
        p7_text.html("Punkti G asukoht ei sobi.");
        condition_for_finishing_point_G=false;
        p7_text.style("color","red");
      }
  // PUNKT H
    if ( (((round_0(X_koordinaadid[7]/4)*4)-width/2)/40)==(round_1(X_ide_massiiv[7])) && (-1*((round_0(Y_koordinaadid[7]/4)*4)-(height-teksti_kasti_kõrgus)/2)/40) == (round_1((lugeja/(nimetaja*X_ide_massiiv[7])+vabaliige_B))) ){
    p8_text.html("Punkt H on korras!");
    condition_for_finishing_point_H=true;
      p8_text.style("color","green");
      } else {
        p8_text.html("Punkti H asukoht ei sobi.");
        condition_for_finishing_point_H=false;
        p8_text.style("color","red");
      }
  
  //  ########################## KAS KOGU ÜL KORRAS? ##################################
    if (condition_for_finishing_point_B==true && condition_for_finishing_point_A==true && condition_for_finishing_table==true && condition_for_finishing_point_C==true && condition_for_finishing_point_D==true && condition_for_finishing_point_E==true && condition_for_finishing_point_F==true && condition_for_finishing_point_G==true && condition_for_finishing_point_H==true ){
    õige_vastus=õige_vastus+1;
    KONTROLL_NUPP.attribute("disabled","");
  }
  
}


function Reset(){
  
  if(ülesannete_loendur>0){
    
    INPUT_X1.remove();
    INPUT_X2.remove();
    INPUT_X3.remove();
    INPUT_X4.remove();
    INPUT_X5.remove();
    INPUT_X6.remove();
    INPUT_X7.remove();
    INPUT_X8.remove();
    
    INPUT_Y1.remove();
    INPUT_Y2.remove();
    INPUT_Y3.remove();
    INPUT_Y4.remove();
    INPUT_Y5.remove();
    INPUT_Y6.remove();
    INPUT_Y7.remove();
    INPUT_Y8.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    
  }
  
  
  
  condition_for_finishing_table=false;
  condition_for_finishing_point_A=false;
  condition_for_finishing_point_B=false;
  condition_for_finishing_point_C=false;
  condition_for_finishing_point_D=false;
  condition_for_finishing_point_E=false;
  condition_for_finishing_point_F=false;
  condition_for_finishing_point_G=false;
  condition_for_finishing_point_H=false;
  
  
  points_on_plot=0;
for (var i=0; i<8; i++){
    X_koordinaadid[i]=-10
    Y_koordinaadid[i]=-10
}
  
  result_text.html("");
  p1_text.html("");
  p2_text.html("");
  p3_text.html("");
  p4_text.html("");
  p5_text.html("");
  p6_text.html("");
  p7_text.html("");
  p8_text.html("");
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

  KONTROLL_NUPP.position(4*width/5-250, (height-teksti_kasti_kõrgus)+0);
  RESET_NUPP.position(4*width/5-50,(height-teksti_kasti_kõrgus)+0);
  LÕPETA_NUPP.position(4*width/5-75, (height-280));
  
  // ###################### VÄÄRTUSTETABELI SISENDID #################################
  INPUT_X1=createInput();
  INPUT_X1.size(50,17)
  INPUT_X1.position(71,(height-teksti_kasti_kõrgus)+131);
  
  
  INPUT_X2=createInput();
  INPUT_X2.size(59,17)
  INPUT_X2.position(132,(height-teksti_kasti_kõrgus)+131);
  
  
  INPUT_X3=createInput();
  INPUT_X3.size(59,17)
  INPUT_X3.position(202,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_X4=createInput();
  INPUT_X4.size(58,17)
  INPUT_X4.position(272,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_X5=createInput();
  INPUT_X5.size(58,17)
  INPUT_X5.position(342,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_X6=createInput();
  INPUT_X6.size(58,17)
  INPUT_X6.position(412,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_X7=createInput();
  INPUT_X7.size(58,17)
  INPUT_X7.position(482,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_X8=createInput();
  INPUT_X8.size(59,17)
  INPUT_X8.position(552,(height-teksti_kasti_kõrgus)+131);
  
  INPUT_Y1=createInput();
  INPUT_Y1.size(50,17)
  INPUT_Y1.position(71,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y2=createInput();
  INPUT_Y2.size(59,17)
  INPUT_Y2.position(132,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y3=createInput();
  INPUT_Y3.size(59,17)
  INPUT_Y3.position(202,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y4=createInput();
  INPUT_Y4.size(59,17)
  INPUT_Y4.position(272,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y5=createInput();
  INPUT_Y5.size(59,17)
  INPUT_Y5.position(342,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y6=createInput();
  INPUT_Y6.size(59,17)
  INPUT_Y6.position(412,(height-teksti_kasti_kõrgus)+156); 
  
  INPUT_Y7=createInput();
  INPUT_Y7.size(59,17)
  INPUT_Y7.position(482,(height-teksti_kasti_kõrgus)+156);
  
  INPUT_Y8=createInput();
  INPUT_Y8.size(59,17)
  INPUT_Y8.position(552,(height-teksti_kasti_kõrgus)+156);
  
  
  ülesannete_loendur=ülesannete_loendur+1;
}

function graafik(xmin,xmax, jaotiste_arv) {
  
    if (condition_for_finishing_point_A == true && condition_for_finishing_point_B == true && condition_for_finishing_table==true && condition_for_finishing_point_C==true && condition_for_finishing_point_D==true && condition_for_finishing_point_E==true && condition_for_finishing_point_F==true && condition_for_finishing_point_G==true && condition_for_finishing_point_H==true) {
  //----- Määramispiirkond X -----
  var i;
  var j;
   for (i = xmin , j = 0; i <=xmax ; i = i+0.1, j=j+1  ) {
     X[j]=i;
     Y[j]=lugeja/(nimetaja*X[j])+vabaliige_B; //----- Muutumispiirkond Y -----
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
    }
}

function mouse_Hover(){
  
  if (mouseX >=0 && mouseX<= width && mouseY>=0 && mouseY<=height-teksti_kasti_kõrgus){
  hover_X=(round_0(mouseX/4)*4-width/2)/40;
  hover_Y=-1*(round_0(mouseY/4)*4-(height-teksti_kasti_kõrgus)/2)/40;
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
  
    INPUT_X1.remove();
    INPUT_X2.remove();
    INPUT_X3.remove();
    INPUT_X4.remove();
    INPUT_X5.remove();
    INPUT_X6.remove();
    INPUT_X7.remove();
    INPUT_X8.remove();
    
    INPUT_Y1.remove();
    INPUT_Y2.remove();
    INPUT_Y3.remove();
    INPUT_Y4.remove();
    INPUT_Y5.remove();
    INPUT_Y6.remove();
    INPUT_Y7.remove();
    INPUT_Y8.remove();
    RESET_NUPP.remove();
    LÕPETA_NUPP.remove();
    KONTROLL_NUPP.remove()
    yl_text.remove();
    yl_text_2.remove();
    yl_text_3.remove();
    result_text.remove();
    TeX_text.remove();
    p1_text.remove();
    p2_text.remove();
    p3_text.remove();
    p4_text.remove();
    p5_text.remove();
    p6_text.remove();
    p7_text.remove();
    p8_text.remove();
  
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
