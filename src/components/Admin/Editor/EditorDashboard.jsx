import React, { useEffect } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Logout from '../Custom/Logout';

const EditorDashboard = (props) => {

    useEffect(()=>{
        props.hide(true);
    },[])

    return ( 
        <Admin dataProvider={restProvider('http://localhost:5000/api')} loginPage={Logout}>

        </Admin>
     );
}
 
export default EditorDashboard;