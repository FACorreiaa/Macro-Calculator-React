import React from 'react';
import CustomPageTitle from '../components/page-title';
import styles from '../styles/results.module.css';

type LayoutProps = {
	children: React.ReactNode;
};
function ResultsPageLayout({ children }: LayoutProps) {
	return (
		<div className="bg-purple-800">
			<header className={styles.header}>
				<CustomPageTitle title="Macro calculator" />
				{children}
			</header>
		</div>
	);
}

export default ResultsPageLayout;
