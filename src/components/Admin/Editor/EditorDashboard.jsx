import React, { useEffect } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import EditorResearcherList from '../Custom/EditorResearcherList';
import EditorWSPresenterList from '../Custom/EditorWSPresenterList';
import EditorRSPapers from '../Custom/EditorRSPapers';
import Logout from '../Custom/Logout';
import EditRSPapers from '../Custom/EditRSPapers';
import EditorWSProposals from '../Custom/EditorWSProposals';
import EditWSProposals from '../Custom/EditWSProposals';
import EditorTopics from '../Custom/EditorTopics';
import EditTopics from '../Custom/EditTopics';
import Inquiries from '../Custom/Inquiries';

const EditorDashboard = (props) => {

    useEffect(()=>{
        props.hide(true);
    },[])

    return ( 
        <Admin dataProvider={restProvider('http://localhost:5000/api')} loginPage={Logout}>
            <Resource name="researcher/admin-approved" list={EditorResearcherList}/>
            <Resource name="wspresenter/admin-approved" list={EditorWSPresenterList}/>
            <Resource name="editor/rs-papers" list={EditorRSPapers} edit={EditRSPapers}/>
            <Resource name="editor/ws-proposals" list={EditorWSProposals} edit={EditWSProposals}/>
            <Resource name="editor/conference-topics" list={EditorTopics} edit={EditTopics}/>
            <Resource name="editor/inquiries" list={Inquiries}/>
        </Admin>
     );
}
 
export default EditorDashboard;