import React from 'react'
import "./Home.css"
import {useContext} from 'react'
import globalContext from "../../../APP/globalContext"

//Importing Reusable components

import { Todo } from "../../../reusable"

export function Home() {

  const todoList = useContext(globalContext);

  return (
    <>
      <div className="container">
        <div className="row">
          {
            todoList?.map((e) =>
              <Todo id={e.id} title = { e.title } completed = {e.completed} key = {e.id} />
            )
          }
        </div>
      </div>
    </>
  )
}
