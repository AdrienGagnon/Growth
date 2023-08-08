import styles from "./Logo.module.css";

function Logo({ color }) {
	return (
		<div className={[styles["logo"], styles[`${color}`]].join(" ")}>
			<p>Growth</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="13"
				viewBox="0 0 17 13"
				fill="none"
			>
				<path
					d="M3.41743 9.57748L13.776 2.99977"
					stroke="#4891FF"
					stroke-width="6"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	);
}

export default Logo;
