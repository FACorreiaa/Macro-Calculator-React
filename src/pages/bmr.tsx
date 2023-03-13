import { useState } from 'react';
import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import HeadComponent from '../components/head';
import CustomInput from '../components/input';
import CustomSelect from '../components/select';
import CustomTabsComponent from '../components/tabs';
import { calculateBMR } from '../helper/bmr';
import { measureValues, genderOptions } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import { BmrInput, tdeeSchema } from '../types/tdeeSchema';
import { useNavigate } from 'react-router-dom';
import FormPageLayout from '../layout/form-layout';
function BmrPage() {
	const { handleSubmit, register, formState, setValue, reset } = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: '',
			height: '',
			weight: '',
			metric: 'Metric',
			gender: '',
		},
		mode: 'onChange',
		reValidateMode: 'onChange',
	});
	const [bmr, setBmr] = useState<number>();
	const [activeTab, setActiveTab] = useState('Metric');
	const navigate = useNavigate();

	const handleTabClick = (e: any) => {
		const tab = e.target.value;
		setActiveTab(tab);
		setValue('metric', tab);
	};

	function onSubmitBmrValuesPage(values: BmrInput) {
		const bmr = calculateBMR(values as BmrInput);
		navigate('/goals', {
			state: { bmr },
		});
		setBmr(bmr);
	}

	return (
		<FormPageLayout>
			<HeadComponent
				title="Tdee Calculator"
				name="Tdee Calculator"
				content="Calculate your basic calories"
			/>
			<div className="w-full max-w-xs ">
				<CustomBmrForm onFormSubmit={handleSubmit(onSubmitBmrValuesPage)}>
					<CustomTabsComponent
						options={measureValues}
						activeTab={activeTab}
						onClick={handleTabClick}
					/>

					<CustomSelect
						label="Gender"
						id="gender"
						options={genderOptions}
						selected
						methods={register('gender')}
						placeholder="Select gender"
					/>

					<CustomInput
						label="Age"
						id="age"
						type="number"
						placeholder="Insert your age"
						methods={register('age')}
						errorMessage={formState.errors.age?.message}
					/>
					<CustomInput
						label="Weight"
						id="weight"
						type="number"
						placeholder="Insert your weight"
						methods={register('weight')}
						errorMessage={formState.errors.weight?.message}
					/>
					<CustomInput
						label="Height"
						id="height"
						type="number"
						placeholder="Insert your height"
						methods={register('height')}
						errorMessage={formState.errors.age?.message}
					/>

					<div className="flex justify-between">
						<CustomButtom type="submit" label="Reset" onClick={() => reset()} />

						<CustomButtom type="submit" label="Next" />
					</div>
				</CustomBmrForm>
			</div>
		</FormPageLayout>
	);
}

export default BmrPage;
