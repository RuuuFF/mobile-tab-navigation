const DOM = {
  contents: document.querySelectorAll('.content'),
}

const Nav = {
  listItems: document.querySelectorAll('nav ul li'),

  hideAllContents() {
    DOM.contents.forEach(content => content.classList.remove('show'))
  },

  hideAllItems() {
    Nav.listItems.forEach(item => item.classList.remove('active'))
  },

  addListener(item, index) {
    item.addEventListener('click', () => {
      Nav.hideAllContents()
      Nav.hideAllItems()
  
      item.classList.add('active')
      DOM.contents[index].classList.add('show')
    })
  },

  start() {
    Nav.listItems.forEach((item, index) => Nav.addListener(item, index))
  }
}

Nav.start()