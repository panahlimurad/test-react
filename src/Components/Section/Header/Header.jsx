import React, { useState } from 'react'
import style from './style.module.css'

function Header() {

  const [changeFont, setChangeFont] = useState(false)

  const changeFontHandler=()=>{
    setChangeFont(!changeFont)
  }

  console.log(changeFont);
  

  return (
    <div className={changeFont ? style.container : style.containerDark}>
      <p onClick={changeFontHandler}>{changeFont ? "Dark Mode" : "Light Mode"}</p>
        <ul className={changeFont ? style.changeFont : style.ulDark}>
            <li>about</li>
            <li>contact</li>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Header