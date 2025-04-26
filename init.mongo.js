db = db.getSiblingDB('bank')

db.accountOperations.insertMany([
  {
    "accountNumber": "1234",
    "type": "Deposit",
    "metadata": {
      "amount": 5000,
      "date": new Date()
    }
  },
  {
    "accountNumber": "1234",
    "type": "Withdrawal",
    "metadata": {
      "amount": 1000,
      "date": new Date()
    }
  },
  {
    "accountNumber": "5678",
    "type": "Loan",
    "metadata": {
      "amount": 10000,
      "date": new Date(),
      "payment": 12,
      "interest": 5.5
    }
  },
  {
    "accountNumber": "9876",
    "type": "Deposit",
    "metadata": {
      "amount": 7500,
      "date": new Date()
    }
  },
  {
    "accountNumber": "1234",
    "type": "Loan",
    "metadata": {
      "amount": 3000,
      "date": new Date(),
      "payment": 6,
      "interest": 4.2
    }
  },
  {
    "accountNumber": "9876",
    "type": "Withdrawal",
    "metadata": {
      "amount": 2500,
      "date": new Date()
    }
  }
]);