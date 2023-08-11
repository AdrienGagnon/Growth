import styles from "./HeroTeam.module.css";
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
				<p>Grow the number of clients and reach the 1000/day sales.</p>
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
