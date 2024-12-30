interface IPaymentMethod {
    processCreditCardPayment(): void;
    processUpiPayment(): void;
}

class CreditCardPayment implements IPaymentMethod {
    processCreditCardPayment(): void {
        // Code to process a credit card payment
    }
    processUpiPayment(): void {
        // This method is not relevant for credit card payments
    }
}
/*
In this example, the CreditCardPayment class has to implement the processUpiPayment method even though it doesn't use it. This violates the ISP because the class is forced to have unnecessary methods.
*/

// After Applying ISP:

interface IUpiPayment {
    processUpiPayment(): void
}

interface IDebitCardPayment {
    processDebitCardPayment(): void;
}

// Now, when implementing a upi payment class, you only need to conform to the relevant interface:

class UpiPaymentProcessor implements IUpiPayment {
    processUpiPayment(): void {
        // Code to process upi payment
    }
}

/*
With this approach, you follow the ISP by allowing classes to implement only the methods they actually need. This makes the code more focused, easier to understand, and avoids the burden of implementing unnecessary methods.
*/














export {}