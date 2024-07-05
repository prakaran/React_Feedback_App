import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const handleTextChange = (event)=>{
        const inputValue = event.target.value;
        if (inputValue === '') {
            setBtnDisabled(true)
            setMessage(null)
          } else if (inputValue !== '' && inputValue.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
          } else {
            setMessage(null)
            setBtnDisabled(false)
          }
        setText(inputValue);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(text)
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
  )
}

export default FeedbackForm