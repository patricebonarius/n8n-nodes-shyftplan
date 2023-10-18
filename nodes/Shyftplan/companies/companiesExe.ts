import { IExecuteFunctions } from 'n8n-workflow';
import { companiesGetAllExecute } from './getAll/execute';
import { companiesCreateExecute } from './create/execute';
import { companiesByIdGetExecute } from './get/execute';
export async function companiesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;
	if (operation === 'companies_getAll') {
		responseData = await companiesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'companies_create') {
		responseData = await companiesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'companiesById_get') {
		responseData = await companiesByIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
