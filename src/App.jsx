import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData.js'
import FeedbackStats from './components/FeedbackStats.jsx'



const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id)=>{
    if(window.confirm('Do you really want to delete?')){
      const filteredList = feedback.filter((item)=> item.id !== id);
      setFeedback(filteredList);
    }
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
      </div>
    </>

  )
}

export default App