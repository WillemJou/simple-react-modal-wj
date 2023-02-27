import React from "react"
import "./modal.css"

function Modal({ isOpen, onClose, title, subTitle, content }) {
  if (isOpen) {
    return (
      <dialog className='modal'>
        <section className='section'>
          <header className='header'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subTitle}</span>
            <button className='btn' onClick={onClose}>
              x
            </button>
          </header>
          <div className='content-container'>{content}</div>
          <footer className='footer'></footer>
        </section>
      </dialog>
    )
  }
}

export default Modal
