const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px...walk, how far the shadow will stretch

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    let x = e.offsetX; // let, as may need reassignment
    let y = e.offsetY;

    // if you move mouse over a child element it will give you co-ordinates starting at the child element....soo, we offset it if we are on a child like soooo...
    // this is what we're 'listening on
    // e.target is what we are triggered on

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // walk is 100px so our range is 50 to -50....hence the equation..
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`;
}

hero.addEventListener('mousemove', shadow);