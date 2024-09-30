(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.doneEach(function () {
            Prism.highlightAll();
        });
    }
})();
