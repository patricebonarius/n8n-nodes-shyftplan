import { INodeProperties } from 'n8n-workflow';
export const postApiV1EvaluationsStaffShiftIdDidNotShowCreateFields: INodeProperties[] = [
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'StaffShift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftIdDidNotShow'],
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
				operation: ['postApiV1EvaluationsStaffShiftIdDidNotShow'],
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
				description: 'Enter Company ID',
			},
		],
	},
];
