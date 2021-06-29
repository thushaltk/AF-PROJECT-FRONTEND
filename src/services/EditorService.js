import axios from "axios";

const EDITOR_BASE_URL = "http://localhost:5000/api/editor";

class EditorService{
    constructor(){
        this.loggedIn = false;
        this.success = false;
    }

    async addNewEditor(editorDetails){
        try{
            await axios.post(EDITOR_BASE_URL, editorDetails);
            this.success = true;
            return this.success;
        }catch(err){
            this.success = false;
            return this.success;
        }
    }

    async updateEditorPassword(editorDetails){
        console.log(editorDetails);
        try{
            await axios.patch(EDITOR_BASE_URL, editorDetails);
            return true;
        }catch(err){
            return false;
        }
    }


    async sendEditorLogin(login){
        console.log(login);
        try{
            await axios.post(EDITOR_BASE_URL + "/login", login)
            this.loggedIn = true;
        }catch(err){
            console.log(err);
            this.loggedIn = false;
        } 
    }

    isLoggedIn(){
        return this.loggedIn;
    }

    async addRSPaper(rsPaperDetails){
        try{
            await axios.post(EDITOR_BASE_URL + "/publish-paper", rsPaperDetails);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async getRSPapers(){
        try{
            const allRSPapers = await axios.get(EDITOR_BASE_URL + "/rs-papers");
            return allRSPapers.data;
        }catch(err){
            console.log(err);
        }
    }

    async addWSProposal(wsProposalDetails){
        try{
            await axios.post(EDITOR_BASE_URL + "/publish-proposal", wsProposalDetails);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async getWSProposals(){
        try{
            const allWSProposal = await axios.get(EDITOR_BASE_URL + "/ws-proposals");
            return allWSProposal.data;
        }catch(err){
            console.log(err);
        }
    }

    async addTopic(topicDetails){
        try{
            await axios.post(EDITOR_BASE_URL + "/conference-topics", topicDetails);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async getTopics(){
        try{
            const allTopics = await axios.get(EDITOR_BASE_URL + "/conference-topics");
            return allTopics.data;
        }catch(err){
            console.log(err);
        }
    }

    async getApprovedTopics(){
        try{
            const allTopics = await axios.get(EDITOR_BASE_URL + "/conference-topics/admin-approved");
            return allTopics.data;
        }catch(err){
            console.log(err);
        }
    }

    async updateStatus(id, topicDetails){
        try{
            await axios.patch(EDITOR_BASE_URL + "/conference-topics" + `/${id}`, topicDetails);
        }catch(err){
            if(err.response.status === 500){
                console.log("Problem with the server");
            }else{
                console.log(err.response.data.msg);
            }
            console.log(err);
        }
    }

    async deleteTopic(id){
        try{
            await axios.delete(EDITOR_BASE_URL + "/conference-topics" + `/${id}`);
        }catch(err){
            if(err.response.status === 500){
                console.log("Problem with the server");
            }else{
                console.log(err.response.data.msg);
            }
            console.log(err);
        }
    }

    async addContactDetails(contactDetails){
        try{
            await axios.post(EDITOR_BASE_URL + "/inquiries", contactDetails);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

}

export default new EditorService();