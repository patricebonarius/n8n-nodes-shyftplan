import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1PayslipsCreateExecute } from './create/execute';
import { getApiV1PayslipsGetAllExecute } from './getAll/execute';

export async function payslipsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1Payslips') {
		responseData = await postApiV1PayslipsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Payslips') {
		responseData = await getApiV1PayslipsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
