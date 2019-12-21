var speed = input.body.data;  

if(speed > 12 ) {
  output.process = true;
  output.body.data = speed;
}else {
  output.process = false;
}
