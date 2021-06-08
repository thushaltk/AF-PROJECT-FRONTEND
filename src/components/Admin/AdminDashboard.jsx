import React, { useEffect} from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ResearchersList from './Custom/ResearchersList';
import WSPresenterList from './Custom/WSPresenterList';
import AttendeeList from './Custom/AttendeeList';
import EditorList from './Custom/EditorList';
import EditEditor from './Custom/EditEditor';
import ReviewerList from './Custom/ReviewerList';
import EditReviewer from './Custom/EditReviewer';
import Logout from './Custom/Logout';
import { useHistory } from 'react-router';

const AdminDashboard = (props) => {
  let history = useHistory();

    useEffect(()=>{
        props.hide(true);
    },[])

    return ( 
        <Admin dataProvider={restProvider('http://localhost:5000/api')} loginPage={Logout} >
            <Resource name="researcher/reviewer-approved" list={ResearchersList}/>
            <Resource name="wspresenter/reviewer-approved" list={WSPresenterList}/>
            <Resource name="attendee" list={AttendeeList}/>
            <Resource name="editor" list={EditorList} edit={EditEditor}/>
            <Resource name="reviewer" list={ReviewerList} edit={EditReviewer}/>
        </Admin>
     );
}
 
export default AdminDashboard;
