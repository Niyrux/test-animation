var projects = document.querySelectorAll('.box');

var options = {
    threshold: 0.7
};

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            var topOffset = entry.target.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        } else {
            entry.target.classList.remove('active');
        }
    });
}, options);

projects.forEach(function (project) {
    observer.observe(project);
});
