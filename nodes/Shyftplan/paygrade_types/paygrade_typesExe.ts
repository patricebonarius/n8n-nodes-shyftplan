import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1PaygradeTypesGetAllExecute } from './getAll/execute';
import { getApiV1PaygradeTypesIdGetExecute } from './get/execute';

export async function paygrade_typesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1PaygradeTypes') {
		responseData = await getApiV1PaygradeTypesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PaygradeTypesId') {
		responseData = await getApiV1PaygradeTypesIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
