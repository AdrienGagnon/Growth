import ButtonsPrimarySmall from "../components/buttons/ButtonsPrimarySmall";
import LinkArrow from "../components/links/LinkArrow";
import styles from "./Pricing.module.css";

function Pricing() {
	return (
		<div className={styles.pricing}>
			<div className={styles["pricing__title"]}>
				<h2>Pricing</h2>
				<p>
					Start free and scale while you grow. No hidden fees.
					Unlimited users for free.
				</p>
			</div>
			<div className={styles["pricing__cards"]}>
				<div className={styles["pricing__card"]}>
					<div>
						<h3>Simple</h3>
						<p>
							Keep track of your contacts, gain valuable insights,
							analyse live data and performance metrics.
						</p>
					</div>
				</div>
				<div>
					<h3>Free</h3>
					<p>* No credit card required</p>
				</div>
				<div>
					<ul>
						<li>Real-time monitoring</li>
						<li>Track key performance indicators</li>
						<li>Schedule appointments</li>
						<li>Organize, delegate and keep track of tasks</li>
					</ul>
				</div>
				<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
			</div>
			<div className={styles["pricing__cards"]}>
				<div className={styles["pricing__card"]}>
					<div>
						<h3>Premium</h3>
						<p>
							Keep track of your contacts, gain valuable insights,
							analyse live data and performance metrics.
						</p>
					</div>
				</div>
				<div>
					<h3>$49</h3>
					<p>/month</p>
				</div>
				<div>
					<p>Everything from the free plan plus:</p>
					<ul>
						<li>Data-driven decisions</li>
						<li>Data visualisation</li>
						<li>Schedule appointments</li>
						<li>Store and organise contact information</li>
						<li>
							Teal-time communication tools for messaging and
							video conferencing
						</li>
					</ul>
				</div>
				<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
			</div>
			<footer>
				<p>
					All prices are in USD and charged per month with applicable
					taxes added at checkout.
				</p>
				<LinkArrow>{"View features"}</LinkArrow>
			</footer>
		</div>
	);
}

export default Pricing;
