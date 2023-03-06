import React from 'react'
import FocusTrap from 'focus-trap-react'
import './modal.css'

function Modal(props) {
  if (!props.isOpen) {
    return null
  }
  return (
    // use FocusTrap library to staying focus on the modal
    <FocusTrap>
      <dialog aria-modal="true" onClick={props.onClose} className="modal">
        <section className="section" onClick={(e) => e.stopPropagation()}>
          <header className="header">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">{props.subTitle}</span>
            <button className="btn" onClick={props.onClose}>
              x
            </button>
          </header>
          <div className="content-container">{props.content}</div>
          <footer className="footer"></footer>
        </section>
      </dialog>
    </FocusTrap>
  )
}

export default Modal