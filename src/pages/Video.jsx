import styles from "./Video.module.css";
import ButtonsPrimarySmall from "../components/buttons/ButtonsPrimarySmall";
import videoImage from "../assets/videoImage.png";

function Video() {
	return (
		<div className={styles.video}>
			<h2>See how it works and get started in less than 2 minutes</h2>
			<img src={videoImage} alt="" />
			<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
		</div>
	);
}

export default Video;
