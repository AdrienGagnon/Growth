import ButtonsPrimarySmall from "../buttons/ButtonsPrimarySmall";
import styles from "./Form.module.css";

function Form() {
	return (
		<div className={styles["form"]}>
			<input type="text" placeholder="Enter your email" />
			<ButtonsPrimarySmall>{"Subscribe"}</ButtonsPrimarySmall>
		</div>
	);
}

export default Form;
