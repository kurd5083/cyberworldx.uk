import styles from "./Contacts.module.scss";

const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<h2 className={styles.contacts_head}>Contact Us</h2>
			<div className={styles.contacts_block}>
				<p>Should you wish to connect with us for matters outside of general support, assistance, or guidance, please refer to the contact information listed below. Please be aware that we cannot provide advice on gambling disputes or regulatory issues. While our inboxes are not monitored 24/7, we strive to reply within two business days.</p>
				<p>For inquiries, feel free to reach us at:<br />
					📧 support@cyberworldx.uk<br />
					📞 +44 7483 256 917</p>
			</div>
		</section>
	)
}

export default Contacts
