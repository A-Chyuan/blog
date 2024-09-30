(function () {
    window.addEventListener('keydown', (event) => {
        let cancel = false;

        const searchingInputs = document.querySelectorAll('input[type="search"]');
        
        searchingInputs.forEach((searchingInput) => {
            if (document.activeElement === searchingInput) {
                cancel = true;
            }
        });

        if (cancel) {
            return;
        }

        if (event.key === 'Escape') {
            document.body.classList.toggle('close');
        }

        if (event.key === '\\') {
            themeToggleOnClick();
        }

        if (event.key === '`') {
            document.querySelector('.app-nav-menu-icon').classList.toggle('open');
        }
        
        if(!event.shiftKey && event.key === 'ArrowLeft') {
            document.querySelector('.pagination-item--previous a').click();
        }
        
        if(!event.shiftKey && event.key === 'ArrowRight') {
            document.querySelector('.pagination-item--next a').click();
        }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === '/') {
            document.querySelector('.search .input-wrap input').focus();
        }
    });
})();
