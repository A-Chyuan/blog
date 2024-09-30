(function () {
    window.$docsify.plugins = [].concat(window.$docsify.plugins, editOnGithub);

    function editOnGithub(hook, vm) {
        let wordsCount;

        hook.beforeEach((markdown) => {
            wordsCount = markdown.match(
                /([\u0800-\u4e00]+?|[\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g
            ).length
            return markdown
        });

        hook.afterEach((html) => {
            const url = `https://github.com/A-Chyuan/blog/blob/main/docs/${vm.route.file}`;

            const editHtml = `
                <div id="article-info">
                    <span id="edit-on-github">
                        <a href="${url}" target="_blank" rel="noopener">Edit On Github</a>
                    </span>
                    <span id="word-count">
                        ${wordsCount} words
                    </span>
                </div>
            `;

            return (editHtml + html);
        });
    }
})();
