import React from 'react';
import Aux from '../../hoc/Auxiliry/Auxiliry';

const toDolistItem = props => {
      return (
            <Aux>
                  <div>
                        <input type="checkbox" id={props.title} value={props.isCompleted} onClick={props.toogleCompleted}/>
                        <label htmlFor={props.title}>{props.title}</label>

                        <button onClick={props.removeItem}>Remove</button>
                  </div>
            </Aux>
      )
}

export default toDolistItem;