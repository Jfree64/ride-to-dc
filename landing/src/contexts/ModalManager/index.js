import React, { useState, useContext, useRef } from 'react'
import classnames from "classnames/bind"

// IMPORT LAST to benefit from cascading style overrides
import stylesheet from "./index.module.scss"
const cx = classnames.bind(stylesheet)



export const ModalContext = React.createContext({
  openModal: () => {},
  closeModal: () => {}
});

export const ModalManager = ({ children }) => {

  const [ modal, setModal ] = useState(undefined)
  const openModal = (modal) => { setModal(modal) }
  const closeModal = () => setModal(undefined)
  const modalWindowReference = useRef(null)

  const selectiveClickClose = (e) => {
    if (e.target === modalWindowReference.current) {
      closeModal()
    }
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modal && 
        <div className={cx("modal-container")} onClick={selectiveClickClose} ref={modalWindowReference}>
          {modal}
        </div>
      }
      {children}
    </ModalContext.Provider>
  )
}

export const useModalManager = () => {
  return useContext(ModalContext)
}