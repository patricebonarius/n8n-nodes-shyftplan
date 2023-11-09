import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1EmploymentsPaygradesGetAllExecute } from './getAll/execute';

export async function employments_paygradesExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1EmploymentsPaygrades') {
		responseData = await getApiV1EmploymentsPaygradesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
