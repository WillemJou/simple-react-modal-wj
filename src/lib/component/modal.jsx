import React from "react"
import { useRef } from "react"
import "./modal.css"

function Modal({ isOpen, onClose, title, subTitle, content }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])
  if (isOpen) {
    return (
      <dialog className='modal'>
        <section className='section'>
          <header className='header'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subTitle}</span>
            <button ref={ref} className='btn' onClick={onClose}>
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
