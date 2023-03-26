import { useEffect, useState } from 'react'
import config from './config.json'

import image from './assets/img/logo.png'

const App = () => {
  const [pages, setPages] = useState([])

  useEffect(() => {
    const pages = []

    for (let i = 0; i < config.length; i++) {
      if (i === 0 || i % 20 === 0) pages.push([])
      pages[Math.trunc(i / 20)].push(config[i])
    }
    setPages(pages)
  }, [])

  return pages.map((page, index) => (
    <div className='page' key={index}>
      {page.map((item, i) => {
        const size = 26 - item.name.length
        const calc = size > 7 ? size : 7
        return (
          <div key={i} className='card'>
            <div>
              <h1 style={{ fontSize: calc }}>{item.name}</h1>
            </div>
            <h2>{item.size}</h2>
            <img src={image} />
          </div>
        )
      })}
    </div>
  ))
}

export default App
