(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            const progress = document.querySelector('div.progress');

            window.addEventListener('scroll', (event) => {
                const start = window.document.documentElement.offsetTop;
                const end = document.querySelector('.docsify-pagination-container').offsetTop;
                const height = end - start;
                const current = window.document.documentElement.scrollTop - start;
                const progressPercentage = Math.min((current / height) * 100, 100);

                progress.style.opacity = 1;
                progress.style.inlineSize = progressPercentage + '%';
            })
        });
    }
})();
