(function () {
    const generateListItem = (header) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = header.innerHTML;

        const setTitle = () => {
            const anchor = header.querySelector('a');
            const text = header.querySelector('span').innerText;
            anchor.setAttribute("title", text);
        };

        setTitle();

        return listItem;
    };

    const getLevel = (header) => parseInt(header.tagName[1]);

    const isEmpty = (stack) => stack.length === 0;

    const getTop = (stack) => stack[stack.length - 1];

    const createSubList = (listItem) => {
        const subList = document.createElement('ul');
        listItem.appendChild(subList);
        return subList;
    };

    // 利用 stack 儲存各層級 ul 位置
    // pop 直到找到比當前標題還要大的標題，再將當前標題加入大標題底下
    const generateTOC = () => {
        const stack = [];
        const toc = document.createElement('ul');
        let currentList = toc;

        document
            .querySelector('.markdown-section')
            .querySelectorAll('h1, h2, h3, h4, h5, h6')
            .forEach((header) => {
                const listItem = generateListItem(header);

                // jump back
                while (!isEmpty(stack) && getLevel(header) <= getTop(stack).level) {
                    stack.pop();
                }

                currentList = !isEmpty(stack) ? getTop(stack).subList : toc;
                currentList.appendChild(listItem);

                // 紀錄標題的層級與其子清單
                stack.push({
                    level: getLevel(header),
                    subList: createSubList(listItem)
                });
            });

        const updateTOC = () => {
            if (document.querySelector('.toc-wrapper ul')) {
                document.querySelector('.toc-wrapper ul').innerHTML = toc.innerHTML;
            }
        };

        updateTOC();

        const setClickEvent = () => {
            // 原先功能：docsify 在 url 後加入 id 參數來移動視窗至該元素位置
            // 改成使用 scrollIntoView 移動，使得能對同一標題連續作用
            document.querySelectorAll('.toc-wrapper a').forEach(link => {
                link.addEventListener('click', (event) => {
                    const targetId = link.getAttribute('data-id');
                    document.getElementById(targetId).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                });
            });

            document.querySelector('.markdown-section').querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(header => {
                
                header.addEventListener('click', (event) => {
                    const targetId = header.getAttribute('id');
                    document.getElementById(targetId).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth'
                    });
                });
            });
        };

        setClickEvent();
    }

    const wrapTOC = () => {
        const lists = document.querySelectorAll('.toc ul');
        lists.forEach((list) => {
            wrapElement(createElement('div', 'ul-wrapper'), list);
        });
    };


    const setDisplayed = () => {
        const displayedObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                const isVisible = entry.intersectionRatio > 0;

                if (isVisible) {
                    element.classList.add('displayed');
                } else {
                    element.classList.remove('displayed');
                }
            });
        });

        document
            .querySelectorAll('.markdown-section > *')
            .forEach((element) => {
                displayedObserver.observe(element);
            });
    };

    const isHeader = (element) => element instanceof HTMLHeadingElement;

    const findHeader = (element) => {
        if (!element) {
            return null;
        }

        let prev = element.previousElementSibling;
        while (prev && !isHeader(prev)) {
            prev = prev.previousElementSibling;
        }
        return prev;
    };

    const findTarget = (header) => {
        const id = header.querySelector('a').getAttribute('data-id');
        return document.querySelector(`.toc a[data-id="${id}"]`);
    };

    const setActive = () => {
        const firstDisplayed = document.querySelector('.markdown-section .displayed');
        let header;

        if (isHeader(firstDisplayed)) {
            header = firstDisplayed;
        } else {
            header = findHeader(firstDisplayed);
        }

        if (!header) {
            return;
        }

        if (document.querySelector('.toc .active')) {
            document.querySelector('.toc .active').classList.remove('active');
        }

        if (findTarget(header)) {
            findTarget(header).parentElement.classList.add('active');
        }
    };

    window.addEventListener('scroll', (event) => {
        setActive();
    });

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            // 重新整理同一頁面
            generateTOC();
            wrapTOC();
        });

        hook.doneEach(() => {
            // 點擊新頁面
            generateTOC();
            wrapTOC();
            setDisplayed();
        });
    }
})();
