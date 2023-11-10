import { IExecuteFunctions } from 'n8n-workflow';
import { deleteApiV1StaffShiftsTagsDeleteExecute } from './delete/execute';
import { postApiV1StaffShiftsTagsCreateExecute } from './create/execute';
import { getApiV1StaffShiftsTagsGetAllExecute } from './getAll/execute';
import { getApiV1StaffShiftsTagsIdGetExecute } from './get/execute';

export async function staff_shifts_tagsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'deleteApiV1StaffShiftsTags') {
		responseData = await deleteApiV1StaffShiftsTagsDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1StaffShiftsTags') {
		responseData = await postApiV1StaffShiftsTagsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1StaffShiftsTags') {
		responseData = await getApiV1StaffShiftsTagsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1StaffShiftsTagsId') {
		responseData = await getApiV1StaffShiftsTagsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
