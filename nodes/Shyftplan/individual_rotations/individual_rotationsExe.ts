import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1IndividualRotationsCreateExecute } from './create/execute';
import { getApiV1IndividualRotationsGetAllExecute } from './getAll/execute';
import { deleteApiV1IndividualRotationsIdDeleteExecute } from './delete/execute';
import { putApiV1IndividualRotationsIdUpdateExecute } from './update/execute';
import { getApiV1IndividualRotationsIdGetExecute } from './get/execute';

export async function individual_rotationsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'postApiV1IndividualRotations') {
		responseData = await postApiV1IndividualRotationsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1IndividualRotations') {
		responseData = await getApiV1IndividualRotationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1IndividualRotationsId') {
		responseData = await deleteApiV1IndividualRotationsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1IndividualRotationsId') {
		responseData = await putApiV1IndividualRotationsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1IndividualRotationsId') {
		responseData = await getApiV1IndividualRotationsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
