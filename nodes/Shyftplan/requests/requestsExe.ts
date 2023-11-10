import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1RequestsConfirmSwapShiftCreateExecute } from './confirm_swap_shift/create/execute';
import { postApiV1RequestsAcceptSwapShiftCreateExecute } from './accept_swap_shift/create/execute';
import { postApiV1RequestsSwapShiftCreateExecute } from './swap_shift/create/execute';
import { postApiV1RequestsChangeShiftCreateExecute } from './change_shift/create/execute';
import { postApiV1RequestsConfirmApplyShiftCreateExecute } from './confirm_apply_shift/create/execute';
import { postApiV1RequestsApplyShiftCreateExecute } from './apply_shift/create/execute';
import { getApiV1RequestsGetAllExecute } from './getAll/execute';
import { postApiV1RequestsJoinCreateExecute } from './join/create/execute';
import { postApiV1RequestsReplaceConfirmCreateExecute } from './replace/confirm/create/execute';
import { postApiV1RequestsReplaceAcceptCreateExecute } from './replace/accept/create/execute';
import { postApiV1RequestsReplaceCreateExecute } from './replace/create/execute';
import { deleteApiV1RequestsIdDeleteExecute } from './delete/execute';
import { getApiV1RequestsIdGetExecute } from './get/execute';

export async function requestsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1RequestsConfirmSwapShift') {
		responseData = await postApiV1RequestsConfirmSwapShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsAcceptSwapShift') {
		responseData = await postApiV1RequestsAcceptSwapShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsSwapShift') {
		responseData = await postApiV1RequestsSwapShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsChangeShift') {
		responseData = await postApiV1RequestsChangeShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsConfirmApplyShift') {
		responseData = await postApiV1RequestsConfirmApplyShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsApplyShift') {
		responseData = await postApiV1RequestsApplyShiftCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Requests') {
		responseData = await getApiV1RequestsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsJoin') {
		responseData = await postApiV1RequestsJoinCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsReplaceConfirm') {
		responseData = await postApiV1RequestsReplaceConfirmCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsReplaceAccept') {
		responseData = await postApiV1RequestsReplaceAcceptCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1RequestsReplace') {
		responseData = await postApiV1RequestsReplaceCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RequestsId') {
		responseData = await deleteApiV1RequestsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1RequestsId') {
		responseData = await getApiV1RequestsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
