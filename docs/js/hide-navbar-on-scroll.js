(function () {
    const setInsetBlockStart = (element, value) => {
        element.style.insetBlockStart = value;
    };

    var prevScrollPos = window.scrollY;
    window.addEventListener('scroll', (event) => {
        var currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            setInsetBlockStart(
                document.querySelector('.nav-wrapper'),
                '0'
            );
        } else {
            setInsetBlockStart(
                document.querySelector('.nav-wrapper'),
                '-' + window.getComputedStyle(document.querySelector('.nav-wrapper')).blockSize
            );
        }
        prevScrollPos = currentScrollPos;
    });
})();
