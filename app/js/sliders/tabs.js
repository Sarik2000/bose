//обработке ссылке
//получить дате
//по дате получить контент элемент
//присвоить ему класс опен
//остальным убрать класс опен
// const tabsTitle = document.querySelectorAll('.control-list__link')
// const tabsContent = document.querySelectorAll('.content')

// tabsTitle.forEach(item =>  item.addEventListener('click',event => {
//     const tabsTitleTarget = event.target.getAttribute('data-tab');
//     tabsTitle.forEach(element  => element.classList.remove('ative-tab'));
//     tabsContent.forEach(element  => element.classList.add('hidden-tab-content'));
//     item.classList.add('active-tab');
//     document.getElementById(tabsTitleTarget).classList.remove('hidden-tab__content');
// }))
// document.querySelector('[data-tab="tab-4"]').classList.add('active-tab');
// document.querySelector('#tab-4').classList.remove('hidden-tab-content');
export const Tabs = () => {
    const buttons = document.querySelectorAll('[data-tab-opener]')
    if (buttons) {
        buttons.forEach((button) => {
            button.addEventListener('click', function (event) {
                const tabs = document.querySelectorAll('[data-tab]')
                tabs.forEach((tab) => {
                    if (tab.classList.contains('hidden-tab-content')) { return }
                    tab.classList.add('hidden-tab-content')
                })

                document.querySelector('li.control-list__item--active').classList.remove('control-list__item--active')

                this.closest('li').classList.add('control-list__item--active')
    
                document.querySelector(`[data-tab="${this.dataset.tabOpener}"]`).classList.remove('hidden-tab-content')
            })
        })
    }
}
