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

}

export default new EditorService();