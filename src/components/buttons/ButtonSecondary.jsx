import styles from "./Buttons.module.css";

function ButtonSecondary({ children }) {
	return (
		<button className={styles["button__secondary"]}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="23"
				viewBox="0 0 18 23"
				fill="none"
			>
				<g clip-path="url(#clip0_0_1621)">
					<path
						d="M9 17.5C13.4183 17.5 17 13.9183 17 9.5C17 5.08172 13.4183 1.5 9 1.5C4.58172 1.5 1 5.08172 1 9.5C1 13.9183 4.58172 17.5 9 17.5Z"
						stroke="#131316"
						stroke-width="2"
						stroke-miterlimit="10"
					/>
					<path
						d="M4 21.5H14"
						stroke="#131316"
						stroke-width="2"
						stroke-miterlimit="10"
					/>
					<path
						d="M9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z"
						stroke="#131316"
						stroke-width="2"
						stroke-miterlimit="10"
					/>
				</g>
				<defs>
					<clipPath id="clip0_0_1621">
						<rect
							width="18"
							height="22"
							fill="white"
							transform="translate(0 0.5)"
						/>
					</clipPath>
				</defs>
			</svg>
			{children}
		</button>
	);
}

export default ButtonSecondary;
