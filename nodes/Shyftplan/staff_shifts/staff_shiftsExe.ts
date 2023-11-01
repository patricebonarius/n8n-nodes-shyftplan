import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1StaffShiftsReplaceCreateExecute } from './replace/create/execute';
import { postApiV1StaffShiftsMoveStaffCreateExecute } from './move_staff/create/execute';
import { getApiV1StaffShiftsGetAllExecute } from './getAll/execute';
import { postApiV1StaffShiftsCreateExecute } from './create/execute';
import { getApiV1StaffShiftsIdGetExecute } from './get/execute';
import { deleteApiV1StaffShiftsIdDeleteExecute } from './delete/execute';

export async function staff_shiftsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1StaffShiftsReplace') {
		responseData = await postApiV1StaffShiftsReplaceCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1StaffShiftsMoveStaff') {
		responseData = await postApiV1StaffShiftsMoveStaffCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1StaffShifts') {
		responseData = await getApiV1StaffShiftsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1StaffShifts') {
		responseData = await postApiV1StaffShiftsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1StaffShiftsId') {
		responseData = await getApiV1StaffShiftsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1StaffShiftsId') {
		responseData = await deleteApiV1StaffShiftsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
