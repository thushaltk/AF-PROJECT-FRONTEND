import axios from "axios";

const REVIEWER_BASE_URL = "http://localhost:5000/api/reviewer";

class ReviewerService{
    constructor(){
        this.loggedIn = false;
        this.success = false;
    }

    async sendReviewerLogin(login){
        console.log(login);
        try{
            await axios.post(REVIEWER_BASE_URL + "/login", login)
            this.loggedIn = true;
        }catch(err){
            console.log(err);
            this.loggedIn = false;
        } 
    }

    async addNewReviewer(reviewerDetails){
        try{
            await axios.post(REVIEWER_BASE_URL, reviewerDetails);
            this.success = true;
            return this.success;
        }catch(err){
            this.success = false;
            return this.success;
        }
    }

    async updateReviewerPassword(reviewerDetails){
        console.log(reviewerDetails);
        try{
            await axios.patch(REVIEWER_BASE_URL, reviewerDetails);
            return true;
        }catch(err){
            return false;
        }
    }

    isLoggedIn(){
        return this.loggedIn;
    }

}

export default new ReviewerService();