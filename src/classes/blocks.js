import { col, row } from '../utils.js'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error(
      'Для данного блока не найден подходящий метод для генерации HTML кода!'
    )
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag, styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), styles)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { options, value } = this
    return row(col(`<p style="margin-bottom: 0;">${value}</p>`), options.styles)
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { options, value } = this
    return row(value.map((item) => col(item)).join(''), options.styles)
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { alt, styles } = this.options
    return row(
      col(`<img src="./src/assets/${this.value}" alt="${alt}" height="250">`),
      styles
    )
  }
}

export class CustomBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(this.value)
  }
}
