import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

const FeedbackList = ({feedback, handleDelete}) => {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
     <AnimatePresence>
      {feedback.map((item)=>{
        return(
          <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
          </motion.div>
        ); 
      })}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList