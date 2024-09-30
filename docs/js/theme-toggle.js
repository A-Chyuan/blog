/*
    https://web.dev/patterns/theming/theme-switch
    https://web.dev/articles/building/a-theme-switch-component
*/

function themeToggleOnClick() {
    // flip current value
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light';

    setPreference();
};

const storageKey = 'theme-preference';

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const reflectPreference = () => {
    document.documentElement
        .setAttribute('data-theme', theme.value);

    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value);

    const prismjsHref = theme.value === 'light'
        ? 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css'
        : 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism-okaidia.min.css';

    document.querySelector('#prismjs-css-link').setAttribute('href', prismjsHref);
};

const theme = {
    value: getColorPreference(),
};

(function () {
    // set early so no page flashes / CSS is made aware
    reflectPreference();

    window.onload = () => {
        // set on load so screen readers can see latest value on the button
        reflectPreference();
    };

    // sync with system changes
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches: isDark }) => {
            theme.value = isDark ? 'dark' : 'light';
            setPreference();
        });

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            // now this script can find and listen for clicks on the control
            document
                .querySelector('#theme-toggle')
                .addEventListener('click', themeToggleOnClick);
        });
    }
})();
