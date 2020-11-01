import { col, row } from './utils.js'

export const title = (block) => {
  const { options, value } = block
  return row(col(`<${options.tag}>${value}</${options.tag}>`), options.styles)
}

export const text = (block) => {
  const { options, value } = block
  return row(col(`<p style="margin-bottom: 0;">${value}</p>`), options.styles)
}

export const textColumns = (block) => {
  const { options, value } = block
  return row(value.map((item) => col(item)).join(''), options.styles)
}

export const image = (block) => {
  const { description, styles } = block.options
  return row(
    col(`<img src="./img/${block.value}" alt="${description}" height="250" />`),
    styles
  )
}
