import React, { useEffect } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import EditorResearcherList from '../Custom/EditorResearcherList';
import EditorWSPresenterList from '../Custom/EditorWSPresenterList';
import Logout from '../Custom/Logout';

const EditorDashboard = (props) => {

    useEffect(()=>{
        props.hide(true);
    },[])

    return ( 
        <Admin dataProvider={restProvider('http://localhost:5000/api')} loginPage={Logout}>
            <Resource name="researcher/admin-approved" list={EditorResearcherList}/>
            <Resource name="wspresenter/admin-approved" list={EditorWSPresenterList}/>
        </Admin>
     );
}
 
export default EditorDashboard;