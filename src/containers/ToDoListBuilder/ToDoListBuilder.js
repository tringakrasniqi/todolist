import React, { useState, useRef, useEffect } from 'react';
import Aux from '../../hoc/Auxiliry/Auxiliry';
import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';

const ToDoListBuilder = (props) => {
      const inputElement = useRef(null);
      const [todos, setToDos] = useState([]);
      // const [showAll, setShowAll] = useState('strin');

      useEffect(() => { 
            inputElement.current.focus();
      }, []);

      const addToDo = () => {
            if (inputElement.current.value === "") {
                  return;
            }

            const updatedTodo = [...todos]; 
            updatedTodo.push({title: inputElement.current.value, isCompleted: false});
            setToDos(updatedTodo);
            inputElement.current.value = "";
      }

      const toggleCompletedHandler = (index) => {
            const updatedToDo = [...todos];
            const isCompleted = todos[index].isCompleted;
            updatedToDo[index].isCompleted = !isCompleted;
            setToDos(updatedToDo); 
      }
      
      const removeToDoItemHandler = (index) => {
            const updatedToDo = [...todos];
            updatedToDo.splice(index, 1);
            setToDos(updatedToDo);
            console.log(todos);
      }

      return (
            <Aux>
                  <div>
                        <h1>Your to-do list!</h1>
                        <input ref={inputElement} type="text"/>
                        <button onClick={addToDo}>Add</button>
                  </div>
                  {todos.map((item, index) =>  (
                              <ToDoListItem 
                                    key={index} 
                                    title={item.title} 
                                    toogleCompleted={() => toggleCompletedHandler(index)}
                                    removeItem={() => removeToDoItemHandler(index)}/>
                  ))}
            </Aux>
      )
}

export default ToDoListBuilder;

/*
to do list item:
title, isCompleted
actions: addToDo, delete, edit, markComplete
*/