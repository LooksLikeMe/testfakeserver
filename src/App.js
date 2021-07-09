import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

function App() {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <div className="container">
      <Navbar />
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
          <Card  />
          </div>
          <div class="col-md-auto">
          <Card  />
          </div>
          <div class="col-md-auto">
          <Card  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
