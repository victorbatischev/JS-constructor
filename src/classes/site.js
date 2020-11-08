export class Site {
  constructor(selector, remove) {
    this.$el = document.querySelector(selector)
    this.$el.addEventListener('dblclick', this.removeBlock.bind(this))
    this.remove = remove
  }

  removeBlock(event) {
    event.preventDefault()
    this.remove(event.target.innerHTML || event.target.alt)
  }

  render(model) {
    this.$el.innerHTML = '' // при рендере сайта, очистим его содержимое
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}
