import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1EmploymentsPositionsCreateExecute } from './create/execute';
import { getApiV1EmploymentsPositionsGetAllExecute } from './getAll/execute';
import { deleteApiV1EmploymentsPositionsIdDeleteExecute } from './delete/execute';
import { getApiV1EmploymentsPositionsIdGetExecute } from './get/execute';

export async function employments_positionsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'postApiV1EmploymentsPositions') {
		responseData = await postApiV1EmploymentsPositionsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsPositions') {
		responseData = await getApiV1EmploymentsPositionsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EmploymentsPositionsId') {
		responseData = await deleteApiV1EmploymentsPositionsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsPositionsId') {
		responseData = await getApiV1EmploymentsPositionsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
