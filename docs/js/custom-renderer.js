// https://marked.js.org/using_pro#renderer
// https://github.com/markedjs/marked/blob/master/src/Tokens.ts

(function () {
    /**
     * /docsify/lib/docsify.js
     * https://www.npmjs.com/package/docsify?activeTab=code
     * 
     */
    function helper(className, content) {
        return ("<p class=\"" + className + "\">" + (content.slice(5).trim()) + "</p>");
    }

    function getAndRemoveConfig(str) {
        if (str === void 0) str = '';

        var config = {};

        if (str) {
            str = str
                .replace(/^('|")/, '')
                .replace(/('|")$/, '')
                .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (m, key, value) {
                    if (key.indexOf(':') === -1) {
                        config[key] = (value && value.replace(/&quot;/g, '')) || true;
                        return '';
                    }

                    return m;
                })
                .trim();
        }

        return { str: str, config: config };
    }

    function removeSubstring(str, substring) {
        return str.replace(new RegExp(substring, 'g'), '');
    }

    window.$docsify.markdown = window.$docsify.markdown || {};

    window.$docsify.markdown.renderer = {
        paragraph: function (text) {
            let result;

            if (/^!&gt;/.test(text)) {
                result = helper('warn', text);
            } else if (/^\?&gt;/.test(text)) {
                result = helper('tip', text);
            } else {
                result = "<p>" + text + "</p>";
            }

            return result;
        },
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
        },
        image: function (href, title, text) {

            if (getAndRemoveConfig(title).config.figure) {
                const figureTitle = removeSubstring(title, ':figure ');
                const fileName =
                    href
                        // 檔名+副檔名
                        .split('/').pop()
                        // 移除副檔名，保留原檔名中的'.'
                        .split('.').slice(0, -1).join('.');

                // alt 
                if (!text) {
                    text = `Figure ${fileName}`;
                }

                return `
                    <figure class="image-container">
                        ${this.origin.image(href, figureTitle, text)}
                        <figcaption>
                            <span class="figure-num">Figure ${fileName}</span>
                            <span class="figure-title">${getAndRemoveConfig(title).str}</span>
                        </figcaption>
                    </figure>
                `;
            }

            return `
                <figure class="image-container">
                    ${this.origin.image(href, title, text)}
                </figure>
            `;
        },
        table: function (header, rows) {
            return `
                <div class="table-wrapper">
                    <table>
                        <thead>${header}</thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            `;
        }
    };
})();
