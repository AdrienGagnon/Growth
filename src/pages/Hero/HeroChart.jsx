<<<<<<< HEAD
import { useState, useEffect } from "react";

import styles from "./HeroChart.module.css";

function HeroChart() {
	const [visible, setVisible] = useState(window.innerWidth > 1000);

	const handleResize = () => {
		setVisible(window.innerWidth > 1000);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

=======
import styles from "./HeroChart.module.css";
import person1Small from "../../assets/hero/person-1-small.png";
import person2Small from "../../assets/hero/person-2-small.png";
import person3Small from "../../assets/hero/person-3-small.png";

function HeroChart() {
>>>>>>> e9488107f3a04cfed3d50d90ed6d6783c3ba293f
	return (
		<div className={styles["hero__images__chart"]}>
			<h4>Growth</h4>
			<div className={styles.chart}>
<<<<<<< HEAD
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<div className={styles["chart__sales"]}>
					<p>Jan 16</p>
					<p>$120 / 3 Sales</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="9"
						viewBox="0 0 20 9"
						fill="none"
					>
						<path
							d="M0 0H20L12.8284 7.17158C11.2663 8.73367 8.73367 8.73367 7.17157 7.17157L0 0Z"
							fill="white"
						/>
					</svg>
				</div>
				<svg
					className={styles["chart__circle"]}
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<circle cx="8" cy="8" r="8" fill="white" />
					<circle cx="8" cy="8" r="3" fill="#131316" />
				</svg>
				{visible ? (
					<>
						<svg
							className={styles["chart__blueline"]}
							xmlns="http://www.w3.org/2000/svg"
							width="432"
							height="156"
							viewBox="0 0 432 156"
							fill="none"
						>
							<path
								d="M2 154.5C140.986 154.5 172.731 2 430 2"
								stroke="#DAF4FE"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<svg
							className={styles["chart__yellowline"]}
							xmlns="http://www.w3.org/2000/svg"
							width="432"
							height="91"
							viewBox="0 0 432 91"
							fill="none"
						>
							<path
								d="M2 49.4999C250.505 159.515 328.762 1.95142 430 1.95142"
								stroke="#F6FEE0"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</>
				) : (
					<svg
						className={styles["chart__lines--small"]}
						xmlns="http://www.w3.org/2000/svg"
						width="190"
						height="96"
						viewBox="0 0 190 96"
						fill="none"
					>
						<path
							d="M1.08594 63.907C110.099 132.648 144.429 29.196 188.839 29.196"
							stroke="#F6FEE0"
							strokeWidth="1.68137"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1.08594 94.2091C62.0558 94.2091 75.9815 1.73364 188.839 1.73364"
							stroke="#DAF4FE"
							strokeWidth="1.68137"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
=======
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div>
					<p>Jan 16</p>
					<p>$120 / 3 Sales</p>
				</div>
>>>>>>> e9488107f3a04cfed3d50d90ed6d6783c3ba293f
			</div>
		</div>
	);
}

export default HeroChart;
