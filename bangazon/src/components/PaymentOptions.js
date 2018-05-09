import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentOptions.css';

export default function PaymentOptions() {
	return (
		<div className="col-12 payment_box">

			<button className="btn btn-secondary disabled">Apple Pay</button>
			<p>OR</p>
			<button className="btn btn-secondary">Credit Card</button>
			<button className="btn btn-secondary disabled">PayPal</button>						

		</div>
		)
}