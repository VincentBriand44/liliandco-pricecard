import { useState } from 'react'

import image from './assets/img/logo.png'

const App = () => {
  const [cards, setCards] = useState([
    { title: 'title', size: '3/6 mois', fontCalc: 21 }
  ])

  const pages = Array(Math.trunc(cards.length / 20) + 1).fill('')

  const handleChangeTitle = e => {
    const { name, value } = e.currentTarget
    const newCard = [...cards]
    newCard[name].title = value
    newCard[name].fontCalc = 26 - value.length
    setCards(newCard)
  }

  const handleChangeSize = e => {
    const { name, value } = e.currentTarget
    const newCard = [...cards]
    newCard[name].size = value
    setCards(newCard)
  }

  const handleRemove = i => {
    const newCard = [...cards]
    newCard.splice(i, 1)
    setCards(newCard)
  }

  return (
    <section className={cards.length % 20 === 0 ? 'remove-page' : ''}>
      {pages.map((_, numPage) => (
        <div className='page' key={numPage}>
          {cards.map(({ title, size, fontCalc }, i) => {
            if (i >= numPage * 20 && i < (numPage + 1) * 20 && i < cards.length)
              return (
                <div key={i} className='card'>
                  <div className='remove' onClick={() => handleRemove(i)}>
                    X
                  </div>
                  <input
                    style={{ fontSize: fontCalc > 7 ? fontCalc : 7 }}
                    type='text'
                    name={i}
                    value={title}
                    onChange={handleChangeTitle}
                  />
                  <input
                    className='h2'
                    type='text'
                    name={i}
                    value={size}
                    onChange={handleChangeSize}
                  />
                  <img src={image} />
                </div>
              )
          })}
          {numPage === pages.length - 1 && (
            <div
              className='add'
              onClick={() =>
                setCards([
                  ...cards,
                  { title: 'title', size: '3/6 mois', fontCalc: 21 }
                ])
              }
            >
              +
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default App
