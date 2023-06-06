import React  from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default class PaypalButton extends React.Component {
    render() {
       let total = this.props.total; 

        return (
            <PayPalScriptProvider
            options={{ "client-id": "AZ2TTnnEFCRrYImQ3JEPSI-6Qs5jNBei3tmyh_KWMo3bl-Trmj6Pmku8KSV46QyJvF5RSfaiYtgsQgTs" }}
            >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${total}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                alert("Transaction completed by " + name) ;
              }}
            />
          </PayPalScriptProvider>
        );
    }
}