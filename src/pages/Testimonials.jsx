import styles from "./Testimonials.module.css";

function Testimonials() {
	return (
		<div className={styles["testimonials"]}>
			<h2>
				Don't just take our word for it, see the success stories from
				businesses just like yours.
			</h2>
			<ul className={styles["testimonials__container"]}>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“Our business has seen a significant increase in
							productivity since we started using the Growth app.”
						</p>
						<footer>
							<p>Katherine Smith</p>
							<span>Capodopera</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“As a small business owner, it's important to have a
							tool that can help me keep track of everything. The
							Growth app has been a lifesaver for me, allowing me
							to manage my contacts, schedule appointments, and
							track progress all in one place..”
						</p>
						<footer>
							<p>Jonathan Lee</p>
							<span>Red Bolt</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“The dashboards and reporting feature has provided
							valuable insights into our performance and helped us
							make data-driven decisions. It's a game changer for
							us.”
						</p>
						<footer>
							<p>David Wilson</p>
							<span>Slide</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“Our business has seen a significant increase in
							productivity since we started using the Growth app”
						</p>
						<footer>
							<p>Katherine Smith</p>
							<span>Capodopera</span>
						</footer>
					</blockquote>
				</li>
			</ul>
		</div>
	);
}

export default Testimonials;
