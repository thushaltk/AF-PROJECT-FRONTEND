import axios from "axios";

const RESEARCHER_BASE_URL = "http://localhost:5000/api/researcher";

class ResearcherService{
    constructor(){

    }

    async sendResearcherDetails(researcherDetails){
        console.log(researcherDetails);
        try{
            await axios.post(RESEARCHER_BASE_URL + "/add-researcher", researcherDetails);

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

export default new ResearcherService();