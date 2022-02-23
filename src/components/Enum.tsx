import React, { useState } from "react";

// Using Union Type (preferred Option) | enum type approach below

function Enum() {

type CheckoutStep = 'Details' | 'Shipping' | 'Payment'

  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details");
  return (
    <div>
      {checkoutStep === "Details" && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep("Shipping")}>
            Next
          </button>
        </>
      )}
      {checkoutStep === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep("Payment")}>
            Next
          </button>
        </>
      )}
      {checkoutStep === "Payment" && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </div>
  );
}

export default Enum;

// USING enum to solve thesame problem

// function Enum() {
//   enum CheckoutStep {
//     Details = "Details",
//     Shipping = "Shipping",
//     Payment = "Payment",
//   }

//   const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(
//     CheckoutStep.Details
//   );
//   return (
//     <div>
//       {checkoutStep === CheckoutStep.Details && (
//         <>
//           <h1>Details</h1>
//           <button
//             type="button"
//             onClick={() => setCheckoutStep(CheckoutStep.Shipping)}
//           >
//             Next
//           </button>
//         </>
//       )}
//       {checkoutStep === CheckoutStep.Shipping && (
//         <>
//           <h1>Shipping</h1>
//           <button
//             type="button"
//             onClick={() => setCheckoutStep(CheckoutStep.Payment)}
//           >
//             Next
//           </button>
//         </>
//       )}
//       {checkoutStep === CheckoutStep.Payment && (
//         <>
//           <h1>Payment</h1>
//         </>
//       )}
//     </div>
//   );
// }

// export default Enum;
