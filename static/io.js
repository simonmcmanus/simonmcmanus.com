// self executing function here
const fn = function() {

    function handleIntersection(entries) {
        entries.map((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        });
    }
    let options = {
        rootMargin: '0% 0% -10% 0%',
        threshold: .4
    }
    const observer = new IntersectionObserver(handleIntersection, options);

    var targets = document.querySelectorAll('.section')

    targets.forEach(target =>
        observer.observe(target, options)
    )

    var targets = document.querySelectorAll('.panels li')

    targets.forEach(target =>
        observer.observe(target, options)
    )


};

window.addEventListener('load', fn, false)