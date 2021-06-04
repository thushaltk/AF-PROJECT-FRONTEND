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

    async getAllAttendeeCount(){
        try{
            const allAttendees = await axios.get(ATTENDEE_BASE_URL);
            const attendeeCount = allAttendees.data.length;
            return attendeeCount;
        }catch(err){
            console.log("count error:= ", err);
        }
    }

}

export default new AttendeeService();