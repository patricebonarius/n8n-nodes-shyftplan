import { INodeProperties } from 'n8n-workflow';
export const postApiV1EvaluationsStaffShiftIdPaymentsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1EvaluationsStaffShiftIdPayments'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Payment value',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftIdPayments'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Paygrade Type_ID',
		name: 'paygrade_type_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'PaygradeType ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftIdPayments'],
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
				operation: ['postApiV1EvaluationsStaffShiftIdPayments'],
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
			{
				displayName: 'Parent Payment_ID',
				name: 'parent_payment_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Parent Payment ID',
			},
		],
	},
];
