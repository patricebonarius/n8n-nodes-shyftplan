import { INodeProperties } from 'n8n-workflow';
export const getApiV1PaymentsStaffShiftIdGetFields: INodeProperties[] = [
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Staff_Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1PaymentsStaffShiftId'],
				resource: ['payments'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1PaymentsStaffShiftId'],
				resource: ['payments'],
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
		],
	},
];
