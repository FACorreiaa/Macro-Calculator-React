import { useState } from 'react';
import styles from './styles/index.module.css';

function App() {
	return (
		<div className="frappe">
			<header className={styles.header}>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer">
					Learn Solid
				</a>
				<h1 className="text-3xl font-bold underline">AH AH</h1>{' '}
				<h1 className=" text-ctp-pink">Hello world!</h1>
			</header>
		</div>
	);
}

export default App;
