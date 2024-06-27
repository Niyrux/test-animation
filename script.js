document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;

        if (sectionTop <= windowHeight && rect.bottom >= 0) {
            let progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
            let totalProgress = progress * 4; // 4 stages of the border

            let topProgress = Math.min(totalProgress, 1);
            let rightProgress = Math.min(Math.max(totalProgress - 1, 0), 1);
            let bottomProgress = Math.min(Math.max(totalProgress - 2, 0), 1);
            let leftProgress = Math.min(Math.max(totalProgress - 3, 0), 1);

            section.style.setProperty('--border-progress-top', `${topProgress * 100}%`);
            section.style.setProperty('--border-progress-right', `${rightProgress * 100}%`);
            section.style.setProperty('--border-progress-bottom', `${bottomProgress * 100}%`);
            section.style.setProperty('--border-progress-left', `${leftProgress * 100}%`);
        } else {
            section.style.setProperty('--border-progress-top', '0%');
            section.style.setProperty('--border-progress-right', '0%');
            section.style.setProperty('--border-progress-bottom', '0%');
            section.style.setProperty('--border-progress-left', '0%');
        }
    });
});
