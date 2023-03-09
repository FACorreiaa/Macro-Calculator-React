import React from 'react';
import CustomPageTitle from '../components/page-title';
import styles from '../styles/index.module.css';

type LayoutProps = {
	children: React.ReactNode;
};
function Pagelayout({ children }: LayoutProps) {
	return (
		<div className="frappe">
			<header className={styles.header}>
				<CustomPageTitle title="Macro calculator" />
				{children}
			</header>
		</div>
	);
}

export default Pagelayout;
