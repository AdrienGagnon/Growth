import styles from "./Hero.module.css";
import HeroContainer from "./HeroContainer";

import HeroImages from "./HeroChart";

function Hero() {
	return (
		<section className={styles["hero"]}>
<<<<<<< HEAD
			<div className={styles["hero__wrapper"]}>
				<h1>A powerful solution to grow your startup. Fast!</h1>
				<p className={styles["hero__description"]}>
					Organise, collaborate, and track progress seamlessly with
					our one-stop-shop startup growth tool.
				</p>
				<HeroContainer />
			</div>
=======
			<h1>A powerful solution to grow your startup. Fast!</h1>
			<p className={styles["hero__description"]}>
				Organise, collaborate, and track progress seamlessly with our
				one-stop-shop startup growth tool.
			</p>
			<HeroContainer />
>>>>>>> e9488107f3a04cfed3d50d90ed6d6783c3ba293f
		</section>
	);
}

export default Hero;
