import { INodeProperties } from 'n8n-workflow';
import { getApiV1LiveStaffShiftsGetAllFields } from './getAll/description';

export const live_staff_shiftsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['live_staff_shifts'],
			},
		},
		options: [
			{
				name: 'Get Live Staff Shifts',
				value: 'getApiV1LiveStaffShifts',
				description: 'List all LiveStaffShifts',
				action: 'Get live staff shifts',
			},
		],
		default: 'getApiV1LiveStaffShifts',
		noDataExpression: true,
	},

	...getApiV1LiveStaffShiftsGetAllFields,
];
