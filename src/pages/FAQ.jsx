import { useState } from "react";
import Tabs from "../components/tabs/tabs";
import styles from "./FAQ.module.css";

function FAQ() {
	const [activeTab, setActiveTab] = useState(0);
	const [activeQuestion, setActiveQuestion] = useState(0);

	const faq = [
		{
			tags: "Getting started",
			question:
				"How does the contact management feature help me keep track of clients and partners?",
			answer: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.",
		},
		{
			tags: "Getting started",
			question:
				"Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?",
			answer: "Yes, Growth lets you customize the dashboards and reporting feature so that can easily see what is important to you.",
		},
		{
			tags: "Getting started",
			question:
				"How does the task management feature help me delegate tasks to my team and track progress?",
			answer: "Our task manager removes all the burden of keeping track of a mulitude of data all over the place and instead centralizes it all in one place, making it convienient and effective to plan your course of action.",
		},
		{
			tags: "Getting started",
			question:
				"Can I collaborate with my team in real-time using all tools?",
			answer: "Sure! You can send a invite to your team members and start working on a project together on this plateform.",
		},
		{
			tags: "Getting started",
			question: "Is the app available on all devices?",
			answer: "This app is currently available on all major devices including iOS and Android.",
		},
		{
			tags: "Getting started",
			question:
				"How does the app help me stay compliant when working with freelancers and contractors?",
			answer: "Growth allows easy access to all the data you need to evaluate your progress and the contribution of freelancers and contractors.",
		},
	];

	return (
		<section className={styles.FAQ}>
			<h2 className={styles["FAQ__title"]}>Frequently asked questions</h2>
			<Tabs
				sections={[
					{ text: "All" },
					{ text: "Getting started" },
					{ text: "Pricing" },
				]}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<div className={styles["FAQ__questions"]}>
				{faq.map((question, index) => {
					return (
						<div
							key={question.question}
							onClick={() => setActiveQuestion(index)}
							className={styles["FAQ__container"]}
							data-active-question={activeQuestion === index}
						>
							<div className={styles["FAQ__question__container"]}>
								<p className={styles.question}>
									{question.question}
								</p>
								<svg
									className={styles["FAQ__question__x"]}
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
								>
									<g clipPath="url(#clip0_0_889)">
										<path
											d="M20.3 10.15H0"
											stroke="#131316"
											strokeWidth="2"
											strokeMiterlimit="10"
										/>
										<path
											d="M10.1484 20.3V0"
											stroke="#131316"
											strokeWidth="2"
											strokeMiterlimit="10"
										/>
									</g>
									<defs>
										<clipPath id="clip0_0_889">
											<rect
												width="20.3"
												height="20.3"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className={styles["FAQ__wrapper"]}>
								<div
									className={styles["FAQ__answer__container"]}
								>
									<p className={styles.answer}>
										{question.answer}
									</p>
									<div
										className={
											styles["FAQ__question__separator"]
										}
									></div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default FAQ;
