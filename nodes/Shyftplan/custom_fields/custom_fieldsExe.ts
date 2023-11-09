import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1CustomFieldsCreateExecute } from './create/execute';
import { getApiV1CustomFieldsGetAllExecute } from './getAll/execute';
import { deleteApiV1CustomFieldsIdDeleteExecute } from './delete/execute';
import { putApiV1CustomFieldsIdUpdateExecute } from './update/execute';
import { getApiV1CustomFieldsIdGetExecute } from './get/execute';

export async function custom_fieldsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1CustomFields') {
		responseData = await postApiV1CustomFieldsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1CustomFields') {
		responseData = await getApiV1CustomFieldsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1CustomFieldsId') {
		responseData = await deleteApiV1CustomFieldsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1CustomFieldsId') {
		responseData = await putApiV1CustomFieldsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1CustomFieldsId') {
		responseData = await getApiV1CustomFieldsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
