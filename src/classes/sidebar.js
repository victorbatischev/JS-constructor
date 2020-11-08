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
  constructor(selector, update, clear) {
    this.$el = document.querySelector(selector)
    this.update = update
    this.clear = clear
    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template
    this.addButton('Очистить', this.clear, 'btn btn-primary btn-sm')
    this.addButton('Скачать', this.download, 'btn btn-primary btn-sm')
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

  addButton(title, onClick, className) {
    var button = document.createElement('button')
    button.innerHTML = title
    button.onclick = onClick
    button.className = className
    this.$el.appendChild(button)
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
        newBlock = new TextColumnsBlock(value.split('\n\n'), { styles })
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

  download() {
    let site = document.querySelector('#site').innerHTML
    let template = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossorigin="anonymous"
          />
          <title>JavaScript Constructor</title>
        </head>
        <body>
          <div id="app" class="container-fluid">
            <div id="site" class="content">${site}</div>
          </div>
        </body>
      </html>
    `
    var element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(template)
    )
    element.setAttribute('download', 'index.html')

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }
}
