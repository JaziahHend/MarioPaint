function setup() {
    createCanvas(500, 500);
    background(225);
    stroke("black")
    fill("green");
    rect(50, 300, 50, 50);
    fill("red");
    rect(150, 300, 50, 50);
    fill("purple");
    rect(250, 300, 50, 50);
    fill("white");
    rect(350, 300, 50, 50);
}
function mouseDragged() {
    ellipse(mouseX, mouseY,10,5);
}
function mouseClicked() {
    if (mouseX < 100 && mouseX > 50 && mouseY < 350 && mouseY > 50){
        fill("green");
} else if(mouseX < 200 && mouseX > 50 && mouseY < 350 && mouseY > 50){
        fill("red");
} else if (mouseX < 300 && mouseX > 50 && mouseY < 350 && mouseY > 50){
        fill("purple"); 
}  else if (mouseX < 400 && mouseX > 50 &&  mouseY < 350 && mouseY > 50) {
    background("white");
    setup();
        }
}