import { IExecuteFunctions } from 'n8n-workflow';
import { paygrade_typesByIdGetExecute } from './get/execute';
import { paygrade_typesGetAllExecute } from './getAll/execute';
export async function paygrade_typesExe(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;
	if (operation === 'paygrade_typesById_get') {
		responseData = await paygrade_typesByIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'paygrade_types_getAll') {
		responseData = await paygrade_typesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
