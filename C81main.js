canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "Black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(100, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    color = document.getElementById("color").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearr() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
