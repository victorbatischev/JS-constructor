import './styles/main.css'
import { model } from './model.js'

console.log(model)

let generateHTML = (model) => {
  let htmlBlock
  return model
    .map((block) => {
      switch (block.type) {
        case 'title':
          htmlBlock = convertModelToTitle(block.value)
          break
        case 'text':
          htmlBlock = convertModelToText(block.value)
          break
        case 'textColumns':
          htmlBlock = convertModelToColumns(block.value)
          break
        default:
          htmlBlock = `<br>`
          break
      }
      return htmlBlock
    })
    .join('')
}

let convertModelToTitle = (value) => {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${value}</h1>
      </div>
    </div>`
}

let convertModelToText = (value) => {
  return `
    <div class="row">
      <div class="col-sm">
        <p>
          ${value}
        </p>
      </div>
    </div>`
}

let convertModelToColumns = (value) => {
  let columns = value
    .map((item) => {
      return `
      <div class="col-sm">
        <p>
          ${item}
        </p>
      </div>`
    })
    .join('')
  return `
    <div class="row">
      ${columns}
    </div>`
}

document
  .querySelector('#site')
  .insertAdjacentHTML('beforeend', generateHTML(model))
