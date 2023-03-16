import React from 'react';
import PageTitle from '../components/page-title';
import styles from '../styles/results.module.css';

type LayoutProps = {
	children: React.ReactNode;
};
function ResultsPageLayout({ children }: LayoutProps) {
	return (
		<div className="bg-white">
			<header className={styles.header}>
				<PageTitle title="Macro calculator" />
				{children}
			</header>
		</div>
	);
}

export default ResultsPageLayout;
