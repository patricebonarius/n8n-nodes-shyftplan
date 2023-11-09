import { INodeProperties } from 'n8n-workflow';
export const getApiV1EvaluationsStaffShiftIdPaymentsCalculationGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
				resource: ['evaluations'],
			},
		},
	},
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
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start of the Evaluation',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End of the Evaluation',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Breaks',
		name: 'breaks',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Unpaid break minutes',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
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
				operation: ['getApiV1EvaluationsStaffShiftIdPaymentsCalculation'],
				resource: ['evaluations'],
			},
		},
		options: [
			{
				displayName: 'Evaluation Breaks[][starts_at]',
				name: 'evaluation_breaksSTARTENDSTARTstarts_atEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Evaluation break starts from',
			},
			{
				displayName: 'Evaluation Breaks[][ends_at]',
				name: 'evaluation_breaksSTARTENDSTARTends_atEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Evaluation break ends at',
			},
			{
				displayName: 'Payments[][paygrade Type_ID]',
				name: 'paymentsSTARTENDSTARTpaygrade_type_idEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Payments[][paygrade Type_ID]',
			},
			{
				displayName: 'Payments[][value]',
				name: 'paymentsSTARTENDSTARTvalueEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Payments[][value]',
			},
			{
				displayName: 'Payments[][child Payments[]][][paygrade_type_ID]',
				name: 'paymentsSTARTENDSTARTchild_paymentsSTARTENDENDSTARTENDSTARTpaygrade_type_idEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Payments[][child Payments[]][][paygrade_type_ID]',
			},
			{
				displayName: 'Payments[][child Payments[]][][value]',
				name: 'paymentsSTARTENDSTARTchild_paymentsSTARTENDENDSTARTENDSTARTvalueEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Payments[][child Payments[]][][value]',
			},
		],
	},
];
