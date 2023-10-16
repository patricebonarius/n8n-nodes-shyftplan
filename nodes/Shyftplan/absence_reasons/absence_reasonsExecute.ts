import { IExecuteFunctions } from 'n8n-workflow';
import { absence_reasonsGetExecute } from './get/execute';
import { absence_reasonsCreateExecute } from './create/execute';

export async function absence_reasonsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	// get All
	if (operation === 'absence_reasons_get') {
		// Get inputs
		responseData = await absence_reasonsGetExecute(node, operation, i);
		return responseData;
	}

	// create
	if (operation === 'absence_reasons_post') {
		responseData = await absence_reasonsCreateExecute(node, operation, i);
		return responseData;
	}
}
