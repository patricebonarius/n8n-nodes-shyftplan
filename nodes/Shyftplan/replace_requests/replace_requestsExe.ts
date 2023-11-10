import { IExecuteFunctions } from 'n8n-workflow';
import { deleteApiV1ReplaceRequestsIdDeleteExecute } from './delete/execute';

export async function replace_requestsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'deleteApiV1ReplaceRequestsId') {
		responseData = await deleteApiV1ReplaceRequestsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
