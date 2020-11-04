import {
  TitleBlock,
  TextBlock,
  TextColumnsBlock,
  ImageBlock,
  CustomBlock
} from './blocks'

import {
  TitleForm,
  TextForm,
  TextColumnsForm,
  ImageForm,
  CustomForm
} from './forms.js'

export class SideBar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector)
    this.update = update

    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
  }

  get template() {
    return [
      new TitleForm().toHTML(),
      new TextForm().toHTML(),
      new TextColumnsForm().toHTML(),
      new ImageForm().toHTML(),
      new CustomForm().toHTML()
    ].join('')
  }

  addBlock(event) {
    event.preventDefault()

    const name = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles ? event.target.styles.value : ''
    const tag = event.target.tag ? event.target.tag.value : ''
    const alt = event.target.alt ? event.target.alt.value : ''

    let newBlock

    switch (name) {
      case 'title':
        newBlock = new TitleBlock(value, { styles, tag })
        event.target.tag.value = ''
        break
      case 'text':
        newBlock = new TextBlock(value, { styles })
        break
      case 'textColumns':
        newBlock = new TextColumnsBlock(value.split(','), { styles })
        break
      case 'image':
        newBlock = new ImageBlock(value, { styles, alt })
        event.target.alt.value = ''
        break
      case 'custom':
        newBlock = new CustomBlock(value, { styles })
    }

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}
