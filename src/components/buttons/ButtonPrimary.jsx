import styles from "./Buttons.module.css";

function ButtonPrimary({ children }) {
	return <button className={styles["button__primary"]}>{children}</button>;
}

export default ButtonPrimary;
