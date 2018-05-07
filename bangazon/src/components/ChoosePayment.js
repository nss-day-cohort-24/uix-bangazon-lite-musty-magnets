import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChoosePayment.css';

export default function ChoosePayment() {
	return (
			<div className="container mx-auto choose_payment">
				<h1 className="col-2 bang-logo">BANGAZON</h1>
				<hr />

				<div className="col-8 mx-auto main_body">
					<h2 className="col-12 body-title"><span>Payment Information</span><button className="btn btn-light">Back</button></h2>

					<div className="col-12 payment_box">

						<button className="btn btn-secondary disabled">Apple Pay</button>
						<p>OR</p>
						<button className="btn btn-secondary">Credit Card</button>
						<button className="btn btn-secondary disabled">PayPal</button>						

					</div>

				</div>

				<hr />
				<p className="copyright">©Bangazon Worldwide 2018</p>
			</div>

		)
}