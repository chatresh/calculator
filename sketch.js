function setup() {
  createCanvas(450, 450);
  num1 = createButton('1');
  num2 = createButton('2');
  num3 = createButton('3');   
  num4 = createButton('4');
  num5 = createButton('5');
  num6 = createButton('6');
  num7 = createButton('7');
  num8 = createButton('8');
  num9 = createButton('9');
  num0 = createButton('0');

  add = createButton('+');
  sub = createButton('-'); 
  multi = createButton('*');
  div = createButton('/');
  
  on = createButton('ON');

  m1 = createButton('M+');
  m2 = createButton('M-');
  mrc= createButton('MRC');
  mu= createButton('MU');

  pn = createButton('+/-');
  gt = createButton('GT');

  percent=  createButton('%');
  equal = createButton('=');

  dot = createButton('.');
  bs  =createButton('back');
  n00 = createButton('00');
  n000 = createButton('000');
  
  c = createButton('C');

  sqr = createButton('sq/rt');
  }

function draw() {
  background(0,200,255);
  push();
  fill(0,255,0);
  rect(15,120,50,30);
  pn.position(35,135);
  rect(75,120,50,30);
  m1.position(95,135);
  rect(135,120,50,30);
  m2.position(155,135);
  rect(195,120,60,30);
  mrc.position(215,135);
  rect(265,120,50,30);
  mu.position(285,135);
  rect(335,120,50,30);
  gt.position(355,135);
  pop();
  num1.shapeColor = "red";
  push();
  fill("silver")
  rect(80,160,50,50);
  num7.position(102,182);
  num7.size(30,30);
  rect(140,160,50,50);
  num8.position(162,182);
  num8.size(30,30);
  rect(200,160,50,50);
  num9.position(222,182);
  num9.size(30,30);

  rect(80,220,50,50);
  num4.position(102,242);
  num4.size(30,30);
  rect(140,220,50,50);
  num5.position(162,242);
  num5.size(30,30);
  rect(200,220,50,50);
  num6.position(222,242);
  num6.size(30,30);
  rect(80,280,50,50);
  num3.position(102,302);
  num3.size(30,30);
  rect(140,280,50,50);
  num2.position(162,302);
  num2.size(30,30);

  rect(200,280,50,50);
  num1.position(222,302);
   num1.size(30,30);

  rect(15,350,50,50);
  num0.position(40,375);
  rect(80,350,50,50);
  n00.position(100,375);
  rect(140,350,50,50);
  n000.position(160,375);
  rect(200,350,50,50);
  dot.position(222,372);
  dot.size(30,30);
 
   pop();

   fill(255);
   rect(10,10,430,80);
  
   fill(255,0,0);
  rect(15,160,50,50);
  on.position(35,185);
  rect(15,220,50,50);
  bs.position(30,245);
  rect(15,280,50,50);
  c.position(40,305);

  fill(255,255,5);
  rect(260,160,50,50);
  percent.position(282,185);
  rect(260,220,50,50);
  multi.position(282,242);
  multi.size(30,30);
  rect(260,280,50,120);
  add.position(282,312);
  add.size(30,70);
  rect(335,160,50,50);
  sqr.position(350,185);
  rect(335,220,50,50);
  div.position(357,242);
  div.size(30,30);
  rect(335,280,50,50);
  sub.position(360,305);
  sub.size(27,27);
  rect(335,340,50,50);
  equal.position(360,365);
 line(0,100,450,100);
 fill(0);
 textSize(55);
 text("0",405,80);
 textSize(40);
 text("C A L C U L A T O R",30,440);
}