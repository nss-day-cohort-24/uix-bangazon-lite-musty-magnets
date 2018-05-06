import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChoosePayment.css';

export default function ChoosePayment() {
	return (
			<div className="col-10 mx-auto choose_payment">
				<div className="header">
					<h1>Choose your payment options</h1>
					<div class="input-group">
					  <div class="input-group-prepend">
					    <div class="input-group-text">
					    <input type="radio" aria-label="Radio button for following text input" />
					    </div>
					  </div>
					  <input type="text" class="form-control" aria-label="Text input with radio button" />
						</div>
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