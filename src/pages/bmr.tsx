import Buttom from '../components/button';
import BmrForm from '../components/forms/form';
import HeadComponent from '../components/head';
import Input from '../components/input';
import Select from '../components/select';
import TabsComponent from '../components/tabs';
import { calculateBMR } from '../helper/bmr';
import { measureValues, PersonalData, sexOptions } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import FormPageLayout from '../layout/form-layout';
import { BmrInput, tdeeSchema } from '../types/tdeeSchema';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BmrDefaultValues = {
	age: '',
	sex: '',
	height: '',
	metric: 'Metric',
	weight: '',
};
export const bmrAtom = atom(0);
export const bmrCalculationValuesAtom = atom(BmrDefaultValues);

function BmrPage() {
	const { handleSubmit, register, formState, setValue, reset } = useZodForm({
		schema: tdeeSchema,
		defaultValues: BmrDefaultValues,
		mode: 'onChange',
		reValidateMode: 'onChange',
	});
	const [, setBmr] = useAtom(bmrAtom);
	const [, setBmrCalculationValues] = useAtom(bmrCalculationValuesAtom);

	const [activeTab, setActiveTab] = useState('Metric');
	const navigate = useNavigate();

	const handleTabClick = (event: any) => {
		const tab = event.target.value;
		setActiveTab(tab);
		setValue('metric', tab);
	};

	function onSubmitbmrDataPage(values: BmrInput) {
		const bmr = calculateBMR(values);
		setBmr(bmr);
		setBmrCalculationValues(values);
		navigate('/tdee');
	}

	return (
		<FormPageLayout>
			<HeadComponent
				title="Tdee Calculator"
				content="Calculate your basic calories inserting Age, sexm Height and Weight"
			/>
			<div className="w-full max-w-xs ">
				<BmrForm onFormSubmit={handleSubmit(onSubmitbmrDataPage)}>
					<TabsComponent
						options={measureValues}
						activeTab={activeTab}
						onClick={handleTabClick}
					/>

					<Select
						label="Sex"
						id={PersonalData.SEX}
						options={sexOptions}
						selected
						methods={register(PersonalData.SEX)}
						placeholder="Select sex"
					/>

					<Input
						label="Age"
						id={PersonalData.AGE}
						type="number"
						placeholder="Insert your age"
						methods={register(PersonalData.AGE)}
						errorMessage={formState.errors.age?.message}
					/>
					<Input
						label="Weight"
						id={PersonalData.WEIGHT}
						type="number"
						placeholder="Insert your weight"
						methods={register(PersonalData.WEIGHT)}
						errorMessage={formState.errors.weight?.message}
					/>
					<Input
						label="Height"
						id={PersonalData.HEIGHT}
						type="number"
						placeholder="Insert your height"
						methods={register(PersonalData.HEIGHT)}
						errorMessage={formState.errors.age?.message}
					/>

					<div className="flex justify-between">
						<Buttom type="submit" label="Reset" onClick={() => reset()} />

						<Buttom type="submit" label="Next" />
					</div>
				</BmrForm>
			</div>
		</FormPageLayout>
	);
}

export default BmrPage;
