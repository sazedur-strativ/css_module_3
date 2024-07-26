import React from 'react'
import ReactDOM from 'react-dom/client'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion.jsx'
import './index.css'
import { LogInForm } from './LogInForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrequentlyAskedQuestion
    question="What does “CSS” stand for?"
    answer="Cool Styling Strategy"
  />
  <LogInForm
  handleSubmit={(ev)=>{
    ev.preventDefault();
    alert('Submitted')
  }}
  />
  </React.StrictMode>,
)
