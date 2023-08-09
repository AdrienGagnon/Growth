import ButtonsPrimarySmall from "../components/buttons/ButtonsPrimarySmall";
import LinkArrow from "../components/links/LinkArrow";
import styles from "./Pricing.module.css";

function Pricing() {
	return (
		<section className={styles.pricing}>
			<div className={styles["pricing__title"]}>
				<h2>Pricing</h2>
				<p>
					Start free and scale while you grow. No hidden fees.
					Unlimited users for free.
				</p>
			</div>
			<div className={styles["pricing__cards"]}>
				<div
					className={[styles["pricing__card"], styles["simple"]].join(
						" "
					)}
				>
					<div className={styles["pricing__card__title"]}>
						<h3>Simple</h3>
						<p>
							Keep track of your contacts, gain valuable insights,
							analyse live data and performance metrics.
						</p>
					</div>
					<div className={styles["pricing__card__price"]}>
						<h3>Free</h3>
						<p>* No credit card required</p>
					</div>
					<div className={styles["pricing__card__separator"]}></div>
					<div className={styles["pricing__card__list"]}>
						<ul>
							<li>
								<p>Real-time monitoring</p>
							</li>
							<li>
								<p>Track key performance indicators</p>
							</li>
							<li>
								<p>Schedule appointments</p>
							</li>
							<li>
								<p>
									Organize, delegate and keep track of tasks
								</p>
							</li>
						</ul>
					</div>
					<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
				</div>
				<div
					className={[
						styles["pricing__card"],
						styles["premium"],
					].join(" ")}
				>
					<div className={styles["pricing__card__title"]}>
						<h3>Premium</h3>
						<p>
							Keep track of your contacts, gain valuable insights,
							analyse live data and performance metrics.
						</p>
					</div>
					<div className={styles["pricing__card__price"]}>
						<h3>$49</h3>
						<p>/month</p>
					</div>
					<div className={styles["pricing__card__separator"]}></div>
					<div className={styles["pricing__card__list"]}>
						<p>Everything from the free plan plus:</p>
						<ul>
							<li>
								<p>Data-driven decisions</p>
							</li>
							<li>
								<p>Data visualisation</p>
							</li>
							<li>
								<p>Schedule appointments</p>
							</li>
							<li>
								<p>Store and organise contact information</p>
							</li>
							<li>
								<p>
									Teal-time communication tools for messaging
									and video conferencing
								</p>
							</li>
						</ul>
					</div>
					<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
				</div>
			</div>
			<footer className={styles["pricing__footer"]}>
				<p>
					All prices are in USD and charged per month with applicable
					taxes added at checkout.
				</p>
				<LinkArrow>{"View features"}</LinkArrow>
			</footer>
		</section>
	);
}

export default Pricing;
