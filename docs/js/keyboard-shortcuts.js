(function () {
    const setKeyboardShortcuts = (event) => {
        const searchingInput = document.querySelector('.search .input-wrap input');

        if (document.activeElement !== searchingInput) {

            if (event.key === 'Escape') {
                document.body.classList.toggle('close');
            }

            if (event.key === '/') {
                searchingInput.focus();
            }

            if (event.key === ']') {
                themeToggleOnClick();
            }

            if (event.key === '`') {
                document.querySelector('.app-nav-menu-icon').classList.toggle('open');
            }

            if (event.key === '\\') {
                dirToggleOnClick();
            }

        }

        if (document.activeElement === searchingInput && event.key === 'Escape') {
            document.activeElement.blur();
        }
    }

    window.addEventListener('keyup', (event) => {
        setKeyboardShortcuts(event);
    });
})();
