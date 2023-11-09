import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1EvaluationBreaksGetAllExecute } from './getAll/execute';

export async function evaluation_breaksExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1EvaluationBreaks') {
		responseData = await getApiV1EvaluationBreaksGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
