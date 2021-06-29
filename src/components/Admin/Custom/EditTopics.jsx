import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const EditTopics = (props) => {
    return(
        <Edit {...props} title="Edit Topic Details" >
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="topicTitle"/>
                <TextInput source="description"/>
                <TextInput source="coverImgURL"/>
            </SimpleForm>
        </Edit>
    )
}

export default EditTopics;