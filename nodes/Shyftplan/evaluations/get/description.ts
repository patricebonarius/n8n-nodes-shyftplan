import { INodeProperties } from 'n8n-workflow';
export const getApiV1EvaluationsStaffShiftIdGetFields: INodeProperties[] = [
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Filter for single Staff Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EvaluationsStaffShiftId'],
				resource: ['evaluations'],
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
				operation: ['getApiV1EvaluationsStaffShiftId'],
				resource: ['evaluations'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Filter for single Company ID',
			},
		],
	},
];
