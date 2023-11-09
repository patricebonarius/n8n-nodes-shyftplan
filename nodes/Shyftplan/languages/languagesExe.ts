import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1LanguagesGetAllExecute } from './getAll/execute';

export async function languagesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1Languages') {
		responseData = await getApiV1LanguagesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
