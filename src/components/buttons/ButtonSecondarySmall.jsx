import styles from "./Buttons.module.css";

function ButtonSecondarySmall({ children }) {
	return (
		<button className={styles["button__secondary--small"]}>
			{children}
		</button>
	);
}

export default ButtonSecondarySmall;
