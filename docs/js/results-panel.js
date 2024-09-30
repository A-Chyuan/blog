(function () {
    window.addEventListener('hashchange', () => {
        const searchInput = document.querySelector('.input-wrap input[type="search"]');

        if (searchInput) {
            searchInput.value = '';
            document.querySelector('.results-panel').classList.remove('show');
        }
    });
})();
