import styles from "./HeroContainer.module.css";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import HeroTeam from "./HeroTeam";
import HeroChart from "./HeroChart";
import HeroCall from "./HeroCall";

function HeroContainer() {
	return (
		<div className={styles["hero__container"]}>
			<div className={styles["hero__first"]}>
				<div className={styles["hero__btns"]}>
					<ButtonPrimary>Get started</ButtonPrimary>
					<ButtonSecondary>Book a demo</ButtonSecondary>
				</div>
				<HeroTeam />
			</div>
			<div className={styles["hero__second"]}>
				<HeroChart />
				<HeroCall />
			</div>
		</div>
	);
}

export default HeroContainer;
