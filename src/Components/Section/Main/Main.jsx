import React, { useState } from 'react'
import style from './style.module.css'
import Button from '../../Button/Button'

function Main() {

  const [changeImage, setChangeImage] = useState(false)
  const [count, setCount] = useState(0)
const changeImageHandler=()=>{
  setChangeImage(!changeImage)
} 

const addCount=()=>{
  setCount(count+1)
}



  return (
    <div className={style.container}>
      <Button styleProps={changeImage} changeImageHandler={changeImageHandler} text="Send"/>
      <p className={changeImage ? style.fontChange: style.smallFont}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae provident laboriosam dolore? Aperiam laborum eum blanditiis nam doloremque, accusantium nostrum recusandae dolorum ad voluptatem, voluptates molestiae labore corporis consectetur.</p>
      <img src={changeImage ? "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/library/our-cause/on-the-shore-borrowdale-and-derwent-water-1518851.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"} alt="" />
      <div>
      <Button styleProps={changeImage} changeImageHandler={addCount} text="Add"/>
      <p className={`${count < 9 ? style.count : style.changeCountStyle}`}>{count}</p>
      </div>
    </div> 
  )
}

export default Main