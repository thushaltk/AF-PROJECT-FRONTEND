import React, { useEffect } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ResearchersList from '../Custom/ResearchersList';
import WSPresenterList from '../Custom/WSPresenterList';

const ReviewerDashboard = (props) => {

    useEffect(()=>{
        props.hide(true);
    },[])

    return ( 
        <Admin dataProvider={restProvider('http://localhost:5000/api')}>
            <Resource name="researcher" list={ResearchersList}/>
            <Resource name="wspresenter" list={WSPresenterList}/>

        </Admin>
     );
}
 
export default ReviewerDashboard;