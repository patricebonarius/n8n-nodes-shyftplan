import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ReplacedEvaluationsGetAllExecute } from './getAll/execute';

export async function replaced_evaluationsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1ReplacedEvaluations') {
		responseData = await getApiV1ReplacedEvaluationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
