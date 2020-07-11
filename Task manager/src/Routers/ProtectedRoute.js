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

import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

export const Protected=({component: Cmp, ...rest})=>{
    const {authenticated, loadingAuthState} = useContext(AuthContext);

    if(loadingAuthState){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return(
        <Route {...rest} render={routeprops =>
            authenticated ?(
                <Cmp {...routeprops} />
            ):(<Redirect to={{pathname:'/sign-up', state:{prevPath: rest.path}}}/>
            )
        }
        />
    );
}