import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ShiftBreaksGetAllExecute } from './getAll/execute';

export async function shift_breaksExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1ShiftBreaks') {
		responseData = await getApiV1ShiftBreaksGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
