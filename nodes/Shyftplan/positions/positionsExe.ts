import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1PositionsCreateExecute } from './create/execute';
import { getApiV1PositionsGetAllExecute } from './getAll/execute';
import { postApiV1PositionsIdDestroyPositionCreateExecute } from './destroy_position/create/execute';
import { deleteApiV1PositionsIdDeleteExecute } from './delete/execute';
import { putApiV1PositionsIdUpdateExecute } from './update/execute';
import { getApiV1PositionsIdGetExecute } from './get/execute';
import { putApiV1PositionsIdRemoveEmploymentUpdateExecute } from './remove_employment/update/execute';
import { putApiV1PositionsIdAddEmploymentUpdateExecute } from './add_employment/update/execute';

export async function positionsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1Positions') {
		responseData = await postApiV1PositionsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Positions') {
		responseData = await getApiV1PositionsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1PositionsIdDestroyPosition') {
		responseData = await postApiV1PositionsIdDestroyPositionCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1PositionsId') {
		responseData = await deleteApiV1PositionsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1PositionsId') {
		responseData = await putApiV1PositionsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PositionsId') {
		responseData = await getApiV1PositionsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1PositionsIdRemoveEmployment') {
		responseData = await putApiV1PositionsIdRemoveEmploymentUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1PositionsIdAddEmployment') {
		responseData = await putApiV1PositionsIdAddEmploymentUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
