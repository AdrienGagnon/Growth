import styles from "./Header.module.css";
import Link from "../components/links/Link";
import Logo from "../components/titles/logo";
import ButtonSecondarySmall from "../components/buttons/ButtonSecondarySmall";
import { useEffect, useState } from "react";

function Header() {
	const [visible, setVisible] = useState(true);

	const handleResize = () => {
		setVisible(window.innerWidth > 1000);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className={styles.header}>
			<Logo color="black" />
			{visible ? (
				<>
					<nav>
						<Link link={"#"}>{"Features"}</Link>
						<Link link={"#"}>{"About us"}</Link>
						<Link link={"#"}>{"Blog"}</Link>
					</nav>
					<ButtonSecondarySmall>{"Log in"}</ButtonSecondarySmall>
				</>
			) : (
				<svg
					className={styles["header__btn-dropdown"]}
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
				>
					<rect width="40" height="40" rx="12" fill="#F5F5F5" />
					<line
						x1="10"
						y1="17"
						x2="30"
						y2="17"
						stroke="black"
						strokeWidth="2"
					/>
					<line
						x1="10"
						y1="23"
						x2="30"
						y2="23"
						stroke="black"
						strokeWidth="2"
					/>
				</svg>
			)}
		</header>
	);
}

export default Header;
