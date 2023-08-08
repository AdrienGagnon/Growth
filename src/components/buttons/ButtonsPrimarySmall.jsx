import styles from "./Buttons.module.css";

function ButtonsPrimarySmall({ children }) {
	return (
		<button className={styles["button__primary--small"]}>{children}</button>
	);
}

export default ButtonsPrimarySmall;
