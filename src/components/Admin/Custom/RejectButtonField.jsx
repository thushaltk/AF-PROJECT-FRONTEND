import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';
import { Button } from "@material-ui/core";

const RejectButtonField = (props) => {
    const record = useRecordContext(props);
    console.log(record);
    return(
        <Button variant="contained" color="secondary" onClick={()=>{
            props.rejectAndDelete(record.id);
        }}>
            Reject
        </Button>
    );    
}

RejectButtonField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default RejectButtonField;