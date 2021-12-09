var lastx,lasty;
var mouseEvent = "empty";


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
       
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
       cx = e.clientX - canvas.offsetLeft;
        cy = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + cx + "y = " + cy);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(cx,lasty);
        ctx.lineTo(cx,cx+15);
        ctx.closePath();
        ctx.stroke();
        }
        lastx=cx;
    }   lasty=cy;

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
