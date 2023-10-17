import { IExecuteFunctions } from 'n8n-workflow';
import { locationsCreateExecute } from './create/execute';
import { locationsbyidDeleteExecute } from './delete/execute';
import { locationsbyidGetExecute } from './get/execute';
import { locationsGetAllExecute } from './getAll/execute';
import { locationsbyidUpdateExecute } from './update/execute';

export async function locationsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;
	// create
	if (operation === 'locations_create') {
		responseData = await locationsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// delete
	if (operation === 'locationsById_delete') {
		responseData = await locationsbyidDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// getById
	if (operation === 'locationsById_get') {
		responseData = await locationsbyidGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// get All
	if (operation === 'locations_getAll') {
		responseData = await locationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}

	// putById
	if (operation === 'locationsById_update') {
		responseData = await locationsbyidUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
