import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ShiftAssignmentGroupsGetAllExecute } from './getAll/execute';

export async function shift_assignment_groupsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1ShiftAssignmentGroups') {
		responseData = await getApiV1ShiftAssignmentGroupsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
