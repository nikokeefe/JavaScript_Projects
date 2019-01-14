// get canvas
const canvas = document.querySelector('#draw');

// get context
const ctx = canvas.getContext('2d');

// set canvas to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base settings...strokeStyle, lineCap, lineJoin
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// blend modes
ctx.globalCompositeOperation = 'multiply';

// dummy variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return // returns if not drawing

    console.log(e);
    // set color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    // now do the draw
    ctx.stroke();
    // reset new mouse co-ordinates
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // increment color
    hue++;
    if (hue >= 360) hue = 0;

    // vary line width
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction;
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
// if mouse leaves window
canvas.addEventListener('mouseout', () => isDrawing = false);