import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1QualificationsGetAllExecute } from './getAll/execute';

export async function qualificationsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1Qualifications') {
		responseData = await getApiV1QualificationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
