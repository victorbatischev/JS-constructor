export const row = (content, styles = '') => {
  return `<div class="row" style="margin: 0; ${styles}">${content}</div>`
}

export const col = (content) => {
  return `<div class="col-sm">${content}</div>`
}

export const css = (styles = {}) => {
  return Object.keys(styles)
    .map((key) => `${key}: ${styles[key]}`)
    .join(';')
}
