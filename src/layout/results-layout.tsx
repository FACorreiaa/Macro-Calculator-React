import PageTitle from '../components/page-title';
import styles from '../styles/results.module.css';
import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};
function ResultsPageLayout({ children }: LayoutProps) {
	return (
		<div className="bg-purple-800">
			<header className={styles.header}>
				<PageTitle title="Macro calculator" />
				{children}
			</header>
		</div>
	);
}

export default ResultsPageLayout;
