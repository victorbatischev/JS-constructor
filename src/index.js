import './styles/main.css'
import { model } from './model.js'
import { Site } from './classes/site.js'
import { SideBar } from './classes/sidebar.js'

const updateCallback = (newBlock) => {
  model.push(newBlock)
  site.render(model)
}

new Site('#site').render(model)
new SideBar('#panel', updateCallback)
