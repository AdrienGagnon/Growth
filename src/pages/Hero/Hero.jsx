import styles from "./Hero.module.css";
import HeroContainer from "./HeroContainer";

import HeroImages from "./HeroChart";

function Hero() {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__wrapper"]}>
				<h1>A powerful solution to grow your startup. Fast!</h1>
				<p className={styles["hero__description"]}>
					Organise, collaborate, and track progress seamlessly with
					our one-stop-shop startup growth tool.
				</p>
				<HeroContainer />
			</div>
		</section>
	);
}

export default Hero;
