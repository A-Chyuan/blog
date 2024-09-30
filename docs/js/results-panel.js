(function () {
    window.addEventListener('hashchange', function () {
        const searchInput = document.querySelector('.input-wrap input[type="search"]');

        if (searchInput) {
            searchInput.value = '';
            document.querySelector('.results-panel').classList.remove('show');
        }
    });
})();
