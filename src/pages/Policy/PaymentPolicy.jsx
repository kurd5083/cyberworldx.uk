import styles from "./Policy.module.scss";

const PaymentPolicy = () => {
	return (
		<section className={styles.policy}>
			<h2 className={styles.policy_head}>Payment Policy</h2>
			<h3 className={styles.policy_title}>Accepted Payment Options</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<p>We offer the following secure payment methods:</p>
				<div className={styles.children}>
					<table className={`${styles.children_block} ${styles.children_block_table}`}>
						<thead>
							<tr>
								<th>Payment Method</th>
								<th>Payment Details</th>
								<th>Processing Duration</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Credit and Debit Cards</td>
								<td>Visa, Mastercard, American Express, and Discover Cards</td>
								<td>Immediate</td>
							</tr>
							<tr>
								<td>PayPal Services</td>
								<td>Checkout using your PayPal account or as a guest with a card.</td>
								<td>Immediate</td>
							</tr>
							<tr>
								<td>Apple Pay Services</td>
								<td>Available for iOS and Mac users.</td>
								<td>Immediate</td>
							</tr>
							<tr>
								<td>Google Pay Services</td>
								<td>Available for Android and Web users.</td>
								<td>Immediate</td>
							</tr>
							<tr>
								<td>Klarna Payment Options</td>
								<td>"Pay Later" or installment options (available in UK and EU only).</td>
								<td>1 to 3 business days</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>(All transactions are secured with SSL encryption.)</p>
			</div>
			<h3 className={styles.policy_title}>Order Processing and Payment Verification</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Instant Confirmation: Most payments are processed right away.</li>
						<li>Verification Checks: For security reasons, some orders may need a manual review (1 to 2 business hours).</li>
						<li>Failed Payments: If your payment does not go through, you’ll receive an email with steps to retry.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Currency and Pricing Information</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>All prices are shown in GBP (£).</li>
						<li>For international customers: Your bank may charge conversion fees. Please check with them for the exact rates.</li>
						<li>Price Guarantee: Orders that have been paid for will be honored even if prices change later.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Refunds and Cancellations</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Refund Processing Information</h4>
					<p>We offer the following secure payment methods:</p>
					<div className={styles.children}>
						<table className={`${styles.children_block} ${styles.children_block_table}`}>
							<thead>
								<tr>
									<th>Payment Method</th>
									<th>Timeline After Approval</th>
									<th>Notes</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Credit and Debit Cards</td>
									<td>Visa, Mastercard, American Express, and Discover Cards</td>
									<td>Dependent on your bank's processing times.</td>
								</tr>
								<tr>
									<td>PayPal Services</td>
									<td>3 to 5 business days</td>
									<td>Refunds will be credited to your PayPal balance.</td>
								</tr>
								<tr>
									<td>Apple Pay Services</td>
									<td>Up to 5 business days</td>
									<td>Adjusts your payment plan.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Order Cancellations</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Cancellation requests must be made within 1 hour of purchase via the Contact Form.</li>
						<li>Orders that have already shipped cannot be canceled but may be returned (see Return Policy).</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Security and Fraud Prevention Measures</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>We utilize 3D Secure 2.0 authentication for card transactions.</li>
						<li>AVS Checks: Billing addresses must match the cardholder’s information.</li>
						<li>Suspicious activities may lead to order holds or cancellations for your safety.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Common Issues</h3>

			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<div className={styles.children_block}>
						<p>Solutions for "Payment Declined"</p>
						<p>Make sure your card details (number, CVV, expiration date) are accurate.</p>
						<p>Contact your bank to ensure international transactions are permitted.</p>
						<p>Consider using an alternative payment method (like PayPal).</p>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Pending Charges Information</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Pre-authorization holds may show up for 1 to 5 days but are not actual charges.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Get in Touch with Us</h3>
			<div className={styles.policy_block}>
				<p>For any payment-related inquiries:</p>
				<p>📧 support@cyberworldx.uk</p>
				<p>📞 +44 7483 256 917</p>
			</div>
		</section>
	)
}

export default PaymentPolicy
