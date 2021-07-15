import {useState} from 'react'

function Form({addCard}) {
    const [userInput, setUserInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const handleTitleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleDescriptionChange = (e) => {
        setDescriptionInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addCard(userInput, descriptionInput)
        setUserInput('')
        setDescriptionInput('')

    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            value={userInput}
            type="text"
            onChange={handleTitleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите название"
            />
            <input 
            value={descriptionInput}
            type="text"
            onChange={handleDescriptionChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите описание"
            />
            <button>Сохранить</button>
        </form>
        </>
 )
}
export default Form