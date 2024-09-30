(function () {
    document.documentElement.innerHTML = `
        <div>
            <a href="./">Home</a>
            <a href="javascript:void(0)" class="go-back">Go Back</a>
        </div>
        <object id="svg-object-404" type="image/svg+xml" data="./404/404-svg-animation.svg" alt="Kitty Yarn Play 404 page animation - Made by SVGator" img="" height="50%"></object>
    `;

    const goBackAndReload = () => {
        history.back();
        window.addEventListener('popstate', () => {
            location.reload();
        });
    };

    document
        .querySelector('.go-back')
        .addEventListener('click', goBackAndReload);

    const theme = document.documentElement.getAttribute('data-theme');
    let bg, color;

    if (theme === 'light') {
        bg = 'var(--gray-0)';
        color = 'var(--gray-9)';
    } else {
        bg = 'var(--stone-11)';
        color = 'var(--stone-0)';
    }

    const style = document.createElement('style');

    style.innerHTML = `
        @import "https://unpkg.com/open-props";

        body {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            block-size: 100vh;
            background-color: ${bg};
        }

        div {
            inline-size: -webkit-fill-available;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 30px;
        }

        a {
            color: ${color};
            text-decoration: none;
            font-size: 28px;
            font-weight: var(--font-weight-6);
            text-decoration: underline;
            transition: transform 0.1s var(--ease-1);
        }

        a:hover {
            transform: scale(1.05);
        }
    `;

    document.head.appendChild(style);
})();
