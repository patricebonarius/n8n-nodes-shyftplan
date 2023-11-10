import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1SessionsRefreshCreateExecute } from './refresh/create/execute';

export async function sessionsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1SessionsRefresh') {
		responseData = await postApiV1SessionsRefreshCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
