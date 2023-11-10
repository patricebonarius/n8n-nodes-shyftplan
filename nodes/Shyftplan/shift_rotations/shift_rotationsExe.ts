import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1ShiftRotationsCreateExecute } from './create/execute';
import { getApiV1ShiftRotationsGetAllExecute } from './getAll/execute';
import { postApiV1ShiftRotationsIdShiftplanCreateExecute } from './shiftplan/create/execute';
import { deleteApiV1ShiftRotationsIdDeleteExecute } from './delete/execute';
import { getApiV1ShiftRotationsIdGetExecute } from './get/execute';
import { putApiV1ShiftRotationsIdUpdateExecute } from './update/execute';

export async function shift_rotationsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'postApiV1ShiftRotations') {
		responseData = await postApiV1ShiftRotationsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftRotations') {
		responseData = await getApiV1ShiftRotationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftRotationsIdShiftplan') {
		responseData = await postApiV1ShiftRotationsIdShiftplanCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftRotationsId') {
		responseData = await deleteApiV1ShiftRotationsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftRotationsId') {
		responseData = await getApiV1ShiftRotationsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1ShiftRotationsId') {
		responseData = await putApiV1ShiftRotationsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
