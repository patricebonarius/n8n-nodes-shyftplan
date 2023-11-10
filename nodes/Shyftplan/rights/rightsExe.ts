import { IExecuteFunctions } from 'n8n-workflow';
import { deleteApiV1RightsLocationsPositionPaymentManageRightDeleteExecute } from './locations_position_payment_manage_right/delete/execute';
import { putApiV1RightsLocationsPositionPaymentManageRightUpdateExecute } from './locations_position_payment_manage_right/update/execute';
import { deleteApiV1RightsLocationPaymentManageRightDeleteExecute } from './location_payment_manage_right/delete/execute';
import { putApiV1RightsLocationPaymentManageRightUpdateExecute } from './location_payment_manage_right/update/execute';
import { deleteApiV1RightsLocationsPositionPaymentShowRightDeleteExecute } from './locations_position_payment_show_right/delete/execute';
import { putApiV1RightsLocationsPositionPaymentShowRightUpdateExecute } from './locations_position_payment_show_right/update/execute';
import { deleteApiV1RightsLocationPaymentShowRightDeleteExecute } from './location_payment_show_right/delete/execute';
import { putApiV1RightsLocationPaymentShowRightUpdateExecute } from './location_payment_show_right/update/execute';
import { deleteApiV1RightsLocationsPositionShiftManageRightDeleteExecute } from './locations_position_shift_manage_right/delete/execute';
import { putApiV1RightsLocationsPositionShiftManageRightUpdateExecute } from './locations_position_shift_manage_right/update/execute';
import { deleteApiV1RightsLocationShiftManageRightDeleteExecute } from './location_shift_manage_right/delete/execute';
import { putApiV1RightsLocationShiftManageRightUpdateExecute } from './location_shift_manage_right/update/execute';
import { deleteApiV1RightsLocationsPositionShiftShowRightDeleteExecute } from './locations_position_shift_show_right/delete/execute';
import { putApiV1RightsLocationsPositionShiftShowRightUpdateExecute } from './locations_position_shift_show_right/update/execute';
import { deleteApiV1RightsLocationShiftShowRightDeleteExecute } from './location_shift_show_right/delete/execute';
import { putApiV1RightsLocationShiftShowRightUpdateExecute } from './location_shift_show_right/update/execute';
import { getApiV1RightsMyGetAllExecute } from './my/getAll/execute';
import { getApiV1RightsGetAllExecute } from './getAll/execute';
import { deleteApiV1RightsIdDeleteExecute } from './delete/execute';
import { putApiV1RightsIdUpdateExecute } from './update/execute';

export async function rightsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'deleteApiV1RightsLocationsPositionPaymentManageRight') {
		responseData = await deleteApiV1RightsLocationsPositionPaymentManageRightDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationsPositionPaymentManageRight') {
		responseData = await putApiV1RightsLocationsPositionPaymentManageRightUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationPaymentManageRight') {
		responseData = await deleteApiV1RightsLocationPaymentManageRightDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationPaymentManageRight') {
		responseData = await putApiV1RightsLocationPaymentManageRightUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationsPositionPaymentShowRight') {
		responseData = await deleteApiV1RightsLocationsPositionPaymentShowRightDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationsPositionPaymentShowRight') {
		responseData = await putApiV1RightsLocationsPositionPaymentShowRightUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationPaymentShowRight') {
		responseData = await deleteApiV1RightsLocationPaymentShowRightDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationPaymentShowRight') {
		responseData = await putApiV1RightsLocationPaymentShowRightUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationsPositionShiftManageRight') {
		responseData = await deleteApiV1RightsLocationsPositionShiftManageRightDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationsPositionShiftManageRight') {
		responseData = await putApiV1RightsLocationsPositionShiftManageRightUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationShiftManageRight') {
		responseData = await deleteApiV1RightsLocationShiftManageRightDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationShiftManageRight') {
		responseData = await putApiV1RightsLocationShiftManageRightUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationsPositionShiftShowRight') {
		responseData = await deleteApiV1RightsLocationsPositionShiftShowRightDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationsPositionShiftShowRight') {
		responseData = await putApiV1RightsLocationsPositionShiftShowRightUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsLocationShiftShowRight') {
		responseData = await deleteApiV1RightsLocationShiftShowRightDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsLocationShiftShowRight') {
		responseData = await putApiV1RightsLocationShiftShowRightUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1RightsMy') {
		responseData = await getApiV1RightsMyGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Rights') {
		responseData = await getApiV1RightsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1RightsId') {
		responseData = await deleteApiV1RightsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1RightsId') {
		responseData = await putApiV1RightsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
