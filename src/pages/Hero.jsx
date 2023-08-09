import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__container"]}>
				<div className={styles["hero__title"]}>
					<h1>A powerful solution to grow your startup. Fast!</h1>
					<p>
						Organise, collaborate, and track progress seamlessly
						with our one-stop-shop startup growth tool.
					</p>
				</div>
				<div className={styles["hero__btns"]}>
					<ButtonPrimary>Get started</ButtonPrimary>
					<ButtonSecondary>Book a demo</ButtonSecondary>
				</div>
			</div>
			<div className={styles["hero__images"]}>
				<div className={styles["hero__images__team"]}>
					<div className={styles["team__title"]}>
						<h2>Team Capodopera</h2>
						<p>
							Grow the number of clients and reach the 1000/day
							sales.
						</p>
						<span></span>
						<div>
							<img src="" alt="" />
						</div>
					</div>
				</div>
				<div className={styles["hero__images__chart"]}></div>
				<div className={styles["hero__images__call"]}></div>
			</div>
		</section>
	);
}

export default Hero;
