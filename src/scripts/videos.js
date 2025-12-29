document.querySelectorAll('.caro').forEach(caro => {
    const track = caro.querySelector('[data-caro-track]');
    const slides = Array.from(caro.querySelectorAll('.caro__slide'));
    const btnPrev = caro.querySelector('[data-caro-prev]');
    const btnNext = caro.querySelector('[data-caro-next]');
    const dotsWrap = caro.querySelector('[data-caro-dots]');

    let index = 0;

    // Dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'caro__dot';
        dot.setAttribute('aria-pressed', i === 0);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.caro__dot');

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;

        slides.forEach((slide, i) => {
            slide.toggleAttribute('aria-current', i === index);

            const video = slide.querySelector('video');
            if (video) {
                if (i === index) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });

        dots.forEach((dot, i) => {
            dot.setAttribute('aria-pressed', i === index);
        });
    }

    function goTo(i) {
        index = (i + slides.length) % slides.length;
        update();
    }

    btnPrev.addEventListener('click', () => goTo(index - 1));
    btnNext.addEventListener('click', () => goTo(index + 1));

    update();
});

