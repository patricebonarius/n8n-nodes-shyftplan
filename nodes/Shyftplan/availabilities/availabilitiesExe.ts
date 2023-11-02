import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1AvailabilitiesGetAllExecute } from './getAll/execute';
import { postApiV1AvailabilitiesCreateExecute } from './create/execute';
import { deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteExecute } from './exceptions/delete/execute';
import { getApiV1AvailabilitiesExceptionsExceptionIdGetExecute } from './exceptions/get/execute';
import { deleteApiV1AvailabilitiesAvailabilityIdDeleteExecute } from './delete/execute';
import { putApiV1AvailabilitiesAvailabilityIdUpdateExecute } from './update/execute';
import { getApiV1AvailabilitiesAvailabilityIdGetExecute } from './get/execute';
import { getApiV1AvailabilitiesAvailabilityIdExceptionsGetAllExecute } from './exceptions/getAll/execute';
import { postApiV1AvailabilitiesAvailabilityIdExceptionsCreateExecute } from './exceptions/create/execute';

export async function availabilitiesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1Availabilities') {
		responseData = await getApiV1AvailabilitiesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Availabilities') {
		responseData = await postApiV1AvailabilitiesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1AvailabilitiesExceptionsExceptionId') {
		responseData = await deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AvailabilitiesExceptionsExceptionId') {
		responseData = await getApiV1AvailabilitiesExceptionsExceptionIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1AvailabilitiesAvailabilityId') {
		responseData = await deleteApiV1AvailabilitiesAvailabilityIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1AvailabilitiesAvailabilityId') {
		responseData = await putApiV1AvailabilitiesAvailabilityIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AvailabilitiesAvailabilityId') {
		responseData = await getApiV1AvailabilitiesAvailabilityIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AvailabilitiesAvailabilityIdExceptions') {
		responseData = await getApiV1AvailabilitiesAvailabilityIdExceptionsGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1AvailabilitiesAvailabilityIdExceptions') {
		responseData = await postApiV1AvailabilitiesAvailabilityIdExceptionsCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
}
