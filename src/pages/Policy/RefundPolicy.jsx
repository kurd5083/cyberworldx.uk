import styles from "./Policy.module.scss";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
	return (
		<section className={styles.policy}>
			<h2 className={styles.policy_head}>Refund Policy</h2>
			<h3 className={styles.policy_title}>30-Day Exchange and Return Policy</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<p>You have a full 30 days from the moment you receive your product to start a return process.</p>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Criteria for Return Eligibility</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Items must be in pristine condition—unused, unopened, and with all original packaging intact (tags, seals, and boxes included).</li>
						<li>A valid receipt or proof of purchase is necessary.</li>
						<li>Trading cards should remain sealed in their original packaging without any signs of tampering.</li>
						<li>Pre-owned items can only be exchanged unless they are defective.</li>
					</ul>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Steps to Initiate a Return</h4>
					<ol className={`${styles.children_block} ${styles.children_block_decimal}`}>
						<li>To request a return, fill out our Contact Form (make sure to include your order number and the reason for your return).</li>
						<li>If your request is approved, we’ll send you an email with a return authorization and detailed instructions.</li>
						<li>Please do not send items back without prior approval—unauthorized returns will be turned away.</li>
					</ol>
				</div>
			</div>
			<h3 className={styles.policy_title}>Reporting Damages & Defects</h3>
			<div className={styles.policy_block}>
				<p>Check your order as soon as it arrives. If you find that the item is damaged, defective, or not what you ordered, please contact us right away through the Contact Form with:</p>
				<p>Your order number</p>
				<p>A description of the issue (and photos, if possible)</p>
				<p>We’ll get back to you within 72 hours and will provide a pre-paid return label if necessary. Faulty items will undergo testing before we approve a refund.</p>
			</div>
			<h3 className={styles.policy_title}>Items That Cannot Be Returned</h3>
			<div className={styles.policy_block}>
				<p>The following items are non-returnable:</p>
				<p>Sale or discounted products</p>
				<p>Gift cards</p>
				<p>Subscriptions</p>
				<p>Custom or exclusive items</p>
				<p>Feel free to reach out to us for any exceptions or inquiries.</p>
			</div>
			<h3 className={styles.policy_title}>Exchange Policy</h3>
			<div className={styles.policy_block}>
				<p>To exchange an item:</p>
				<p>Return the original item by following the return process.</p>
				<p>Once your return is approved, you can place a new order for the item you want.</p>
			</div>
			<h3 className={styles.policy_title}>Refund Process</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
			<div className={styles.children}>
				<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
					<li>Refunds will be processed once we receive and inspect the returned item.</li>
					<li>Approved refunds will be credited to the original payment method within 3–5 business days (please note that bank processing times may differ).</li>
					<li>Shipping fees are non-refundable, except for items that are damaged or defective.</li>
				</ul>
			</div>
			</div>
			<h3 className={styles.policy_title}>Shipping for Returns</h3>
			<div className={styles.policy_block}>
				<p>Responsibility of the Buyer: You are responsible for return shipping costs unless the return is due to our mistake (e.g., wrong item sent).</p>
				<p>Pre-paid labels will be provided for damaged or defective items.</p>
				<p>Return address:</p>
				<p>CyberworldX Returns Department 12 Falcon Way, Bury St Edmunds Suffolk, IP28 7GR United Kingdom</p>
				<p>📧 support@cyberworldx.uk</p>
				<p>📞 +44 7483 256 917</p>
			</div>
		</section>
	)
}

export default RefundPolicy
