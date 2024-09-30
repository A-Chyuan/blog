(function () {
    const setTheme = (giscus) => {
        // 使用自訂 css 且上傳至 github，網址為：
        // 'https://A-Chyuan.github.io/blog/css/noborder_light.css'

        const ini = () => {
            const defaultTheme =
                document
                    .documentElement
                    .getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

                    // const giscusTheme = 'noborder_' + websiteTheme;
                    const giscusTheme = 'https://A-Chyuan.github.io/blog/css/noborder_' + defaultTheme + '.css';
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
                                // theme: 'noborder_' + newTheme
                                theme: 'https://A-Chyuan.github.io/blog/css/noborder_' + newTheme + '.css'
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

    const createGiscus = (vm) => {
        // const path = decodeURI((vm.route.path === '/' ? '/首頁' : vm.route.path).substr(1));
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
        giscus.setAttribute('data-loading', 'lazy');
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

    const setBackLink = () => {
        const meta = document.querySelector('meta[name="giscus:backlink"]');
        // meta.content = window.location.origin + window.location.pathname + decodeURI(window.location.hash);
        if(meta) {
            meta.content = decodeURI(window.location.href);
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
                .appendChild(createGiscus(vm));

            // TODO: Using the hash routerMode causes an issue.
            setBackLink();
            // setBackLink(decodeURI(vm.route.path));
        });
    }
})();
