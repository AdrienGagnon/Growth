import styles from "./HeroCall.module.css";
import person1Big from "../../assets/hero/person-1-big.png";
import ButtonsPrimarySmall from "../../components/buttons/ButtonsPrimarySmall";

function HeroCall() {
	return (
		<div className={styles["hero__call"]}>
			<div className={styles["call__img"]}>
				<div className={styles["hero__wrapper"]}>
					<img src={person1Big} alt="person1" />
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="22"
						viewBox="0 0 18 22"
						fill="none"
					>
						<g clipPath="url(#clip0_0_1498)">
							<path
								d="M13 10C13 11.0609 12.5786 12.0783 11.8284 12.8284C11.0783 13.5786 10.0609 14 8.99998 14C7.93912 14 6.9217 13.5786 6.17155 12.8284C5.42141 12.0783 4.99998 11.0609 4.99998 10V5C4.99998 3.93913 5.42141 2.92173 6.17155 2.17159C6.9217 1.42144 7.93912 1 8.99998 1C10.0609 1 11.0783 1.42144 11.8284 2.17159C12.5786 2.92173 13 3.93913 13 5V10Z"
								stroke="#131316"
								strokeWidth="2"
								strokeMiterlimit="10"
							/>
							<path
								d="M17 10C17 12.1217 16.1571 14.1566 14.6568 15.6569C13.1566 17.1572 11.1217 18 8.99998 18C6.87825 18 4.84345 17.1572 3.34315 15.6569C1.84286 14.1566 0.999985 12.1217 0.999985 10"
								stroke="#131316"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9 18V21"
								stroke="#131316"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_0_1498">
								<rect width="18" height="22" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
			<div className={styles["call__description"]}>
				<div>
					<p className={styles["description__title"]}>Team call</p>
					<p className={styles["description__description"]}>
						You've been invited to a virtual meeting by John
					</p>
				</div>
				<p className={styles["description__date"]}>Jan 17 at 9AM</p>
				<ButtonsPrimarySmall>{"Join"}</ButtonsPrimarySmall>
			</div>
		</div>
	);
}

export default HeroCall;
