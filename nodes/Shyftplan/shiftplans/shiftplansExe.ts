import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ShiftplansGetAllExecute } from './getAll/execute';
import { postApiV1ShiftplansCreateExecute } from './create/execute';
import { postApiV1ShiftplansAssignEmploymentsToOpenShiftsCreateExecute } from './assign_employments_to_open_shifts/create/execute';
import { getApiV1ShiftplansIdGetExecute } from './get/execute';
import { deleteApiV1ShiftplansIdDeleteExecute } from './delete/execute';
import { patchApiV1ShiftplansIdPatchExecute } from './patch/execute';
import { postApiV1ShiftplansIdAssignRotationCreateExecute } from './assign_rotation/create/execute';
import { postApiV1ShiftplansIdPublishCreateExecute } from './publish/create/execute';
import { getApiV1ShiftplansShiftplanIdNotificationsGetAllExecute } from './notifications/getAll/execute';
import { postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateExecute } from './notifications_messages/create/execute';
import { postApiV1ShiftplansShiftplanIdMessagesCreateExecute } from './messages/create/execute';
import { postApiV1ShiftplansShiftplanIdCopyToExistingCreateExecute } from './copy_to_existing/create/execute';
import { postApiV1ShiftplansShiftplanIdCopyCreateExecute } from './copy/create/execute';
import { postApiV1ShiftplansShiftplanIdDayNotesCreateExecute } from './day_notes/create/execute';
import { getApiV1ShiftplansShiftplanIdDayNotesGetAllExecute } from './day_notes/getAll/execute';
import { deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteExecute } from './day_notes/delete/execute';
import { putApiV1ShiftplansShiftplanIdDayNotesIdUpdateExecute } from './day_notes/update/execute';

export async function shiftplansExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1Shiftplans') {
		responseData = await getApiV1ShiftplansGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Shiftplans') {
		responseData = await postApiV1ShiftplansCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansAssignEmploymentsToOpenShifts') {
		responseData = await postApiV1ShiftplansAssignEmploymentsToOpenShiftsCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftplansId') {
		responseData = await getApiV1ShiftplansIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftplansId') {
		responseData = await deleteApiV1ShiftplansIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'patchApiV1ShiftplansId') {
		responseData = await patchApiV1ShiftplansIdPatchExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansIdAssignRotation') {
		responseData = await postApiV1ShiftplansIdAssignRotationCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansIdPublish') {
		responseData = await postApiV1ShiftplansIdPublishCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftplansShiftplanIdNotifications') {
		responseData = await getApiV1ShiftplansShiftplanIdNotificationsGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansShiftplanIdNotificationsMessages') {
		responseData = await postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansShiftplanIdMessages') {
		responseData = await postApiV1ShiftplansShiftplanIdMessagesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansShiftplanIdCopyToExisting') {
		responseData = await postApiV1ShiftplansShiftplanIdCopyToExistingCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansShiftplanIdCopy') {
		responseData = await postApiV1ShiftplansShiftplanIdCopyCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftplansShiftplanIdDayNotes') {
		responseData = await postApiV1ShiftplansShiftplanIdDayNotesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftplansShiftplanIdDayNotes') {
		responseData = await getApiV1ShiftplansShiftplanIdDayNotesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftplansShiftplanIdDayNotesId') {
		responseData = await deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1ShiftplansShiftplanIdDayNotesId') {
		responseData = await putApiV1ShiftplansShiftplanIdDayNotesIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
