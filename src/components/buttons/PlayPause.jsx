import styles from "./PlayPause.module.css";

function PlayPause({ state, setState }) {
	return (
		<button onClick={() => setState(!state)} className={styles["btn-play"]}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
			>
				<path
					d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
					fill="white"
				/>
				{state ? (
					<path
						d="M34.535 51.0312C33.8691 51.4517 33.001 50.9732 33.001 50.1857V29.8143C33.001 29.0268 33.8691 28.5483 34.535 28.9688L50.6623 39.1545C51.2836 39.5469 51.2836 40.4531 50.6623 40.8455L34.535 51.0312Z"
						fill="#131316"
					/>
				) : (
					<>
						<rect
							x="33"
							y="29"
							width="5"
							height="23"
							rx="1"
							fill="#131316"
						/>
						<rect
							x="42"
							y="29"
							width="5"
							height="23"
							rx="1"
							fill="#131316"
						/>
					</>
				)}
			</svg>
		</button>
	);
}

export default PlayPause;
