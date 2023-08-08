import styles from "./Link.module.css";

function Link({ link, children }) {
	return (
		<a className={styles.link} href={link}>
			{children}
		</a>
	);
}

export default Link;
