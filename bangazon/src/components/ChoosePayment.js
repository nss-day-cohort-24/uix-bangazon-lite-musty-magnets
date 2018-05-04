import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChoosePayment.css';

export default function ChoosePayment() {
	return (
			<div className="col-10 mx-auto choose_payment">
				<div className="header">
					<h1>Choose your payment options</h1>
				</div>

				<div className="row">
					<div className="col">
						Payment Options
					</div>
					<div className="col">
						Payment Form
					</div>
				</div>

			</div>
		)
}