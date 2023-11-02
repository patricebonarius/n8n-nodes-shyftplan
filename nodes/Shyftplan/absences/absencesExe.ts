import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1AbsencesEmploymentsGetAllExecute } from './employments/getAll/execute';
import { getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllExecute } from './employments/absence_info/getAll/execute';
import { getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllExecute } from './employments/carry_over_info/getAll/execute';
import { getApiV1AbsencesEmploymentsIdGetExecute } from './employments/get/execute';
import { postApiV1AbsencesIdWithdrawCreateExecute } from './withdraw/create/execute';
import { putApiV1AbsencesIdUpdateExecute } from './update/execute';
import { deleteApiV1AbsencesIdDeleteExecute } from './delete/execute';
import { getApiV1AbsencesIdGetExecute } from './get/execute';
import { postApiV1AbsencesIdDeclineCreateExecute } from './decline/create/execute';
import { postApiV1AbsencesIdApproveCreateExecute } from './approve/create/execute';
import { postApiV1AbsencesIdAttachmentCreateExecute } from './attachment/create/execute';
import { getApiV1AbsencesGetAllExecute } from './getAll/execute';
import { postApiV1AbsencesCreateExecute } from './create/execute';

export async function absencesExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1AbsencesEmployments') {
		responseData = await getApiV1AbsencesEmploymentsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsencesEmploymentsIdAbsenceInfo') {
		responseData = await getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsencesEmploymentsIdCarryOverInfo') {
		responseData = await getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsencesEmploymentsId') {
		responseData = await getApiV1AbsencesEmploymentsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1AbsencesIdWithdraw') {
		responseData = await postApiV1AbsencesIdWithdrawCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1AbsencesId') {
		responseData = await putApiV1AbsencesIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1AbsencesId') {
		responseData = await deleteApiV1AbsencesIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1AbsencesId') {
		responseData = await getApiV1AbsencesIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1AbsencesIdDecline') {
		responseData = await postApiV1AbsencesIdDeclineCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1AbsencesIdApprove') {
		responseData = await postApiV1AbsencesIdApproveCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1AbsencesIdAttachment') {
		responseData = await postApiV1AbsencesIdAttachmentCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Absences') {
		responseData = await getApiV1AbsencesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Absences') {
		responseData = await postApiV1AbsencesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
