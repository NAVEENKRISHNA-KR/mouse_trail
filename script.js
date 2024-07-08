document.addEventListener('DOMContentLoaded', () => {
    const trailContainer = document.getElementById('trail-container');
    const trailLength = 10;
    const trailElements = [];

    for (let i = 0; i < trailLength; i++) {
        const div = document.createElement('div');
        div.classList.add('trail');
        trailContainer.appendChild(div);
        trailElements.push(div);
    }

    let mousePosX = 0, mousePosY = 0;
    let mouseTrailPosX = new Array(trailLength).fill(0);
    let mouseTrailPosY = new Array(trailLength).fill(0);

    document.addEventListener('mousemove', (e) => {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
    });

    function updateTrail() {
        for (let i = trailLength - 1; i > 0; i--) {
            mouseTrailPosX[i] = mouseTrailPosX[i - 1];
            mouseTrailPosY[i] = mouseTrailPosY[i - 1];
        }

        mouseTrailPosX[0] = mousePosX;
        mouseTrailPosY[0] = mousePosY;

        trailElements.forEach((el, index) => {
            el.style.transform = `translate(${mouseTrailPosX[index]}px, ${mouseTrailPosY[index]}px)`;
            el.style.opacity = 1 - (index / trailLength);
        });

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
});
