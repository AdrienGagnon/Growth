import styles from "./Footer.module.css";
import Form from "../components/form/Form";
import Logo from "../components/titles/Logo";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import LinkDark from "../components/links/LinkDark";

function Footer() {
	return (
		<footer className={styles["footer"]}>
			<Logo color={"white"} />
			<div className={styles["footer__main"]}>
				<div className={styles["footer__main__newsletter"]}>
					<h4>Subscribe to newsletter</h4>
					<p>
						Subscribe now to receive tips on how to take your
						business to the next level.
					</p>
					<Form />
				</div>
				<div className={styles["footer__main__links"]}>
					<h5>Company</h5>
					<LinkDark>About</LinkDark>
					<LinkDark>Our Process</LinkDark>
					<LinkDark>Join our team</LinkDark>
				</div>
				<div className={styles["footer__main__links"]}>
					<h5>Resources</h5>
					<LinkDark>News</LinkDark>
					<LinkDark>Research</LinkDark>
					<LinkDark>Recent Projects</LinkDark>
				</div>
				<div className={styles["footer__main__links"]}>
					<h5>Contact</h5>
					<LinkDark>hello@growthapp.com</LinkDark>
				</div>
			</div>
			<div className={styles["footer__socials"]}>
				<a href="#">
					<img src={LinkedIn} alt="LinkedIn" />
				</a>
				<a href="#">
					<img src={Twitter} alt="Twitter" />
				</a>
			</div>
			<p className={styles["footer__copyright"]}>
				© 2023 Growth. All rights reserved
			</p>
		</footer>
	);
}

export default Footer;
