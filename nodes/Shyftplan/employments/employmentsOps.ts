import { INodeProperties } from 'n8n-workflow';
import { postApiV2EmploymentsCreateFields } from './create/description';
import { getApiV1EmploymentsGetAllFields } from './getAll/description';
import { getApiV1EmploymentsInfoGetAllFields } from './info/getAll/description';
import { getApiV1EmploymentsPotentialConflictsGetAllFields } from './potential_conflicts/getAll/description';
import { getApiV1EmploymentsMyGetAllFields } from './my/getAll/description';
import { getApiV1EmploymentsIdNotificationsGetAllFields } from './notifications/getAll/description';
import { getApiV1EmploymentsIdAvailabilitiesGetAllFields } from './availabilities/getAll/description';
import { deleteApiV1EmploymentsIdDeleteFields } from './delete/description';
import { getApiV1EmploymentsIdGetFields } from './get/description';
import { postApiV1EmploymentsIdDestroyEmploymentCreateFields } from './destroy_employment/create/description';
import { postApiV1EmploymentsIdRestoreEmploymentCreateFields } from './restore_employment/create/description';
import { getApiV1EmploymentsIdRightsGetAllFields } from './rights/getAll/description';
import { getApiV1EmploymentsIdLiveInfoGetAllFields } from './live_info/getAll/description';
import { putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateFields } from './yearly_bring_shifts/for_year/update/description';
import { getApiV1EmploymentsIdYearlyBringShiftsGetAllFields } from './yearly_bring_shifts/getAll/description';
import { postApiV1EmploymentsIdPaygradesCreateFields } from './paygrades/create/description';
import { getApiV1EmploymentsIdPaygradesGetAllFields } from './paygrades/getAll/description';
import { deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteFields } from './paygrades/delete/description';
import { getApiV1EmploymentsIdPaygradesPaygradeIdGetFields } from './paygrades/get/description';
import { putApiV1EmploymentsIdPaygradesPaygradeIdUpdateFields } from './paygrades/update/description';
import { getApiV1EmploymentsIdUiSettingsGetAllFields } from './ui_settings/getAll/description';
import { postApiV1EmploymentsIdUiSettingsCreateFields } from './ui_settings/create/description';

export const employmentsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employments'],
			},
		},
		options: [
			{
				name: 'Post Employments',
				value: 'postApiV2Employments',
				description: 'Create an employee. Stakeholders can not be created.',
				action: 'Post employments',
			},
			{
				name: 'Get Employments',
				value: 'getApiV1Employments',
				description: 'List all Employments.',
				action: 'Get employments',
			},
			{
				name: 'Get Employments Info',
				value: 'getApiV1EmploymentsInfo',
				description: 'List of employees available/working at shift schedule',
				action: 'Get employments info',
			},
			{
				name: 'Get Employments Potential Conflicts',
				value: 'getApiV1EmploymentsPotentialConflicts',
				description:
					'Given the list of employees, returns potential conflict that these employees may have for the given date.',
				action: 'Get employments potential conflicts',
			},
			{
				name: 'Get Employments My',
				value: 'getApiV1EmploymentsMy',
				description: 'List all Users Employments.',
				action: 'Get employments my',
			},
			{
				name: 'Get Employments By ID Notifications',
				value: 'getApiV1EmploymentsIdNotifications',
				description:
					'Get count of new absences the employment has manage rights over in a given company',
				action: 'Get employments by ID notifications',
			},
			{
				name: 'Get Employments By ID Availabilities',
				value: 'getApiV1EmploymentsIdAvailabilities',
				description:
					'Get all availabilities (and unavailabilities) related to this employment as per params',
				action: 'Get employments by ID availabilities',
			},
			{
				name: 'Delete Employments By ID',
				value: 'deleteApiV1EmploymentsId',
				description: 'Soft Destroy an employment... You can restore it back later',
				action: 'Delete employments by ID',
			},
			{
				name: 'Get Employments By ID',
				value: 'getApiV1EmploymentsId',
				description: 'Return an Employment.',
				action: 'Get employments by ID',
			},
			{
				name: 'Post Employments By ID Destroy Employment',
				value: 'postApiV1EmploymentsIdDestroyEmployment',
				description: 'Permanently destroy an employment',
				action: 'Post employments by ID destroy employment',
			},
			{
				name: 'Post Employments By ID Restore Employment',
				value: 'postApiV1EmploymentsIdRestoreEmployment',
				description: 'Restore an employment',
				action: 'Post employments by ID restore employment',
			},
			{
				name: 'Get Employments By ID Rights',
				value: 'getApiV1EmploymentsIdRights',
				description: 'Return rights of an employee',
				action: 'Get employments by ID rights',
			},
			{
				name: 'Get Employments By ID Live Info',
				value: 'getApiV1EmploymentsIdLiveInfo',
				description: 'Return live info of Employment',
				action: 'Get employments by ID live info',
			},
			{
				name: 'Put Employments By ID Yearly Bring Shifts For Year',
				value: 'putApiV1EmploymentsIdYearlyBringShiftsForYear',
				description: 'Update yearly bring shift',
				action: 'Put employments by ID yearly bring shifts for year',
			},
			{
				name: 'Get Employments By ID Yearly Bring Shifts',
				value: 'getApiV1EmploymentsIdYearlyBringShifts',
				description: 'Get yearly bring shifts by range',
				action: 'Get employments by ID yearly bring shifts',
			},
			{
				name: 'Post Employments By ID Paygrades',
				value: 'postApiV1EmploymentsIdPaygrades',
				description: 'Create paygrades for employment',
				action: 'Post employments by ID paygrades',
			},
			{
				name: 'Get Employments By ID Paygrades',
				value: 'getApiV1EmploymentsIdPaygrades',
				description: 'employment all paygrades',
				action: 'Get employments by ID paygrades',
			},
			{
				name: 'Delete Employments By ID Paygrades Paygrade Id',
				value: 'deleteApiV1EmploymentsIdPaygradesPaygradeId',
				description: 'Delete paygrade or bonus paygrade for an employment',
				action: 'Delete employments by ID paygrades paygrade id',
			},
			{
				name: 'Get Employments By ID Paygrades Paygrade Id',
				value: 'getApiV1EmploymentsIdPaygradesPaygradeId',
				description: 'Paygrade or bonus paygrade for an employment',
				action: 'Get employments by ID paygrades paygrade id',
			},
			{
				name: 'Put Employments By ID Paygrades Paygrade Id',
				value: 'putApiV1EmploymentsIdPaygradesPaygradeId',
				description: 'Change paygrade or bonus paygrade for an employment',
				action: 'Put employments by ID paygrades paygrade id',
			},
			{
				name: 'Get Employments By ID Ui Settings',
				value: 'getApiV1EmploymentsIdUiSettings',
				description: 'Get Employment UI Setting',
				action: 'Get employments by ID ui settings',
			},
			{
				name: 'Post Employments By ID Ui Settings',
				value: 'postApiV1EmploymentsIdUiSettings',
				description: 'Create Employment UI Setting',
				action: 'Post employments by ID ui settings',
			},
		],
		default: 'postApiV1EmploymentsIdUiSettings',
		noDataExpression: true,
	},

	...postApiV2EmploymentsCreateFields,

	...getApiV1EmploymentsGetAllFields,

	...getApiV1EmploymentsInfoGetAllFields,

	...getApiV1EmploymentsPotentialConflictsGetAllFields,

	...getApiV1EmploymentsMyGetAllFields,

	...getApiV1EmploymentsIdNotificationsGetAllFields,

	...getApiV1EmploymentsIdAvailabilitiesGetAllFields,

	...deleteApiV1EmploymentsIdDeleteFields,

	...getApiV1EmploymentsIdGetFields,

	...postApiV1EmploymentsIdDestroyEmploymentCreateFields,

	...postApiV1EmploymentsIdRestoreEmploymentCreateFields,

	...getApiV1EmploymentsIdRightsGetAllFields,

	...getApiV1EmploymentsIdLiveInfoGetAllFields,

	...putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateFields,

	...getApiV1EmploymentsIdYearlyBringShiftsGetAllFields,

	...postApiV1EmploymentsIdPaygradesCreateFields,

	...getApiV1EmploymentsIdPaygradesGetAllFields,

	...deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteFields,

	...getApiV1EmploymentsIdPaygradesPaygradeIdGetFields,

	...putApiV1EmploymentsIdPaygradesPaygradeIdUpdateFields,

	...getApiV1EmploymentsIdUiSettingsGetAllFields,

	...postApiV1EmploymentsIdUiSettingsCreateFields,
];
