import React from 'react'
import { useState } from 'react'
const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)

            setNewTheme('')
        }} >
   
   <input type="text" 
   value={newTheme}
   
   onChange={(e)=>{
    setNewTheme(e.target.value)
   }}
   
   placeholder='enter theme'/>

   <button>Submit</button>


        </form>
    </div>
  )
}

export default Navbar