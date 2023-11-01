import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV2EmploymentsCreateExecute } from './create/execute';
import { getApiV1EmploymentsGetAllExecute } from './getAll/execute';
import { getApiV1EmploymentsInfoGetAllExecute } from './info/getAll/execute';
import { getApiV1EmploymentsPotentialConflictsGetAllExecute } from './potential_conflicts/getAll/execute';
import { getApiV1EmploymentsMyGetAllExecute } from './my/getAll/execute';
import { getApiV1EmploymentsIdNotificationsGetAllExecute } from './notifications/getAll/execute';
import { getApiV1EmploymentsIdAvailabilitiesGetAllExecute } from './availabilities/getAll/execute';
import { deleteApiV1EmploymentsIdDeleteExecute } from './delete/execute';
import { getApiV1EmploymentsIdGetExecute } from './get/execute';
import { postApiV1EmploymentsIdDestroyEmploymentCreateExecute } from './destroy_employment/create/execute';
import { postApiV1EmploymentsIdRestoreEmploymentCreateExecute } from './restore_employment/create/execute';
import { getApiV1EmploymentsIdRightsGetAllExecute } from './rights/getAll/execute';
import { getApiV1EmploymentsIdLiveInfoGetAllExecute } from './live_info/getAll/execute';
import { putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateExecute } from './yearly_bring_shifts/for_year/update/execute';
import { getApiV1EmploymentsIdYearlyBringShiftsGetAllExecute } from './yearly_bring_shifts/getAll/execute';
import { postApiV1EmploymentsIdPaygradesCreateExecute } from './paygrades/create/execute';
import { getApiV1EmploymentsIdPaygradesGetAllExecute } from './paygrades/getAll/execute';
import { deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteExecute } from './paygrades/delete/execute';
import { getApiV1EmploymentsIdPaygradesPaygradeIdGetExecute } from './paygrades/get/execute';
import { putApiV1EmploymentsIdPaygradesPaygradeIdUpdateExecute } from './paygrades/update/execute';
import { getApiV1EmploymentsIdUiSettingsGetAllExecute } from './ui_settings/getAll/execute';
import { postApiV1EmploymentsIdUiSettingsCreateExecute } from './ui_settings/create/execute';

export async function employmentsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV2Employments') {
		responseData = await postApiV2EmploymentsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Employments') {
		responseData = await getApiV1EmploymentsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsInfo') {
		responseData = await getApiV1EmploymentsInfoGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsPotentialConflicts') {
		responseData = await getApiV1EmploymentsPotentialConflictsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsMy') {
		responseData = await getApiV1EmploymentsMyGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdNotifications') {
		responseData = await getApiV1EmploymentsIdNotificationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdAvailabilities') {
		responseData = await getApiV1EmploymentsIdAvailabilitiesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EmploymentsId') {
		responseData = await deleteApiV1EmploymentsIdDeleteExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsId') {
		responseData = await getApiV1EmploymentsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EmploymentsIdDestroyEmployment') {
		responseData = await postApiV1EmploymentsIdDestroyEmploymentCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EmploymentsIdRestoreEmployment') {
		responseData = await postApiV1EmploymentsIdRestoreEmploymentCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdRights') {
		responseData = await getApiV1EmploymentsIdRightsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdLiveInfo') {
		responseData = await getApiV1EmploymentsIdLiveInfoGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1EmploymentsIdYearlyBringShiftsForYear') {
		responseData = await putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdYearlyBringShifts') {
		responseData = await getApiV1EmploymentsIdYearlyBringShiftsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EmploymentsIdPaygrades') {
		responseData = await postApiV1EmploymentsIdPaygradesCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdPaygrades') {
		responseData = await getApiV1EmploymentsIdPaygradesGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EmploymentsIdPaygradesPaygradeId') {
		responseData = await deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdPaygradesPaygradeId') {
		responseData = await getApiV1EmploymentsIdPaygradesPaygradeIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1EmploymentsIdPaygradesPaygradeId') {
		responseData = await putApiV1EmploymentsIdPaygradesPaygradeIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EmploymentsIdUiSettings') {
		responseData = await getApiV1EmploymentsIdUiSettingsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EmploymentsIdUiSettings') {
		responseData = await postApiV1EmploymentsIdUiSettingsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
