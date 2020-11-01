import './styles/main.css'
import { model } from './model.js'
import * as Templates from './templates.js'

let generateHTML = (model) => {
  return model.map((block) => {
    if (Templates[block.type]) return Templates[block.type](block)
  })
}

document
  .querySelector('#site')
  .insertAdjacentHTML('afterbegin', generateHTML(model).join(''))
