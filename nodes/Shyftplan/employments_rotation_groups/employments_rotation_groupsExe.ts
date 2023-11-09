import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1EmploymentsRotationGroupsGetAllExecute } from './getAll/execute';
import { postApiV1EmploymentsRotationGroupsCreateExecute } from './create/execute';
import { deleteApiV1EmploymentsRotationGroupsIdDeleteExecute } from './delete/execute';
import { putApiV1EmploymentsRotationGroupsIdUpdateExecute } from './update/execute';

export async function employments_rotation_groupsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1EmploymentsRotationGroups') {
		responseData = await getApiV1EmploymentsRotationGroupsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EmploymentsRotationGroups') {
		responseData = await postApiV1EmploymentsRotationGroupsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EmploymentsRotationGroupsId') {
		responseData = await deleteApiV1EmploymentsRotationGroupsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1EmploymentsRotationGroupsId') {
		responseData = await putApiV1EmploymentsRotationGroupsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
