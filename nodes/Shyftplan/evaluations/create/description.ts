import { INodeProperties } from 'n8n-workflow';
export const postApiV1EvaluationsStaffShiftIdCreateFields: INodeProperties[] = [
	{
		displayName: 'Evaluation Starts_at',
		name: 'evaluation_starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start of the Evaluation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftId'],
				resource: ['evaluations'],
			},
		},
	},
	{
		displayName: 'Evaluation Ends_at',
		name: 'evaluation_ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End of the Evaluation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftId'],
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
		description: 'Enter Staff Shift_ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EvaluationsStaffShiftId'],
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
				operation: ['postApiV1EvaluationsStaffShiftId'],
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
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description:
					'Either true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:<ul> <li>minimum_break</li></ul>.',
			},
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
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Comment',
			},
			{
				displayName: 'Evaluation Break',
				name: 'evaluation_break',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Break duration in minutes',
			},
			{
				displayName: 'Untimed Breaks',
				name: 'untimed_breaks',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Untimed Breaks',
			},
			{
				displayName: 'Evaluation Tag_IDs[]',
				name: 'evaluation_tag_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of EvaluationTag IDs',
			},
		],
	},
];