import React, { useState, useContext } from 'react'
import "./todo.css"

export function Todo(props) {
  const { id, title, completed } = props;

  const [hide, SetHide] = useState('d-block')
  const [check, setCheck] = useState(completed)

  const del = () => {
    SetHide('d-none')
  }

  const workDone = () => {
    setCheck(!check)
  }


  return (
    <>
      <div className={"col-12 d-flex flex-row " + hide}>
        <div className="col-1 fw-bold d-flex flex-row justify-content-center align-items-center">
          <h5>{id}</h5>
        </div>
        <div className="todo-head col-2 d-flex flex-row justify-content-center align-items-center p-2">
          <input type="checkbox" className="checkbox" checked={check} onChange={workDone} />
        </div>
        <div className="todo-body col-8 p-2 border-start border-dark border-5 rounded-start d-flex flex-row align-items-center bg-info bg-opacity-50">
          <h5 className="mx-3" style={{ 'textDecoration': check ? 'line-through' : 'none' }}>{title}</h5>
        </div>
        <div className="todo-footer col-1 p-2 flex-row justify-content-end align-items-center bg-info bg-opacity-50 rounded-end">
          <i className="far fa-trash-alt delete-icon p-2" onClick={del} />
        </div>
      </div>
    </>
  )
}
