import axios from "axios";

const REVIEWER_BASE_URL = "http://localhost:5000/api/reviewer/login";

class ReviewerService{
    constructor(){
        this.loggedIn = false;
    }

    async sendReviewerLogin(login){
        console.log(login);
        try{
            await axios.post(REVIEWER_BASE_URL, login)
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

export default new ReviewerService();