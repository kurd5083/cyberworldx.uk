import styles from "./Policy.module.scss";

const PrivacyPolicy = () => {
	return (
		<section className={styles.policy}>
			<h2 className={styles.policy_head}>Privacy Policy</h2>
			<div className={styles.policy_block}>
				<p>This Data Protection Guidelines outlines how gamerelics.uk (the “Website” or “we”) gathers, utilizes, and shares your Personal Information when you browse or make a purchase from the Website.</p>
			</div>
			<h3 className={styles.policy_title}>Gathering Personal Information</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<p>When you access the Website, we gather specific details about your device, your engagement with the Website, and information needed to process your orders. We may also collect further details if you reach out to us for customer assistance. In this Data Protection Guidelines, we refer to any information that can distinctly identify an individual (including the details below) as “Personal Information.”</p>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Device Details</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Examples of Personal Information collected:<br />Browser version, IP address, time zone, cookie data, the sites or products you view, search queries, and your interactions with the Website.</li>
						<li>Purpose of collection:<br />To accurately load the Website for you and to analyze usage to enhance our Website.</li>
						<li>Source of collection:<br />Automatically gathered when you access our Website using cookies, log files, web beacons, tags, or pixels.</li>
						<li>Disclosure for a business purpose:<br />Shared with our processor Shopify and third parties like Facebook and Instagram for targeted advertising.</li>
					</ul>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Purchase Information</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Examples of Personal Information collected:<br />Full name, billing address, shipping address, payment details (including credit card numbers), email address, and contact number.</li>
						<li>Purpose of collection:<br />To deliver products or services to you, fulfill our contract, process your payment details, arrange shipping, provide invoices/order confirmations, communicate with you, screen orders for potential risks or fraud, and offer information or advertising tailored to your preferences.</li>
						<li>Source of collection:<br />Collected directly from you.</li>
						<li>Disclosure for a business purpose:<br />Shared with our processor Shopify and third parties like Facebook and Instagram for targeted advertising.</li>
					</ul>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Support Information</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Examples of Personal Information collected:<br />Full name, billing address, shipping address, email address, and contact number.</li>
						<li>Purpose of collection:<br />To deliver customer support.</li>
						<li>Source of collection:<br />Collected directly from you.</li>
						<li>Disclosure for a business purpose:<br />Shared with our processor Shopify and third parties like Facebook and Instagram for targeted advertising.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Children's Policy</h3>
			<div className={styles.policy_block}>
				<p>The Website is not designed for individuals under the age of 18. We do not intentionally gather Personal Information from minors. If you are a parent or guardian and believe your child has provided us with Personal Information, please contact us to request its deletion.</p>
			</div>
			<h3 className={styles.policy_title}>Distributing Personal Information</h3>
			<div className={styles.policy_block}>
				<p>We share your Personal Information with service providers to assist us in delivering our services and fulfilling our agreements with you. For instance:</p>
				<p>We utilize Shopify to operate our online store. More details: Shopify Privacy Guidelines.</p>
				<p>We engage Facebook and Instagram for marketing purposes. Customers can disconnect their data here: Facebook Help.</p>
				<p>We may share your Personal Information to comply with applicable laws, respond to legal inquiries, or safeguard our rights.</p>
			</div>
			<h3 className={styles.policy_title}>Targeted Advertising</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<div className={styles.children_block}>
						<p>We use your Personal Information to provide you with targeted advertisements or marketing communications that we believe may interest you. For example:</p>
						<p>Google Analytics:<br />Helps us understand how customers interact with the Website. More details: Google Privacy Guidelines.Opt-out: Google Analytics Opt-out.</p>
						<p>Facebook & Instagram Ads:<br />Customers can disconnect their data: Facebook Help.</p>
						<p>General Advertising Opt-out:<br />Network Advertising Initiative.</p>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Opt-out Choices</h4>
					<ul className={`${styles.children_block} ${styles.children_block_dist}`}>
						<li>Facebook: Ad Preferences</li>
						<li>Google: Ad Settings</li>
						<li>Bing: Personalized Ads</li>
						<li>General opt-out: DAA Opt-out.</li>
					</ul>
				</div>
			</div>
			<h3 className={styles.policy_title}>Utilizing Personal Information</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<div className={styles.children_block}>
						<p>We use your Personal Information to provide our services, which include:</p>
						<p>Offering products for sale</p>
						<p>Processing payments</p>
						<p>Shipping and fulfilling orders</p>
						<p>Keeping you informed about new products, services, and promotions.</p>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Legal Basis (GDPR)</h4>
					<div className={styles.children_block}>
						<p>If you are a resident of the European Economic Area (EEA), we process your personal information under these legal bases:</p>
						<p>Your consent</p>
						<p>The execution of a contract</p>
						<p>Compliance with legal obligations</p>
						<p>Protecting your vital interests</p>
						<p>Tasks performed in the public interest</p>
						<p>Legitimate interests that do not infringe upon your fundamental rights.</p>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Data Retention</h4>
					<div className={styles.children_block}>
						<p>When you place an order through the Website, we retain your Personal Information unless you request its deletion.</p>
					</div>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Automated Decision-Making</h4>
					<div className={styles.children_block}>
						<p>If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making.We do not engage in fully automated decision-making that has legal or significant effects on users. However, Shopify applies limited automated decision-making to prevent fraud, including:</p>
						<p>Temporary denylist of IPs with repeated failed transactions (persists for a few hours).</p>
						<p>Temporary denylist of credit cards linked to denylisted IPs (persists for a few days).</p>
					</div>
				</div>
			</div>
			<h3 className={styles.policy_title}>Your Rights</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<div className={styles.children}>
					<h4 className={styles.children_title}>GDPR (For EEA Residents)</h4>
					<div className={styles.children_block}>
						<p>You have the right to:</p>
						<p>Access the Personal Information we hold about you</p>
						<p>Transfer it to a new service</p>
						<p>Request corrections, updates, or deletion.</p>
						<p>For data transfers outside of Europe, see Shopify’s GDPR Compliance.</p>
					</div>
				</div>
			</div>
			<h3 className={styles.policy_title}>Cookies</h3>
			<div className={`${styles.policy_block} ${styles.policy_block_children}`}>
				<p>A cookie is a small file downloaded to your device when you visit our Website. We use various types of cookies, including:</p>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Essential Cookies for Website Functionality</h4>
					<table className={`${styles.children_block} ${styles.children_block_table}`}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Function</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_ab</td>
								<td>Used for administrative access.</td>
							</tr>
							<tr>
								<td>_secure_session_id</td>
								<td>Used for navigation purposes.</td>
							</tr>
							<tr>
								<td>cart</td>
								<td>Used for the shopping cart functionality.</td>
							</tr>
							<tr>
								<td>cart_sig, cart_ts, checkout_token, secret</td>
								<td>Used during the checkout process.</td>
							</tr>
							<tr>
								<td>secure_customer_sig, storefront_digest</td>
								<td>Used for customer login.</td>
							</tr>
							<tr>
								<td>_shopify_u</td>
								<td>Facilitates updates to customer accounts.</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Reporting & Analytics Cookies</h4>
					<table className={`${styles.children_block} ${styles.children_block_table}`}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Function</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_tracking_consent</td>
								<td>Tracking preferences.</td>
							</tr>
							<tr>
								<td>_landing_page, _orig_referrer	</td>
								<td>Monitor landing pages.</td>
							</tr>
							<tr>
								<td>_s, _shopify_fs, _shopify_s, _shopify_sa_p, _shopify_sa_t, _shopify_y, _y</td>
								<td>Shopify analytics.</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>Most cookies have a lifespan of 30 minutes to 2 years.</p>
				<p>You can manage cookies through your browser settings. For more information: All About Cookies.</p>
				<div className={styles.children}>
					<h4 className={styles.children_title}>Do Not Track Policy</h4>
					<div className={styles.children_block}>
						<p>We do not modify our data collection practices based on “Do Not Track” signals due to the absence of a consistent industry standard.</p>
					</div>
				</div>
			</div>
			<h3 className={styles.policy_title}>Updates</h3>
			<div className={styles.policy_block}>
				<p>We may revise this Data Protection Guidelines periodically to reflect changes in our practices or for legal reasons.</p>
				<p>Last updated: 27th March 2024.</p>
				<p>If you are dissatisfied with our response, you can file a complaint with the UK Information Commissioner’s Office:<br />ICO Complaint Form.</p>
			</div>
		</section>
	)
}

export default PrivacyPolicy
