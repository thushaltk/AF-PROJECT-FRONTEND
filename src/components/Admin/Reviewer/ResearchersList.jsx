import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
} from 'react-admin';
import Button from "@material-ui/core/Button";

const ResearchersList = (props) => {
    return ( 
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="fullName"/>
                <TextField source="email"/>
                <TextField source="mobileNo"/>
                <TextField label="Research Paper" source="researchPaperURL"/>
                <EditButton basePath='/api/researcher'/>
                <DeleteButton basePath='/api/researcher'/>
                <Button variant="contained" color="primary">
                    APPROVE
                </Button>
                <Button variant="contained" color="secondary">
                    REJECT
                </Button>
            </Datagrid>
        </List>
     );
}
 
export default ResearchersList;