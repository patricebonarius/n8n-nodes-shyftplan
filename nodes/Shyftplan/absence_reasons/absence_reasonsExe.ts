import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1AbsenceReasonsCreateExecute } from './create/execute';
import { getApiV1AbsenceReasonsGetAllExecute } from './getAll/execute';
import { getApiV1AbsenceReasonsStatsGetAllExecute } from './stats/getAll/execute';
import { deleteApiV1AbsenceReasonsIdDeleteExecute } from './delete/execute';
import { putApiV1AbsenceReasonsIdUpdateExecute } from './update/execute';
import { getApiV1AbsenceReasonsIdGetExecute } from './get/execute';

export async function absence_reasonsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'postApiV1AbsenceReasons') {
		responseData = await postApiV1AbsenceReasonsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsenceReasons') {
		responseData = await getApiV1AbsenceReasonsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsenceReasonsStats') {
		responseData = await getApiV1AbsenceReasonsStatsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1AbsenceReasonsId') {
		responseData = await deleteApiV1AbsenceReasonsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1AbsenceReasonsId') {
		responseData = await putApiV1AbsenceReasonsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsenceReasonsId') {
		responseData = await getApiV1AbsenceReasonsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
