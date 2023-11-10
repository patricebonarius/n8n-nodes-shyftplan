import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1SpecialDatesCreateExecute } from './create/execute';
import { getApiV1SpecialDatesGetAllExecute } from './getAll/execute';
import { deleteApiV1SpecialDatesIdDeleteExecute } from './delete/execute';
import { putApiV1SpecialDatesIdUpdateExecute } from './update/execute';
import { getApiV1SpecialDatesIdGetExecute } from './get/execute';

export async function special_datesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1SpecialDates') {
		responseData = await postApiV1SpecialDatesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1SpecialDates') {
		responseData = await getApiV1SpecialDatesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1SpecialDatesId') {
		responseData = await deleteApiV1SpecialDatesIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1SpecialDatesId') {
		responseData = await putApiV1SpecialDatesIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1SpecialDatesId') {
		responseData = await getApiV1SpecialDatesIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
