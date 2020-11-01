import './styles/main.css'
import { model } from './model.js'

document.querySelector('#site').insertAdjacentHTML('afterbegin', model.join(''))
