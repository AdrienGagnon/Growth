import styles from "./HeroChart.module.css";
import person1Small from "../../assets/hero/person-1-small.png";
import person2Small from "../../assets/hero/person-2-small.png";
import person3Small from "../../assets/hero/person-3-small.png";

function HeroChart() {
	return (
		<div className={styles["hero__images__chart"]}>
			<h4>Growth</h4>
			<div className={styles.chart}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div>
					<p>Jan 16</p>
					<p>$120 / 3 Sales</p>
				</div>
			</div>
		</div>
	);
}

export default HeroChart;
