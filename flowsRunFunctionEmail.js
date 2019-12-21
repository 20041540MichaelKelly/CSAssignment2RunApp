var dist = input.body.data;

if (dist >= 1 && dist <= 1.1 ) {
  output.process = true;
  output.body.data = dist;
}
else if (dist >= 3 && dist <= 3.1 ) {
  output.process = true;
  output.body.data = dist;
} 
else if (dist >= 6 && dist <= 6.1 ) {
  output.process = true;
  output.body.data = dist;
}
else {
  output.process = false;
}
