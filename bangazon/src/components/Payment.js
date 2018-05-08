import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';

import ChoosePayment from './ChoosePayment.js';

export default function Payment() {
	return (
			<div className="container mx-auto choose_payment">

				<div>
					<h1 className="col-2 bang-logo">BANGAZON</h1>
					<hr />
				</div>

				<ChoosePayment />

				<div className="bottom_rule">
					<hr />
					<p className="copyright">©Bangazon Worldwide 2018</p>
				</div>

			</div>

		)
}