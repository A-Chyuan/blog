function dirToggleOnClick() {
    if (document.documentElement.dir === "rtl") {
        document.documentElement.dir = "ltr";
    } else {
        document.documentElement.dir = "rtl";
    }
};

(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            document
                .querySelector('.dir-toggle')
                .addEventListener('click', dirToggleOnClick);
        });
    }
})();
