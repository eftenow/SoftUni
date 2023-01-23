function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');

    function gradientHoverHandler (e) {
        let percentage = Math.trunc(e.offsetX / (e.target.clientWidth  - 1) * 100);
        document.getElementById('result').textContent = percentage + `%`;
    }

    function outOfGradientHandler (e) {
        document.getElementById('result').textContent = '';
    }

    gradientElement.addEventListener('mousemove', gradientHoverHandler);
    gradientElement.addEventListener('mouseout', outOfGradientHandler);
}

