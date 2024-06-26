'use client'
import React, { MouseEvent } from 'react'

const Grid = () => {
  const changeSize = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.clientX)
    console.log(event.clientY)
    return
  }

  const dots = []
  for (let i = 0; i < 8; i++) {
    dots.push(<div className="dot" key = {i} test-key={i} onMouseMove={(e) => changeSize(e)}></div>)
  }

  return (
    <>
      <section className="grid">
        {dots.map((element) => element)}
      </section>
    </>
  )
}

export default Grid