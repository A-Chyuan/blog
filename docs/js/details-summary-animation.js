(function () {
    const resetAnimation = () => {
        const allDetails = document.querySelectorAll('details');

        allDetails.forEach((details) => {
            const summary = details.querySelector('summary');
            const contents = details.querySelectorAll('details > *:not(summary)');

            summary.addEventListener('click', event => {
                contents.forEach((content) => {
                    // https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
                    content.style.animation = 'none';

                    // trigger reflow
                    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
                    content.offsetHeight;

                    content.style.animation = null;
                });
            });
        });
    }

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.doneEach(() => {
            resetAnimation();
        });
    }
})();
