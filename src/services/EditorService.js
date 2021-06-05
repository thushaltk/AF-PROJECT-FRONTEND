import axios from "axios";

const EDITOR_BASE_URL = "http://localhost:5000/api/editor/login";

class EditorService{
    constructor(){
        this.loggedIn = false;
    }

    async sendEditorLogin(login){
        console.log(login);
        try{
            await axios.post(EDITOR_BASE_URL, login)
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