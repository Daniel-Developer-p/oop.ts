// bank account bruh

class CheckingAccount {
    open(initialAmount: number) {
        // code to open account and save in database
    }
}
class BusinessCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
        if (initialAmount < 1000) {
            throw new Error("Business accounts must have an initial deposit of 1.000 Euros")
        }
        super.open(initialAmount);
    }
}
class PersonalCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
        if (initialAmount <= 0) {
            throw new Error("Personal accounts must have an initial deposit of more than zero Euros")
        }
        super.open(initialAmount);
    }
}