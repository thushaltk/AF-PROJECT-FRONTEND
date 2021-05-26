import axios from "axios";

const PAYMENT_API_BASE_URL = "http://localhost:5000/api/researcher/pay";

class StripePaymentService {
    constructor(){
        this.paymentDone = {
            isDone: false
        };
    }

    async handleToken(totalAmount, token){
        try{
            await axios.post(PAYMENT_API_BASE_URL, {
                    token: token.id,
                    amount: totalAmount
            });
            this.paymentDone = {
                isDone: true
            };
        } catch(error){
            console.log(error);
            this.paymentDone = {
                isDone: false
            };
        };
    }

    isPaymentDone(){
        return this.paymentDone;
    }
}

export default new StripePaymentService();