import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1LoginCreateExecute } from './create/execute';

export async function loginExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1Login') {
		responseData = await postApiV1LoginCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
