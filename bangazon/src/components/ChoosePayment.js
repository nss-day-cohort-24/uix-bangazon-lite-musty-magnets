import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChoosePayment.css';

import {
	BrowserRouter,
	Route
} from 'react-router-dom';

import PaymentOptions from './PaymentOptions.js';
import PaymentCC from './PaymentCC.js';
import PaymentConfirm from './PaymentConfirm.js'

export default function ChoosePayment() {
	return (
		<BrowserRouter>

			<div className="col-8 mx-auto main_body">
				<h2 className="col-12 body-title"><span>Payment Information</span><button className="btn btn-light">Back</button></h2>

					<PaymentOptions />
					{/*<PaymentCC />*/}
					{/*<PaymentConfirm />*/}
				
			</div>

		</BrowserRouter>
	)
}