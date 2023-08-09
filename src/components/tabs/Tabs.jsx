import styles from "./Tabs.module.css";

function Tabs({ sections, activeTab, setActiveTab }) {
	return (
		<div className={styles["tabs"]}>
			{sections.map((section, index) => {
				return (
					<button
						onClick={() => setActiveTab(index)}
						data-tab={activeTab === index}
						key={section.text}
						className={styles["tabs__btn"]}
					>
						{section.text}
					</button>
				);
			})}
		</div>
	);
}

export default Tabs;
