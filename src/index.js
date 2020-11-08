import './styles/main.css'
import { model } from './model.js'
import { Site } from './classes/site.js'
import { SideBar } from './classes/sidebar.js'

const updateCallback = (newBlock) => {
  model.push(newBlock)
  site.render(model)
}

const clearCallback = () => {
  model = []
  site.render(model)
}

const removeCallback = (value) => {
  model = model.filter((item) => !item.toHTML().includes(value))
  site.render(model)
}

const site = new Site('#site', removeCallback)

site.render(model)
new SideBar('#panel', updateCallback, clearCallback)
