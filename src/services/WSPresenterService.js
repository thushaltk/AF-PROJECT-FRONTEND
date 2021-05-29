import axios from "axios";

const WSPRESENTER_BASE_URL = "http://localhost:5000/api/wspresenter";

class WSPresenterService{
    constructor(){

    }

    async sendWSPresenterDetails(wspresenterDetails){
        try{
            await axios.post(WSPRESENTER_BASE_URL + "/add-wspresenter", wspresenterDetails);

        }catch(err){
            if(err.response.status === 500){
                console.log("Problem with the server");
            }else{
                console.log(err.response.data.msg);
            }
            console.log(err);
        }
    }
}

export default new WSPresenterService();