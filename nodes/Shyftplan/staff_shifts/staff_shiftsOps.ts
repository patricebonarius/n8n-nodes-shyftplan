import { INodeProperties } from 'n8n-workflow';
import { postApiV1StaffShiftsReplaceCreateFields } from './replace/create/description';
import { postApiV1StaffShiftsMoveStaffCreateFields } from './move_staff/create/description';
import { getApiV1StaffShiftsGetAllFields } from './getAll/description';
import { postApiV1StaffShiftsCreateFields } from './create/description';
import { getApiV1StaffShiftsIdGetFields } from './get/description';
import { deleteApiV1StaffShiftsIdDeleteFields } from './delete/description';

export const staff_shiftsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['staff_shifts'],
			},
		},
		options: [
			{
				name: 'Post Staff Shifts Replace',
				value: 'postApiV1StaffShiftsReplace',
				description: 'Replace one employee with another on shift',
				action: 'Post staff shifts replace',
			},
			{
				name: 'Post Staff Shifts Move Staff',
				value: 'postApiV1StaffShiftsMoveStaff',
				description: 'Move a staff from one shift to another',
				action: 'Post staff shifts move staff',
			},
			{
				name: 'Get Staff Shifts',
				value: 'getApiV1StaffShifts',
				description: 'List all StaffShifts',
				action: 'Get staff shifts',
			},
			{
				name: 'Post Staff Shifts',
				value: 'postApiV1StaffShifts',
				description: 'Create a new StaffShift',
				action: 'Post staff shifts',
			},
			{
				name: 'Get Staff Shifts By ID',
				value: 'getApiV1StaffShiftsId',
				description: 'Return a StaffShift',
				action: 'Get staff shifts by ID',
			},
			{
				name: 'Delete Staff Shifts By ID',
				value: 'deleteApiV1StaffShiftsId',
				description: 'Deletes a StaffShift',
				action: 'Delete staff shifts by ID',
			},
		],
		default: 'deleteApiV1StaffShiftsId',
		noDataExpression: true,
	},

	...postApiV1StaffShiftsReplaceCreateFields,

	...postApiV1StaffShiftsMoveStaffCreateFields,

	...getApiV1StaffShiftsGetAllFields,

	...postApiV1StaffShiftsCreateFields,

	...getApiV1StaffShiftsIdGetFields,

	...deleteApiV1StaffShiftsIdDeleteFields,
];
