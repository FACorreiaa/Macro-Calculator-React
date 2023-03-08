import React from 'react';
import CustomTdeeForm from '../components/forms/form';
import CustomPageTitle from '../components/page-title';
import Pagelayout from '../layout/layout';
import styles from '../styles/index.module.css';

function TdeePage() {
	return (
		<Pagelayout>
			<CustomPageTitle title="Macro calculator" />
			<div className="w-full max-w-xs ">
				<CustomTdeeForm />
			</div>
		</Pagelayout>
	);
}

export default TdeePage;
