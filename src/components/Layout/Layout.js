import React from 'react';
import Aux from '../../hoc/Auxiliry/Auxiliry';

// import classes from './Layout.module.css';

const layout = props => (
      <Aux>
            <main className={props.Content}>
                  {props.children}
            </main>
      </Aux>
)

export default layout;