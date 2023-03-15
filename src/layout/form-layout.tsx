import React from 'react';
import PageTitle from '../components/page-title';
import styles from '../styles/forms.module.css';

type LayoutProps = {
	children: React.ReactNode;
};
function FormPageLayout({ children }: LayoutProps) {
	return (
		<div className="bg-purple-800">
			<header className={styles.header}>
				<PageTitle title="Macro calculator" />
				{children}
			</header>
		</div>
	);
}

export default FormPageLayout;
