export const model = [
  {
    type: 'title',
    value: 'Алексей Плещеев',
    options: {
      styles: `color: #fff; text-align: center; font-family: Georgia, serif;
        font-size: 25px; letter-spacing: 2px; word-spacing: 2px;
        font-variant: small-caps; padding-top: 50px`,
      tag: 'h2'
    }
  },
  {
    type: 'text',
    value: 'Осень наступила, высохли цветы',
    options: {
      styles: `text-align: center; font-family: Arial, Helvetica, sans-serif;
        font-size: 20px; font-weight: 700; padding-top: 20px`
    }
  },
  {
    type: 'image',
    value: 'golden_autumn.jpg',
    options: {
      styles: `text-align: center; padding-top: 20px`,
      description: 'Иван Иванович Шишкин – Ранняя осень 1889'
    }
  },
  {
    type: 'textColumns',
    value: [
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
    options: {
      styles: `white-space: pre-wrap; text-align: justify; padding-top: 50px;
        font-family: Verdana; font-size: 16px; font-weight: 700; 
        padding-bottom: 200px; padding-left: 150px; padding-right: 100px`
    }
  }
]
