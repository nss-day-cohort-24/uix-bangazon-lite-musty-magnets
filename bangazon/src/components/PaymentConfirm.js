import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentConfirm.css';

export default function PaymentConfirm() {
	return (
		<div className="col-12 payment_box">

			<div className="checkmark">
				<i class="far fa-check-circle"></i>
			</div>

			<h2>Your card has been added! Woo hoo!</h2>
			
		</div>
		)
}