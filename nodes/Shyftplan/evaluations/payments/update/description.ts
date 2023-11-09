import { INodeProperties } from 'n8n-workflow';
export const putApiV1EvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1EvaluationsStaffShiftIdPaymentsPaymentId'],
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
				operation: ['putApiV1EvaluationsStaffShiftIdPaymentsPaymentId'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Payment ID',
		name: 'payment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Payment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EvaluationsStaffShiftIdPaymentsPaymentId'],
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
				operation: ['putApiV1EvaluationsStaffShiftIdPaymentsPaymentId'],
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
