import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1StaffShiftsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
			},
		},
		placeholder: '',
		description: 'StaffShift ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['deleteApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
			{
				displayName: 'Unassign From_connected',
				name: 'unassign_from_connected',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'WhetherUnassign to other connected shifts',
			},
		],
	},
];
