import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentCC.css';

export default function PaymentCC() {
	return (
		<div className="col-12 payment_box">

			<form>

				<fieldset>
					<legend>Cardholder Info</legend>
					<div className="row">

						<div className="col">
							<label for="first_name">First Name</label>
							<input type="text" id="first_name" placeholder="First Name" />
						</div>
					
						<div className="col">
							<label for="last_name">Last Name</label>
							<input type="text" id="last_name" placeholder="Last Name" />
						</div>

					</div>					
				</fieldset>

				<fieldset>
					<legend>Card Info</legend>					

					<div className="">
						<label for="cc_number">Card Number</label>
						<input  className="col-12 cc_number" type="text" id="cc_number" placeholder="Card Number" />
					</div>

					<div className="row">

						<div className="col">
							<label for="cc_exp">Exp.</label>
							<input type="text" id="cc_exp" placeholder="Exp." />
						</div>

						<div className="col">
							<label for="cc_ccv">CCV</label>
							<input type="text" id="cc_ccv" placeholder="CCV" />
						</div>

					</div>				
				</fieldset>

			</form>					

		</div>
		)
}