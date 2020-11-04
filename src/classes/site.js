export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
    this.$el.addEventListener('click', this.removeBlock.bind(this))
  }

  removeBlock(event) {
    event.preventDefault()

    console.log(event.target)
  }

  render(model) {
    this.$el.innerHTML = '' // при рендере сайта, очистим его содержимое
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}
