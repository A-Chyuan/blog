(function () {
    const buildScrollToButton = (faIcon, id, action) => {
        const i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add(faIcon);
        const button = document.createElement('button');
        button.id = id;
        button.appendChild(i);
        document.querySelector('.scroll-to-buttons').appendChild(button);
        button.addEventListener('click', (event) => {
            action();
        });
    }

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            const scrollToButtons = document.createElement('div');
            scrollToButtons.classList.add('scroll-to-buttons');
            document.querySelector('main').appendChild(scrollToButtons);

            buildScrollToButton('fa-angle-up', 'scroll-up-button', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            buildScrollToButton('fa-angle-down', 'scroll-down-button', () => {
                document.querySelector('.docsify-pagination-container').scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            });
        });

        hook.doneEach(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        });
    }
})();
