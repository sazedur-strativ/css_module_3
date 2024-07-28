import React from 'react'
import ReactDOM from 'react-dom/client'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs.jsx'
import Crumbs from './BreadCrumbs/Crumbs.jsx'
import { ContactCard } from './ContactCard.jsx'
import DynamicDesign from './DynamicDesign.jsx'
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
<ContactCard avatarSrc="/public/lion.jpg"
    name="Mittens"
    email="meow@gmail.com"/>
    
    <DynamicDesign>
    <button style={{ color: 'green' }}>Hello</button></DynamicDesign>
    <BreadCrumbs>
          <Crumbs href="/">Home</Crumbs>
          <Crumbs href="/living">Living Room</Crumbs>
          <Crumbs href="/living/couch">Couches</Crumbs>
          <Crumbs href="/living/couch/sectional">
            Sectionals
          </Crumbs>
        </BreadCrumbs>
    
  </React.StrictMode>,
)
