function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
};

function wrapElement(wrapperElement, element) {
    element.parentNode.insertBefore(wrapperElement, element);
    wrapperElement.appendChild(element);
};

(function () {
    const removeElement = (element) => {
        element.parentNode.removeChild(element);
    };

    const insertElements = (parentNode, ...elements) => {
        elements.reverse().forEach((element) => {
            parentNode.insertBefore(element, parentNode.firstChild);
        });
    };

    const appendElements = (parentNode, ...elements) => {
        elements.forEach((element) => {
            parentNode.appendChild(element);
        });
    };

    const rearrangeNavbar = () => {
        const navbar = createElement('header', 'nav-wrapper');
        navbar.innerHTML = `
            <div class="nav-middle">
                <div class="nav-button-wrapper">
                    <div class="app-nav-wrapper">
                        <button class="app-nav-menu-icon" title="Top Navigation﹙\`﹚">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </button>
                    </div>
                </div>
                <div class="search-wrapper"></div>
            </div>
        `;
        insertElements(document.body, navbar);
        appendElements(
            document.querySelector('.app-nav-wrapper'),
            document.querySelector('.app-nav')
        );

        appendElements(
            document.querySelector('.search-wrapper'),
            document.querySelector('.search')
        );
    };

    const rearrangeSidebar = () => {
        removeElement(document.querySelector('.sidebar-toggle-button'));

        insertElements(
            document.querySelector('.sidebar'),
            createElement('div', 'profile-wrapper')
        );

        const avatar = createElement('div', 'avatar')
        avatar.innerHTML = `
            <a href="https://a-chyuan.github.io/blog/" title="Home">
                <img src="https://github.com/A-Chyuan.png">
            </a>
        `;

        // 注音字體
        // https://github.com/justfont/Elffont?tab=readme-ov-file
        const siteTitle = createElement('div', 'site-title');
        siteTitle.innerHTML = `
            <a href="https://a-chyuan.github.io/blog/" title="Home">
                A-Chyuan
            </a>
            <div class="site-subtitle">
                <i class="fa-solid fa-paw"></i>
                <i class="fa-solid fa-paw"></i>
                <i class="fa-solid fa-paw"></i>
            </div>
        `;

        const sidebarButtonWrapper = createElement('div', 'sidebar-button-wrapper');
        sidebarButtonWrapper.innerHTML = `
            <button class="home-button">
                <a href="#/" title="Home">
                    <i class="fa-solid fa-house"></i>
                </a>
            </button>
            <form id="search-dictionary" title="Dictionary">
                <div>
                    <input placeholder="Dictionary" type="search" required>
                    <button type="reset"></button>
                </div>
            </form>
            <button id="theme-toggle" class="theme-toggle" title="Light / Dark﹙\\﹚">
                <svg class="sun-and-moon" aria-hidden="true" viewBox="0 0 24 24">
                    <mask class="moon" id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                        <g class="sun-beams" stroke="currentColor">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </svg>
            </button>
        `;

        insertElements(
            document.querySelector('.profile-wrapper'),
            avatar,
            siteTitle,
            sidebarButtonWrapper
        );

        document
            .querySelector('.sidebar-toggle')
            .setAttribute('title', 'Side navigation﹙Esc﹚');

        appendElements(
            document.querySelector('.sidebar'),
            document.querySelector('.sidebar-toggle')
        );
    };

    const rearrangeFooter = () => {
        document
            .querySelector('footer')
            .innerHTML = `
                <div class="link-wrapper">
                    <a
                        href="https://github.com/A-Chyuan/blog"
                        title="Source on Github"
                        target="_blank"
                    >
                            <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://leetcode.com/u/a-chyuan/"
                        title="leetcode"
                        target="_blank"
                    >
                            <i class="cib-leetcode"></i>
                    </a>
                </div>
                <div class="copyright">
                    <p>
                        &copy; 2024–<span id="year"></span> Ming-Chyuan, Ko
                    </p>
                </div>
                <div class="browser-compatibility">
                    <i class="fa-brands fa-chrome"></i>
                    <i class="fa-brands fa-edge"></i>
                    <i class="fa-brands fa-firefox"></i>
                    <i class="fa-brands fa-opera"></i>
                </div>
            `;
    
        document.getElementById('year').textContent = new Date().getFullYear();

        appendElements(
            document.querySelector('footer'),
            document.querySelector('.progress')
        );
    };

    const rearrangeContent = () => {
        insertElements(
            document.querySelector('.content'),
            createElement('aside', 'toc-wrapper')
        );
        appendElements(
            document.querySelector('.toc-wrapper'),
            createElement('ul', 'toc')
        );
    };

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            rearrangeNavbar();
            rearrangeSidebar();
            rearrangeContent();
            rearrangeFooter();
        });
    }
})();
