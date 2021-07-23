import { useState } from 'react'

import { nanoid } from 'nanoid'

import Form from './Form'
import Card from './Card'

function App() {
  const [cards, setCards] = useState([
    { id: nanoid(), 
      title: 'D', 
      description: 'A'
    }
  ])

  function addCard(userInput, descriptionInput) {
    if (userInput) {
      const newCard = {
        id: nanoid(),
        title: userInput,
        description: descriptionInput,
      }
      setCards([...cards, newCard])
    }
  }
  //test func
  const edt = () => {
    
  }
  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id))
  }
  function editCard(titleInput, descriptionInput, id) {

  }
  return (
    <>
      <div className="container">
        <header>
          <h1> Добавить пост </h1>
          <button onClick={edt}>Test Btn</button>
        </header>
        <Form addCard={addCard} />
        {cards.map((card) => (
          <Card
            card={card}
            editCard={editCard}
            removeCard={removeCard}
            key={card.id}
          />
        ))}
      </div>
    </>
  )
}

export default App
