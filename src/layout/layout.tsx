import React from 'react';
import styles from '../styles/index.module.css';

type LayoutProps = {
	children: React.ReactNode;
};
function Pagelayout({ children }: LayoutProps) {
	return (
		<div className="frappe">
			<header className={styles.header}>{children}</header>
		</div>
	);
}

export default Pagelayout;
