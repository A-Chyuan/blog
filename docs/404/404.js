(function () {
    document.documentElement.innerHTML = `
        <a href="./">Go to Home Page</a>
        <object id="svg-object-404" type="image/svg+xml" data="./404/404-svg-animation.svg" alt="Kitty Yarn Play 404 page animation - Made by SVGator" img="" height="50%"></object>
    `;

    const theme = document.documentElement.getAttribute('data-theme');
    let bg, color;

    if (theme === 'light') {
        bg = 'rgb(248, 249, 250)';
        color = 'rgb(33, 37, 41)';
    } else {
        bg = 'rgb(37, 37, 33)';
        color = 'rgb(248, 250, 251)';
    }

    const style = document.createElement('style');

    style.innerHTML = `
        body {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            block-size: 100vh;
            background-color: ${bg};
        }

        a {
            color: ${color};
            text-decoration: none;
            font-size: 28px;
            font-weight: 600;
        }

        a:hover {
            text-decoration: underline;
        }
    `;

    document.head.appendChild(style);
})();
