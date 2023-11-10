import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ShiftsTagsGetAllExecute } from './getAll/execute';
import { getApiV1ShiftsTagsIdGetExecute } from './get/execute';

export async function shifts_tagsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1ShiftsTags') {
		responseData = await getApiV1ShiftsTagsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsTagsId') {
		responseData = await getApiV1ShiftsTagsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
