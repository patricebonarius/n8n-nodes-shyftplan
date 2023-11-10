import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1ShiftRotationGroupsCreateExecute } from './create/execute';
import { getApiV1ShiftRotationGroupsGetAllExecute } from './getAll/execute';
import { postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateExecute } from './unassign_employee/create/execute';
import { postApiV1ShiftRotationGroupsIdAssignEmployeeCreateExecute } from './assign_employee/create/execute';
import { postApiV1ShiftRotationGroupsIdUnassignFromShiftsCreateExecute } from './unassign_from_shifts/create/execute';
import { postApiV1ShiftRotationGroupsIdAssignToShiftsCreateExecute } from './assign_to_shifts/create/execute';
import { deleteApiV1ShiftRotationGroupsIdDeleteExecute } from './delete/execute';
import { putApiV1ShiftRotationGroupsIdUpdateExecute } from './update/execute';

export async function shift_rotation_groupsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'postApiV1ShiftRotationGroups') {
		responseData = await postApiV1ShiftRotationGroupsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftRotationGroups') {
		responseData = await getApiV1ShiftRotationGroupsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftRotationGroupsIdUnassignEmployee') {
		responseData = await postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftRotationGroupsIdAssignEmployee') {
		responseData = await postApiV1ShiftRotationGroupsIdAssignEmployeeCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftRotationGroupsIdUnassignFromShifts') {
		responseData = await postApiV1ShiftRotationGroupsIdUnassignFromShiftsCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftRotationGroupsIdAssignToShifts') {
		responseData = await postApiV1ShiftRotationGroupsIdAssignToShiftsCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftRotationGroupsId') {
		responseData = await deleteApiV1ShiftRotationGroupsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1ShiftRotationGroupsId') {
		responseData = await putApiV1ShiftRotationGroupsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
