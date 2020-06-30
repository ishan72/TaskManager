// import React from 'react';
// import {Redirect, Route} from 'react-router-dom';

// export const Protected=({component: Cmp, ...rest})=>{
//     return(
//         <Route {...rest} render ={
//             props => (localStorage.getItem('login') ? <Cmp {...rest} {...props} /> : <Redirect to ='/login'/>)
//         }
//         />
//     )
// }

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const Protected=({component: Cmp, ...rest})=>{
    return(
        <Route {...rest} render={
            props=>(localStorage.getItem('login')? <Cmp {...rest} {...props} />:<Redirect to='/login'/>)
        }
        />
    )
}