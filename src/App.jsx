import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData.js'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'



const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id)=>{
    if(window.confirm('Do you really want to delete?')){
      const filteredList = feedback.filter((item)=> item.id !== id);
      setFeedback(filteredList);
    }
  }
  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4()
    setFeedback((prevState)=>{
      return [
        newFeedback, 
        ...feedback
      ]
    })
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm addFeedback={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
      </div>
    </>

  )
}

export default App