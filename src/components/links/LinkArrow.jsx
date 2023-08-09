import styles from "./Link.module.css";

function LinkArrow({ link, children }) {
	return (
		<a className={styles["link-arrow"]} href={link}>
			{children}
			<svg
				className={styles.arrow}
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="16"
				viewBox="0 0 13 16"
				fill="none"
			>
				<path
					d="M6.5 0.90918L6.5 14.091"
					stroke="#131316"
					strokeWidth="2"
					strokeMiterlimit="10"
				/>
				<path
					d="M0.772751 8.3623L6.50002 14.0896L12.2273 8.3623"
					stroke="#131316"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		</a>
	);
}

export default LinkArrow;
