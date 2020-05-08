function setup(){
createCanvas(400,300);
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

addition = createButton('+');
equal = createButton('=');
}

function draw(){
addition.position(200,150);
addition.size(55);

addition.mousePressed(()=>{
  addition1 = createElement('h2');
  addition1.html("+");
  addition1.position(100,50);
})

equal.position(260,150);

num1.position(20,120);
num1.size(35);

num1.mousePressed(()=>{
  n1 = createElement('h2');
  n1.html("1");
  n1.position(50,50);
})

num2.position(60,120);
num2.size(35);

num2.mousePressed(()=>{
  n2 = createElement('h2');
  n2.html("2");
  n2.position(50,50);
})

num3.position(100,120);
num3.size(35);

num3.mousePressed(()=>{
  n3 = createElement('h2');
  n3.html("3");
  n3.position(50,50);
})

num4.position(20,150);
num4.size(35);

num4.mousePressed(()=>{
  n4 = createElement('h2');
  n4.html("4");
  n4.position(50,50);
})

num5.position(60,150);
num5.size(35);

num5.mousePressed(()=>{
  n5 = createElement('h2');
  n5.html("5");
  n5.position(50,50);
})

num6.position(100,150);
num6.size(35);

num6.mousePressed(()=>{
  n6 = createElement('h2');
  n6.html("6");
  n6.position(50,50);
})

num7.position(20,180);
num7.size(35);

num7.mousePressed(()=>{
  n7 = createElement('h2');
  n7.html("7");
  n7.position(50,50);
})

num8.position(60,180);
num8.size(35);

num8.mousePressed(()=>{
  n8 = createElement('h2');
  n8.html("8");
  n8.position(50,50);
})

num9.position(100,180);
num9.size(35);

num9.mousePressed(()=>{
  n9 = createElement('h2');
  n9.html("9");
  n9.position(50,50);
})

num0.position(60,220);
num0.size(35);

num0.mousePressed(()=>{
  n0 = createElement('h2');
  n0.html("0");
  n0.position(50,50);
})

line(0,100,400,100);
} 

