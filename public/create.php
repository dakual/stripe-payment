<?php
require_once '../vendor/autoload.php';
require_once '../secrets.php';

\Stripe\Stripe::setApiKey($stripeSecretKey);

function calculateOrderAmount(array $items): int {
    return 1400;
}

header('Content-Type: application/json');

try {
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);

    #$customer = \Stripe\Customer::create();
    $paymentIntent = \Stripe\PaymentIntent::create([
        #'customer' => $customer->id,
        'setup_future_usage' => 'off_session',
        'amount' => calculateOrderAmount($jsonObj->items),
        'currency' => 'usd',
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
    ]);

    $output = [
        'clientSecret' => $paymentIntent->client_secret,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}