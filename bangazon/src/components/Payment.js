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

				<h1 className="col-2 bang-logo">BANGAZON</h1>
				<hr />

				<Route path="/" component={ChoosePayment} />

				<hr />
				<p className="copyright">©Bangazon Worldwide 2018</p>
			</div>
		</BrowserRouter>

		)
}