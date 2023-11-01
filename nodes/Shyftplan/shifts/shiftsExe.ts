import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1ShiftsShiftIdPaygradesCreateExecute } from './paygrades/create/execute';
import { getApiV1ShiftsShiftIdPaygradesGetAllExecute } from './paygrades/getAll/execute';
import { deleteApiV1ShiftsShiftIdPaygradesIdDeleteExecute } from './paygrades/delete/execute';
import { patchApiV1ShiftsIdPatchExecute } from './patch/execute';
import { putApiV1ShiftsIdUpdateExecute } from './update/execute';
import { getApiV1ShiftsIdGetExecute } from './get/execute';
import { deleteApiV1ShiftsIdDeleteExecute } from './delete/execute';
import { postApiV1ShiftsIdCloneCreateExecute } from './clone/create/execute';
import { getApiV1ShiftsIdAvailableEmploymentsGetAllExecute } from './available_employments/getAll/execute';
import { postApiV1ShiftsIdDisconnectCreateExecute } from './disconnect/create/execute';
import { getApiV1ShiftsIdEvaluationsGetAllExecute } from './evaluations/getAll/execute';
import { getApiV1ShiftsGetAllExecute } from './getAll/execute';
import { postApiV1ShiftsCreateExecute } from './create/execute';
import { postApiV1ShiftsConnectCreateExecute } from './connect/create/execute';
import { postApiV1ShiftsShiftIdShiftBreaksCreateExecute } from './shift_breaks/create/execute';
import { deleteApiV1ShiftsShiftIdShiftBreaksIdDeleteExecute } from './shift_breaks/delete/execute';
import { patchApiV1ShiftsShiftIdShiftBreaksIdPatchExecute } from './shift_breaks/patch/execute';
import { deleteApiV1ShiftsShiftIdEvaluationTagsDeleteExecute } from './evaluation_tags/delete/execute';
import { postApiV1ShiftsShiftIdEvaluationTagsCreateExecute } from './evaluation_tags/create/execute';
import { getApiV1ShiftsShiftIdEvaluationTagsGetAllExecute } from './evaluation_tags/getAll/execute';
import { putApiV2ShiftsIdPaygradesUpdateExecute } from './paygrades/update/execute';

export async function shiftsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1ShiftsShiftIdPaygrades') {
		responseData = await postApiV1ShiftsShiftIdPaygradesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsShiftIdPaygrades') {
		responseData = await getApiV1ShiftsShiftIdPaygradesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftsShiftIdPaygradesId') {
		responseData = await deleteApiV1ShiftsShiftIdPaygradesIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'patchApiV1ShiftsId') {
		responseData = await patchApiV1ShiftsIdPatchExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1ShiftsId') {
		responseData = await putApiV1ShiftsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsId') {
		responseData = await getApiV1ShiftsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftsId') {
		responseData = await deleteApiV1ShiftsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftsIdClone') {
		responseData = await postApiV1ShiftsIdCloneCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsIdAvailableEmployments') {
		responseData = await getApiV1ShiftsIdAvailableEmploymentsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftsIdDisconnect') {
		responseData = await postApiV1ShiftsIdDisconnectCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsIdEvaluations') {
		responseData = await getApiV1ShiftsIdEvaluationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Shifts') {
		responseData = await getApiV1ShiftsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Shifts') {
		responseData = await postApiV1ShiftsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftsConnect') {
		responseData = await postApiV1ShiftsConnectCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftsShiftIdShiftBreaks') {
		responseData = await postApiV1ShiftsShiftIdShiftBreaksCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftsShiftIdShiftBreaksId') {
		responseData = await deleteApiV1ShiftsShiftIdShiftBreaksIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'patchApiV1ShiftsShiftIdShiftBreaksId') {
		responseData = await patchApiV1ShiftsShiftIdShiftBreaksIdPatchExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1ShiftsShiftIdEvaluationTags') {
		responseData = await deleteApiV1ShiftsShiftIdEvaluationTagsDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1ShiftsShiftIdEvaluationTags') {
		responseData = await postApiV1ShiftsShiftIdEvaluationTagsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1ShiftsShiftIdEvaluationTags') {
		responseData = await getApiV1ShiftsShiftIdEvaluationTagsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV2ShiftsIdPaygrades') {
		responseData = await putApiV2ShiftsIdPaygradesUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
