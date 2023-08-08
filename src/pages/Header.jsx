import styles from "./Header.module.css";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import Link from "../components/links/Link";
import Logo from "../components/titles/logo";

function Header() {
	return (
		<header>
			<Logo color="black" />
			<nav>
				<Link link={"#"}>{"Features"}</Link>
				<Link link={"#"}>{"About us"}</Link>
				<Link link={"#"}>{"Blog"}</Link>
			</nav>
			<ButtonSecondary>{"Log in"}</ButtonSecondary>
		</header>
	);
}

export default Header;
