(function () {
    const getCollapsibleListItems = () => {
        return document.querySelectorAll('.sidebar-nav li:has(> ul)');
    };

    const getMaxBlockSize = (element) => {
        return window.getComputedStyle(element).getPropertyValue('max-block-size');
    };

    const getList = (element) => {
        return element.querySelector('ul');
    };

    const getListItems = (list) => {
        return list.querySelectorAll('li');
    };

    const addCollapseEvent = () => {
        getCollapsibleListItems()
            .forEach((collapsibleListItem) => {
                const preventSubMenuCollapseWhenClickItem = () => {
                    // 點擊新文章時，不需要觸發摺疊效果
                    getListItems(getList(collapsibleListItem))
                        .forEach((listItem) => {
                            listItem.addEventListener('click', (event) => {
                                event.stopPropagation();
                            });
                        });
                };

                const onClick = (event) => {
                    event.stopPropagation();
                    const subMenu = getList(event.currentTarget);

                    if (getMaxBlockSize(subMenu) != '0px') {
                        subMenu.style.maxBlockSize = '0px';
                        event.currentTarget.classList.add('close');
                    } else {
                        subMenu.style.maxBlockSize = subMenu.scrollHeight + 'px';
                        event.currentTarget.classList.remove('close');
                    }
                };

                preventSubMenuCollapseWhenClickItem();
                collapsibleListItem.classList.add('collapsible');
                collapsibleListItem.addEventListener('click', onClick);
            });
    }

    const getSidebarNav = () => {
        return document.querySelector('.sidebar-nav');
    };

    const getCurrentList = () => {
        return document.querySelector('.sidebar-nav li.current');
    };

    const foldSubList = (listItem) => {
        listItem.classList.add('close');
        getList(listItem).style.maxBlockSize = '0px';
    };

    const expandSubList = (listItem) => {
        getList(listItem).style.maxBlockSize = getList(listItem).scrollHeight + 'px';
    };

    const initial = (vm) => {
        currentPageFileName = decodeURI(vm.route.path.split('/').pop());

        const setCurrent = () => {
            const anchors = document.querySelectorAll('.sidebar-nav li > a');

            anchors.forEach((anchor) => {
                const fileName = anchor.getAttribute('href').split('/').pop();

                if (fileName == currentPageFileName) {
                    const currentLI = anchor.parentElement;
                    currentLI.classList.add('current');
                }
            });
        };

        const closeOthers = () => {
            getCollapsibleListItems()
                .forEach((collapsibleListItem) => {
                    let findCurrent = false;

                    getListItems(getList(collapsibleListItem))
                        .forEach((listItem) => {
                            const anchor = listItem.querySelector('a');

                            if (anchor.parentElement.classList.contains('current')) {
                                findCurrent = true;
                            }
                        });

                    if (!findCurrent) {
                        foldSubList(collapsibleListItem);
                    } else {
                        expandSubList(collapsibleListItem);
                    }
                });
        };

        const scrollToCurrent = () => {
            const sidebarNav = getSidebarNav();
            const currentLI = getCurrentList();

            if (!currentLI) {
                return;
            }
            const currentParentList = currentLI.parentNode.parentNode;

            if (!document.querySelector('.profile-wrapper')) {
                return;
            }
            const profileStyle = getComputedStyle(document.querySelector('.profile-wrapper'));
            const profileHeight = parseFloat(profileStyle.blockSize) + 2 * parseFloat(profileStyle.marginBlock);
            const sidebarStyle = getComputedStyle(document.querySelector('.sidebar'));
            const gap = parseFloat(sidebarStyle.gap);

            if (currentParentList.isSameNode(sidebarNav)) {
                sidebarNav.scrollTop = currentLI.offsetTop - profileHeight - gap;
                return;
            }
            
            if (currentLI.offsetTop >= sidebarNav.offsetHeight - 64) { // 漸層效果高度: 64px
                sidebarNav.scrollTop = currentParentList.offsetTop - profileHeight + parseFloat(getComputedStyle(currentParentList).paddingBlock) - gap + currentLI.offsetTop;
                return;
            }

            sidebarNav.scrollTop = currentParentList.offsetTop - profileHeight + parseFloat(getComputedStyle(currentParentList).paddingBlock) - gap;
        };

        setCurrent();
        closeOthers();
        scrollToCurrent();
    }

    window.$docsify.plugins = [].concat(window.$docsify.plugins, plugin);

    function plugin(hook, vm) {
        hook.ready(() => {
            initial(vm);
        });

        hook.doneEach(() => {
            addCollapseEvent();
            initial(vm);
        });
    }
})();
