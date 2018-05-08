import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';

import {
	BrowserRouter,
	Route
} from 'react-router-dom';

import ChoosePayment from './ChoosePayment.js';

export default function Payment() {
	return (
		<BrowserRouter>
			<div className="container mx-auto choose_payment">

				<div>
					<h1 className="col-2 bang-logo">BANGAZON</h1>
					<hr />
				</div>

				<Route path="/" component={ChoosePayment} />

				<div className="bottom_rule">
					<hr />
					<p className="copyright">©Bangazon Worldwide 2018</p>
				</div>

			</div>
		</BrowserRouter>

		)
}