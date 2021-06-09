import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const EditEditor = (props) => {
    return(
        <Edit {...props} title="Edit Editor Details" >
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="fullName"/>
                <TextInput source="email"/>
                <TextInput source="mobileNo"/>
            </SimpleForm>
        </Edit>
    )
}

export default EditEditor;