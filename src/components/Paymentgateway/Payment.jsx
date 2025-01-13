import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payement_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>

            </Elements>
        </div>
    );
};

export default Payment;