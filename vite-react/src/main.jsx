import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyFunction() {
  return(
    <h1>my custom APP</h1>
  )
}
const anotherElement = (
  <a href="www.google.com" target='_blank'>Google</a>
)
 const anotherUser= " chai chyee??"  
const reactElement = React.createElement(   //ALl the calculation etc done by babel behind the secenes
  'a',
  { href: 'https://gooogle.com', target: '_blank' },
  'Google',
  anotherUser
)
 //variable Injuction
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* // MyFunction();  
   // <MyFunction /> */}
   {/* {anotherElement} */}
    {/* <App /> */}
    {reactElement}
  </StrictMode>
)
