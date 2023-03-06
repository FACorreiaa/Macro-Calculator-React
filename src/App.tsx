import CustomForm from './components/forms/form';
import styles from './styles/index.module.css';

function App() {
	return (
		<div className="frappe">
			<header className={styles.header}>
				<h1 className="text-3xl font-bold underline text-ctp-white pb-6">
					Macro Calculator
				</h1>
				<CustomForm />
			</header>
		</div>
	);
}

export default App;
