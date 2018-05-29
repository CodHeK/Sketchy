function setup() {
  document.body.style['userSelect'] = 'none';
  let h = document.body.clientHeight;
  let c = createCanvas(windowWidth, h);
  c.position(0, 0);
  //c.style('pointer-events', 'none');
  clear();
  console.log("canvas ready");
}

function draw() {
  console.log("in draw()");
  stroke(0);
  strokeWeight(4);
  if(mouseIsPressed)
    line(mouseX, mouseY, pmouseX, pmouseY);
}
