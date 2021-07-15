import { useState } from 'react'

function Card({ card, removeCard, editCard }) {
  const [editMode, setEditMode] = useState(true)
  const [titleInput, setTitleInput] = useState(card.title)
  const [descriptionInput, setDescriptionInput] = useState(card.description)
  const [buttonEdit, setButtonEdit] = useState('Редактировать')
  
  //methods
  const handleTitle = (e) => {
    setTitleInput(e.target.value)
  }
  const handleDescription = (e) => {
    setDescriptionInput(e.target.value)
  }
 const returnCardValue = () => {
  setTitleInput(card.title)
  setDescriptionInput(card.description)
 }

  const visibleEditMode = () => {
    if(editMode) {
      setEditMode(false)
      setButtonEdit('Сохранить')
    } else {
    setEditMode(true)
    setButtonEdit('Редактировать')
    }
  }
  return (
    <>
      <div className="row">
        <div className="col s12 m6 ">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <input
                type="text"
                onChange={handleTitle}
                value={titleInput}
                disabled={editMode}
              />
              <input
                type="text"
                onChange={handleDescription}
                value={descriptionInput}
                disabled={editMode}
              />
            </div>
            <div className="card-action">
              <button onClick={visibleEditMode}>{buttonEdit}</button>
              <button hidden={editMode} onClick={returnCardValue}>
                Отмена
              </button>
              <button onClick={() => removeCard(card.id)}> &times; </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
