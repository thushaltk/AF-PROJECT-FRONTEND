import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const EditWSProposals = (props) => {
    return(
        <Edit {...props} title="Edit WS proposal Details" >
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="wsProposalTitle"/>
                <TextInput source="coverImgURL"/>
                <TextInput source="authorName"/>
                <TextInput source="authorEmail"/>
                <TextInput source="wsProposalLink"/>
            </SimpleForm>
        </Edit>
    )
}

export default EditWSProposals;