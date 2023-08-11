import { useState } from "react";

import styles from "./Video.module.css";
import ButtonsPrimarySmall from "../components/buttons/ButtonsPrimarySmall";
import videoImage from "../assets/videoImage.png";
import PlayPause from "../components/buttons/PlayPause";

function Video() {
	const [play, setPlay] = useState(false);

	return (
		<section className={styles.video}>
			<h2>See how it works and get started in less than 2 minutes</h2>
			<div className={styles["video__container"]}>
				<img src={videoImage} alt="video" />
				<PlayPause state={play} setState={setPlay} />
			</div>
			<ButtonsPrimarySmall>{"Get started"}</ButtonsPrimarySmall>
		</section>
	);
}

export default Video;
