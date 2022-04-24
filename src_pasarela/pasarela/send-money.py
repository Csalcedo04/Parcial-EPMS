import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 5000,
    "description": "Donacion",
    "payment_method_id": "efecty",
    "payer": {
        "email": "test_user_19549678@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
