import styles from "./Header.module.css";
import Link from "../components/links/Link";
import Logo from "../components/titles/logo";
import ButtonSecondarySmall from "../components/buttons/ButtonSecondarySmall";

function Header() {
	return (
		<header className={styles.header}>
			<Logo color="black" />
			<nav>
				<Link link={"#"}>{"Features"}</Link>
				<Link link={"#"}>{"About us"}</Link>
				<Link link={"#"}>{"Blog"}</Link>
			</nav>
			<ButtonSecondarySmall>{"Log in"}</ButtonSecondarySmall>
		</header>
	);
}

export default Header;
