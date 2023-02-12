import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import data from './data'
import './App.css'



function App() {
  
  const dataMap = data.map((item) => {
    return (
      <Content 
          key={item.id}
          {...item}
          // imageUrl={item.imageUrl}
          // title={item.title}
          // location={item.location}
          // googleMapsUrl={item.googleMapsUrl}
          // startDate={item.startDate}
          // description={item.description}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <h1>Vite + React Travel Journal</h1>
      {dataMap}
      
    </div>
  )
}

export default App
