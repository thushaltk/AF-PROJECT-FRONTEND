import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';
import { Button } from "@material-ui/core";

const ApproveButtonField = (props) => {
    //const { source } = props;
    const record = useRecordContext(props);

    return(
        <Button variant="contained" color="primary" onClick={()=>{
            props.updateStatus(record.id, record.status);
        }}>
            Approve
        </Button>
    );    
}

ApproveButtonField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default ApproveButtonField;