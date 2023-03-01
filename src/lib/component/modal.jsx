import React, { forwardRef } from "react"
import { useRef } from "react"
import "./modal.css"

function Modal({ isOpen, onClose, title, subTitle, content }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])
  const Button = forwardRef((props, ref) => (
<button ref={ref}>{props.children}</button>
  ))
  if (isOpen) {
    return (
      <dialog className='modal'>
        <section className='section'>
          <header className='header'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subTitle}</span>
            <Button ref={ref} className='btn' onClick={onClose}>
              x
            </Button>
          </header>
          <div className='content-container'>{content}</div>
          <footer className='footer'></footer>
        </section>
      </dialog>
    )
  }
}

export default Modal
