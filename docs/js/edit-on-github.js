(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, editOnGithub);

    function editOnGithub(hook, vm) {
        hook.afterEach(function (html) {
            const url = `https://github.com/A-Chyuan/blog/blob/main/docs/${vm.route.file}`;

            const editHtml = `
                <div class="edit-on-github">
                    <a href="${url}" target="_blank" rel="noopener">Edit On Github</a>
                </div>
            `;

            return (editHtml + html);
        });
    }
})();
