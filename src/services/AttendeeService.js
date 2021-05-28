import axios from "axios";

const ATTENDEE_BASE_URL = "http://localhost:5000/api/attendee";

class AttendeeService{
    constructor(){

    }

    async sendAttendeeDetails(attendeeDetails){
        try{
            await axios.post(ATTENDEE_BASE_URL + "/add-attendee", attendeeDetails);
        }catch(err){
            console.log(err);
        }
    }

}

export default new AttendeeService();