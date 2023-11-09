import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1LiveStaffShiftsGetAllExecute } from './getAll/execute';

export async function live_staff_shiftsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1LiveStaffShifts') {
		responseData = await getApiV1LiveStaffShiftsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
