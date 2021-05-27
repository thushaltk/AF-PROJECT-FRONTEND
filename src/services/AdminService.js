import axios from "axios";

const ADMIN_BASE_URL = "http://localhost:5000/api/admin/login";

class AdminService {
    constructor(){
        this.loggedIn = false;

    }

    async sendAdminLogin(login){
        console.log(login);
        try{
            await axios.post(ADMIN_BASE_URL, login)
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

export default new AdminService();