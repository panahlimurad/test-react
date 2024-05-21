import React from 'react'
import style from './style.module.css'

function Header() {
  return (
    <div className={style.container}>
        <ul>
            <li>about</li>
            <li>contact</li>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Header