export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = '' // при рендере сайта, очистим его содержимое
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}
