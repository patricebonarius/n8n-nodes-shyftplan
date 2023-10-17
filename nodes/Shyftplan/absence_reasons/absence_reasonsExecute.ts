import { IExecuteFunctions } from 'n8n-workflow';
import { absence_reasonsCreateExecute } from './create/execute';
import { absence_reasonsbyidDeleteExecute } from './delete/execute';
import { absence_reasonsbyidGetExecute } from './get/execute';
import { absence_reasonsGetAllExecute } from './getAll/execute';
import { absence_reasonsbyidUpdateExecute } from './update/execute';

export async function absence_reasonsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;
	// create
	if (operation === 'absence_reasons_post') {
		responseData = await absence_reasonsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// delete
	if (operation === 'absence_reasonsById_delete') {
		responseData = await absence_reasonsbyidDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// getById
	if (operation === 'absence_reasonsbyid_get') {
		responseData = await absence_reasonsbyidGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// get All
	if (operation === 'absence_reasons_getAll') {
		responseData = await absence_reasonsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// putById
	if (operation === 'absence_reasonsbyid_put') {
		responseData = await absence_reasonsbyidUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
