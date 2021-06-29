import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const EditRSPapers = (props) => {
    return(
        <Edit {...props} title="Edit Research Paper Details" >
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="researchPaperTitle"/>
                <TextInput source="coverImgURL"/>
                <TextInput source="authorName"/>
                <TextInput source="authorEmail"/>
                <TextInput source="researchPaperURL"/>
            </SimpleForm>
        </Edit>
    )
}

export default EditRSPapers;