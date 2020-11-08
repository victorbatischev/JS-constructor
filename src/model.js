import {
  TitleBlock,
  TextBlock,
  TextColumnsBlock,
  ImageBlock,
  CustomBlock
} from './classes/blocks.js'
import { css } from './utils'

export let model = [
  new CustomBlock(
    `<div id="leaves">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </div>`,
    { styles: css({ margin: 0 }) }
  ),
  new TitleBlock('Алексей Плещеев', {
    styles: css({
      color: '#fff',
      'text-align': 'center',
      'font-family': 'Georgia, serif',
      'font-size': '25px',
      'letter-spacing': '2px',
      'word-spacing': '2px',
      'font-variant': 'small-caps',
      'padding-top': '50px'
    }),
    tag: 'h2'
  }),
  new TextBlock('Осень наступила, высохли цветы', {
    styles: css({
      'text-align': 'center',
      'font-family': 'Arial, Helvetica, sans-serif',
      'font-size': '20px',
      'font-weight': '700',
      'padding-top': '20px'
    })
  }),
  new ImageBlock(
    'https://upload.wikimedia.org/wikipedia/commons/f/fb/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F_%D0%BE%D1%81%D0%B5%D0%BD%D1%8C_%28%D0%A8%D0%B8%D1%88%D0%BA%D0%B8%D0%BD%29.jpg',
    {
      styles: css({ 'text-align': 'center', 'padding-top': '20px' }),
      alt: 'Иван Иванович Шишкин – Ранняя осень 1889'
    }
  ),
  new TextColumnsBlock(
    [
      `      Осень наступила,
      Высохли цветы,
      И глядят уныло
      Голые кусты.`,
      `      Вянет и желтеет
      Травка на лугах,
      Только зеленеет
      Озимь на полях.`,
      `      Туча небо кроет,
      Солнце не блестит,
      Ветер в поле воет,
      Дождик моросит..`,
      `      Зашумели воды
      Быстрого ручья,
      Птички улетели
      В теплые края.`
    ],
    {
      styles: css({
        'white-space': 'pre-wrap',
        'text-align': 'justify',
        'padding-top': '50px',
        'font-family': 'Verdana',
        'font-size': '16px',
        'font-weight': '700',
        'padding-bottom': '200px',
        'padding-left': '150px',
        'padding-right': '100px'
      })
    }
  )
]
