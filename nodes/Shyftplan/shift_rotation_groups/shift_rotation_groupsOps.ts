import { INodeProperties } from 'n8n-workflow';
import { postApiV1ShiftRotationGroupsCreateFields } from './create/description';
import { getApiV1ShiftRotationGroupsGetAllFields } from './getAll/description';
import { postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateFields } from './unassign_employee/create/description';
import { postApiV1ShiftRotationGroupsIdAssignEmployeeCreateFields } from './assign_employee/create/description';
import { postApiV1ShiftRotationGroupsIdUnassignFromShiftsCreateFields } from './unassign_from_shifts/create/description';
import { postApiV1ShiftRotationGroupsIdAssignToShiftsCreateFields } from './assign_to_shifts/create/description';
import { deleteApiV1ShiftRotationGroupsIdDeleteFields } from './delete/description';
import { putApiV1ShiftRotationGroupsIdUpdateFields } from './update/description';

export const shift_rotation_groupsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shift_rotation_groups'],
			},
		},
		options: [
			{
				name: 'Post Shift Rotation Groups',
				value: 'postApiV1ShiftRotationGroups',
				description: 'Create shift rotation groups',
				action: 'Post shift rotation groups',
			},
			{
				name: 'Get Shift Rotation Groups',
				value: 'getApiV1ShiftRotationGroups',
				description: 'Get collection of shift rotation groups',
				action: 'Get shift rotation groups',
			},
			{
				name: 'Post Shift Rotation Groups By ID Unassign Employee',
				value: 'postApiV1ShiftRotationGroupsIdUnassignEmployee',
				description: 'Unassign Employee from shifts of Rotation Group',
				action: 'Post shift rotation groups by ID unassign employee',
			},
			{
				name: 'Post Shift Rotation Groups By ID Assign Employee',
				value: 'postApiV1ShiftRotationGroupsIdAssignEmployee',
				description: 'Assign Employee to Rotation Group',
				action: 'Post shift rotation groups by ID assign employee',
			},
			{
				name: 'Post Shift Rotation Groups By ID Unassign From Shifts',
				value: 'postApiV1ShiftRotationGroupsIdUnassignFromShifts',
				description: 'Unassign shift rotation group from shifts ',
				action: 'Post shift rotation groups by ID unassign from shifts',
			},
			{
				name: 'Post Shift Rotation Groups By ID Assign To Shifts',
				value: 'postApiV1ShiftRotationGroupsIdAssignToShifts',
				description: 'Assign shift rotation group to shifts ',
				action: 'Post shift rotation groups by ID assign to shifts',
			},
			{
				name: 'Delete Shift Rotation Groups By ID',
				value: 'deleteApiV1ShiftRotationGroupsId',
				description: 'Delete shift rotation group',
				action: 'Delete shift rotation groups by ID',
			},
			{
				name: 'Put Shift Rotation Groups By ID',
				value: 'putApiV1ShiftRotationGroupsId',
				description: 'Update a Shift rotation group',
				action: 'Put shift rotation groups by ID',
			},
		],
		default: 'putApiV1ShiftRotationGroupsId',
		noDataExpression: true,
	},

	...postApiV1ShiftRotationGroupsCreateFields,

	...getApiV1ShiftRotationGroupsGetAllFields,

	...postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateFields,

	...postApiV1ShiftRotationGroupsIdAssignEmployeeCreateFields,

	...postApiV1ShiftRotationGroupsIdUnassignFromShiftsCreateFields,

	...postApiV1ShiftRotationGroupsIdAssignToShiftsCreateFields,

	...deleteApiV1ShiftRotationGroupsIdDeleteFields,

	...putApiV1ShiftRotationGroupsIdUpdateFields,
];
