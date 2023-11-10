import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1TagsCreateExecute } from './create/execute';
import { getApiV1TagsGetAllExecute } from './getAll/execute';
import { putApiV1TagsIdUpdateExecute } from './update/execute';
import { deleteApiV1TagsIdDeleteExecute } from './delete/execute';
import { getApiV1TagsIdGetExecute } from './get/execute';
import { putApiV1TagsIdRemoveFromShiftUpdateExecute } from './remove_from_shift/update/execute';
import { putApiV1TagsIdAddToShiftUpdateExecute } from './add_to_shift/update/execute';

export async function tagsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1Tags') {
		responseData = await postApiV1TagsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Tags') {
		responseData = await getApiV1TagsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1TagsId') {
		responseData = await putApiV1TagsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1TagsId') {
		responseData = await deleteApiV1TagsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1TagsId') {
		responseData = await getApiV1TagsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1TagsIdRemoveFromShift') {
		responseData = await putApiV1TagsIdRemoveFromShiftUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1TagsIdAddToShift') {
		responseData = await putApiV1TagsIdAddToShiftUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
