import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1NewsfeedsCreateExecute } from './create/execute';
import { getApiV1NewsfeedsGetAllExecute } from './getAll/execute';

export async function newsfeedsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1Newsfeeds') {
		responseData = await postApiV1NewsfeedsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Newsfeeds') {
		responseData = await getApiV1NewsfeedsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
