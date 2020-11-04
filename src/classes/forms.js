class Form {
  constructor() {}

  toHTML(name, type, tag = '', alt = '') {
    return `
      <form name="${name}">
        <h5>${type}</h5>
        <div class="form-group">
          ${
            name !== 'textColumns'
              ? `<input required class="form-control form-control-sm" name="value" 
                  placeholder="Введите значение...">`
              : `<textarea required class="form-control form-control-sm" name="value" 
                  rows="10" placeholder="Введите значение..."></textarea>`
          }
        </div>
        <div class="form-group">
          <input class="form-control form-control-sm" name="styles" placeholder="Укажите стили...">
        </div>
        ${alt}
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        ${tag}
      </form>
      <hr />
    `
  }
}

export class TitleForm extends Form {
  constructor() {
    super()
    this.tag = `
      <select required id="select-header" name="tag">
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h6</option>
      </select>`
  }

  toHTML() {
    return super.toHTML('title', 'Заголовок', this.tag)
  }
}

export class TextForm extends Form {
  constructor() {
    super()
  }

  toHTML() {
    return super.toHTML('text', 'Абзац')
  }
}

export class TextColumnsForm extends Form {
  constructor() {
    super()
  }

  toHTML() {
    return super.toHTML('textColumns', 'Колонки')
  }
}

export class ImageForm extends Form {
  constructor() {
    super()
    this.alt = `
      <div class="form-group">
        <input class="form-control form-control-sm" name="alt" placeholder="Введите описание...">
      </div>`
  }

  toHTML() {
    return super.toHTML('image', 'Изображение', '', this.alt)
  }
}

export class CustomForm extends Form {
  constructor() {
    super()
  }

  toHTML() {
    return super.toHTML('custom', 'Разметка')
  }
}
