(function () {
    const setTheme = (giscus) => {
        const ini = () => {
            const defaultTheme =
                document
                    .documentElement
                    .getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

            const giscusTheme = `https://A-Chyuan.github.io/blog/css/noborder_${defaultTheme}.css`;
            giscus.setAttribute('data-theme', giscusTheme);
        };

        // https://github.com/giscus/giscus/issues/336
        const dynamicThemeChanging = () => {
            // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events
            const sendMessage = (message) => {
                const iframe = document.querySelector('iframe.giscus-frame');
                if (!iframe) return;
                iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
            };

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        const newTheme = document.documentElement.getAttribute('data-theme');
                        sendMessage({
                            setConfig: {
                                theme: `https://A-Chyuan.github.io/blog/css/noborder_${newTheme}.css`
                            }
                        });
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true
            });
        };

        ini();
        dynamicThemeChanging();
    };

    const createGiscus = () => {
        const path = decodeURI(window.location.hash === '#/' ? 'Home' : window.location.hash);

        const giscus = document.createElement('script');

        giscus.setAttribute('src', 'https://giscus.app/client.js');
        giscus.setAttribute('data-repo', 'A-Chyuan/blog');
        giscus.setAttribute('data-repo-id', 'R_kgDOMsZH5Q');
        giscus.setAttribute('data-category', 'Announcements');
        giscus.setAttribute('data-category-id', 'DIC_kwDOMsZH5c4CiLdI');
        giscus.setAttribute('data-mapping', 'specific');
        giscus.setAttribute('data-term', path);
        giscus.setAttribute('data-reactions-enabled', '1');
        giscus.setAttribute('data-emit-metadata', '0');
        giscus.setAttribute('data-input-position', 'top');
        giscus.setAttribute('data-lang', 'zh-TW');
        giscus.setAttribute('crossorigin', 'anonymous');
        giscus.async = true;

        setTheme(giscus);

        return giscus;
    };

    const buildMeta = () => {
        const meta = document.createElement('meta');
        meta.name = 'giscus:backlink';
        meta.content = decodeURI(window.location.href);
        document.head.appendChild(meta);
    };

    const setBackLink = (vm) => {
        const meta = document.querySelector('meta[name="giscus:backlink"]');
        const dataPage = document.body.getAttribute('data-page');
        if (meta) {
            // meta.content = decodeURI(window.location.href);
            // meta.content = decodeURI(window.location.origin + window.location.pathname + '#/' + dataPage);
            const href = window.location.origin + window.location.pathname + '#' + vm.route.path;
            meta.content = decodeURI(href);
        }
    };

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            buildMeta();
        });

        hook.doneEach(() => {
            document
                .getElementById('main')
                .appendChild(createGiscus());

            setBackLink(vm);
        });
    }
})();
