import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
	const testimonials = useRef();

	useEffect(() => {
		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {
			pos = {
				// The current scroll
				left: testimonials.current.scrollLeft,
				top: testimonials.current.scrollTop,
				// Get the current mouse position
				x: e.clientX,
				y: e.clientY,
			};

			document.addEventListener("mousemove", mouseMoveHandler);
			document.addEventListener("mouseup", mouseUpHandler);

			testimonials.current.style.cursor = "grabbing";
		};

		const mouseMoveHandler = function (e) {
			// How far the mouse has been moved
			const dx = e.clientX - pos.x;
			const dy = e.clientY - pos.y;

			// Scroll the element
			testimonials.current.scrollTop = pos.top - dy;
			testimonials.current.scrollLeft = pos.left - dx;
		};

		const mouseUpHandler = function () {
			document.removeEventListener("mousemove", mouseMoveHandler);
			document.removeEventListener("mouseup", mouseUpHandler);

			testimonials.current.style.cursor = "grab";
			testimonials.current.style.removeProperty("user-select");
		};

		testimonials.current.addEventListener("mousedown", mouseDownHandler);
	});

	return (
		<section className={styles["testimonials"]}>
			<h2>
				Don't just take our word for it, see the success stories from
				businesses just like yours.
			</h2>
			<ul
				ref={testimonials}
				className={styles["testimonials__container"]}
			>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“Our business has seen a significant increase in
							productivity since we started using the Growth app.”
						</p>
						<footer>
							<p>Katherine Smith</p>
							<span>Capodopera</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“As a small business owner, it's important to have a
							tool that can help me keep track of everything. The
							Growth app has been a lifesaver for me, allowing me
							to manage my contacts, schedule appointments, and
							track progress all in one place..”
						</p>
						<footer>
							<p>Jonathan Lee</p>
							<span>Red Bolt</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“The dashboards and reporting feature has provided
							valuable insights into our performance and helped us
							make data-driven decisions. It's a game changer for
							us.”
						</p>
						<footer>
							<p>David Wilson</p>
							<span>Slide</span>
						</footer>
					</blockquote>
				</li>
				<li>
					<blockquote className={styles["testimonials__card"]}>
						<p>
							“Our business has seen a significant increase in
							productivity since we started using the Growth app”
						</p>
						<footer>
							<p>Katherine Smith</p>
							<span>Capodopera</span>
						</footer>
					</blockquote>
				</li>
			</ul>
		</section>
	);
}

export default Testimonials;
