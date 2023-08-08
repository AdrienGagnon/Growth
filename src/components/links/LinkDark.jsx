import styles from "./Link.module.css";

function LinkDark({ link, children }) {
	return (
		<a className={styles.linkdark} href={link}>
			{children}
		</a>
	);
}

export default LinkDark;
