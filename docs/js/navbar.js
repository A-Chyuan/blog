(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            document
                .querySelector('.app-nav-menu-icon')
                .addEventListener('click', (event) => {
                    event.currentTarget.classList.toggle('open');
                });
        });
    }
})();
