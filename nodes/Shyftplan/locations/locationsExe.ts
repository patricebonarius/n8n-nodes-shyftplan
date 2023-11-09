import { IExecuteFunctions } from 'n8n-workflow';
import { putApiV1LocationsIdShiftplanPublishSettingsUpdateExecute } from './shiftplan_publish_settings/update/execute';
import { getApiV1LocationsIdShiftplanPublishSettingsGetAllExecute } from './shiftplan_publish_settings/getAll/execute';
import { postApiV1LocationsIdDestroyLocationCreateExecute } from './destroy_location/create/execute';
import { deleteApiV1LocationsIdDeleteExecute } from './delete/execute';
import { putApiV1LocationsIdUpdateExecute } from './update/execute';
import { getApiV1LocationsIdGetExecute } from './get/execute';
import { getApiV1LocationsGetAllExecute } from './getAll/execute';
import { postApiV1LocationsCreateExecute } from './create/execute';

export async function locationsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'putApiV1LocationsIdShiftplanPublishSettings') {
		responseData = await putApiV1LocationsIdShiftplanPublishSettingsUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1LocationsIdShiftplanPublishSettings') {
		responseData = await getApiV1LocationsIdShiftplanPublishSettingsGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1LocationsIdDestroyLocation') {
		responseData = await postApiV1LocationsIdDestroyLocationCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1LocationsId') {
		responseData = await deleteApiV1LocationsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1LocationsId') {
		responseData = await putApiV1LocationsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1LocationsId') {
		responseData = await getApiV1LocationsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Locations') {
		responseData = await getApiV1LocationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Locations') {
		responseData = await postApiV1LocationsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
