import { IExecuteFunctions } from 'n8n-workflow';
import { putApiV2AbsenceEntitlementsUpdateExecute } from './update/execute';
import { getApiV2AbsenceEntitlementsGetAllExecute } from './getAll/execute';

export async function absence_entitlementsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'putApiV2AbsenceEntitlements') {
		responseData = await putApiV2AbsenceEntitlementsUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV2AbsenceEntitlements') {
		responseData = await getApiV2AbsenceEntitlementsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
