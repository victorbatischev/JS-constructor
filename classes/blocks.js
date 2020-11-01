import { col, row } from '../src/utils.js'

export class Block {
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
    const { options, value } = this
    return row(col(`<${options.tag}>${value}</${options.tag}>`), options.styles)
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
      col(`<img src="./img/${this.value}" alt="${alt}" height="250">`),
      styles
    )
  }
}
