import styles from "./Policy.module.scss";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
	return (
		<section className={styles.policy}>
			<h2 className={styles.policy_head}>Shipping Policy</h2>
			<h3 className={styles.policy_title}>Orders within the UK Mainland</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Processing and Delivery Times</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Order Processing: 1–2 business days (excluding weekends and holidays).</li>
						<li>Delivery Time: 3–5 business days through Royal Mail Signed For, Royal Mail Tracked, or Parcelforce.</li>
						<li>Free Shipping: Enjoy complimentary delivery on all orders sent to UK mainland addresses.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Global Shipping</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Delivery Times and Charges</h4>
					<table className={`${styles.children_block} ${styles.children_block_table}`}>
						<thead>
							<tr>
								<th>Shipping Regions</th>
								<th>Projected Delivery Time</th>
								<th>Estimated Shipping Costs</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>European Union (EU)</td>
								<td>5 to 10 business days</td>
								<td>£8.99 to £14.99</td>
							</tr>
							<tr>
								<td>United States and Canada</td>
								<td>7 to 14 business days</td>
								<td>£12.99 to £19.99</td>
							</tr>
							<tr>
								<td>Asia and the Pacific Islands</td>
								<td>10 to 20 business days</td>
								<td>£15.99 to £24.99</td>
							</tr>
							<tr>
								<td>Other Global Regions</td>
								<td>12 to 25 business days</td>
								<td>£18.99 to £29.99</td>
							</tr>
						</tbody>
					</table>
					<p>(Please note: Delivery times are estimates and may be affected by customs delays.)</p>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Customs and Import Charges</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>International shipments may be subject to customs duties, taxes, or fees imposed by the destination country.</li>
						<li>These charges are the responsibility of the customer—we cannot predict or cover these costs.</li>
						<li>For specific details, please contact your local customs office.</li>
					</ul>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Complimentary International Shipping</h4>
					<p>Free shipping is available for international orders exceeding £100 GBP (after discounts). Promotions do not apply to bulky or heavy items.</p>
				</div>
			</div>
			<h3 className={styles.policy_title}>Order Processing Information</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Orders submitted before 2 PM GMT are processed on the same day.</li>
						<li>Processing may take an additional 1–2 days during weekends or holidays.</li>
						<li>Tracking numbers will be emailed once your order has been dispatched.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Key Information</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Address Verification: Please ensure your shipping address is accurate—we are not responsible for misdeliveries due to incorrect information.</li>
						<li>Delays: Severe weather, customs inspections, or carrier issues may prolong delivery times.</li>
						<li>Lost Packages: If your order has not arrived within 10 days of the estimated delivery date, please reach out to us.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Get in Touch</h3>
			<div className={styles.policy_block}>
				<p>For shipping-related questions:</p>
				<p>📧 support@gamerelics.uk</p>
				<p>📞 +44 7483 256 917</p>
			</div>
		</section>
	)
}

export default ShippingPolicy
