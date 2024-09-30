// https://marked.js.org/using_pro#renderer
// https://github.com/markedjs/marked/blob/master/src/Tokens.ts

(function () {
    window.$docsify.markdown = window.$docsify.markdown || {};

    window.$docsify.markdown.renderer = {
        code: function (code, lang) {
            if (lang === 'graphviz') {
                return (
                    `<div class="graphviz">
                        ${Viz(code)}
                    </div>`
                );
            }
            return this.origin.code.apply(this, arguments);
        },
        link: function (href, title, text) {
            if (title === ':encrypted') {
                return `<a href="#${href}" class="encrypted">${text}</a>`;
            }

            if (title === ':chapter-skipped') {
                return `${text}<ul></ul>`;
            }

            if (title === ':section-skipped') {
                return `<a href="javascript:void(0)" disabled>${text}</a>`;
            }

            return this.origin.link(href, title, text);
        }
    };
})();
