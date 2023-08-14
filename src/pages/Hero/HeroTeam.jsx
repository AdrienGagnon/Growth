import styles from "./HeroTeam.module.css";
<<<<<<< HEAD
=======
import person1Big from "../../assets/hero/person-1-big.png";
>>>>>>> e9488107f3a04cfed3d50d90ed6d6783c3ba293f
import person1Small from "../../assets/hero/person-1-small.png";
import person2Small from "../../assets/hero/person-2-small.png";
import person3Small from "../../assets/hero/person-3-small.png";

function HeroTeam() {
	return (
		<div className={styles["hero__team"]}>
			<div className={styles["team__title"]}>
				<h2>
					Team <br /> Capodopera
				</h2>
<<<<<<< HEAD
				<p>Grow the number of clients and reach the 1000/day sales.</p>
=======
				<p>
					Grow the number of clients and <br /> reach the 1000/day
					sales.
				</p>
>>>>>>> e9488107f3a04cfed3d50d90ed6d6783c3ba293f
				<div className={styles["team__separator"]}></div>
				<div className={styles["team__imgs"]}>
					<img
						className={styles["person1"]}
						src={person1Small}
						alt="person1"
					/>
					<img
						className={styles["person2"]}
						src={person2Small}
						alt="person2"
					/>
					<img
						className={styles["person3"]}
						src={person3Small}
						alt="person3"
					/>
				</div>
			</div>
			<div className={styles["team__agenda"]}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div
					className={[
						styles["agenda__item"],
						styles["agenda__item--1"],
					].join(" ")}
				>
					<div className={styles["agenda__imgs"]}>
						<img
							className={styles["person3"]}
							src={person3Small}
							alt="person3"
						/>
					</div>
					<p>Research pricing</p>
				</div>
				<div
					className={[
						styles["agenda__item"],
						styles["agenda__item--2"],
					].join(" ")}
				>
					<div className={styles["agenda__imgs"]}>
						<img
							className={styles["person2"]}
							src={person2Small}
							alt="person2"
						/>
						<img
							className={styles["person3"]}
							src={person3Small}
							alt="person3"
						/>
					</div>
					<p>Client follow-up</p>
				</div>
				<div
					className={[
						styles["agenda__item"],
						styles["agenda__item--3"],
					].join(" ")}
				>
					<div className={styles["agenda__imgs"]}>
						<img
							className={styles["person1"]}
							src={person1Small}
							alt="person1"
						/>
						<img
							className={styles["person2"]}
							src={person2Small}
							alt="person2"
						/>
						<img
							className={styles["person3"]}
							src={person3Small}
							alt="person3"
						/>
					</div>
					<p>Team call</p>
				</div>
			</div>
		</div>
	);
}

export default HeroTeam;
