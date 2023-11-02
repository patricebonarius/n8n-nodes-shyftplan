import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmployeeEvaluationsStaffShiftIdCreateFields: INodeProperties[] = [
	{
		displayName: 'Evaluation Starts_at',
		name: 'evaluation_starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsStaffShiftId'],
				resource: ['employee_evaluations'],
			},
		},
		placeholder: '',
		description: 'Start of the Evaluation',
	},
	{
		displayName: 'Evaluation Ends_at',
		name: 'evaluation_ends_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsStaffShiftId'],
				resource: ['employee_evaluations'],
			},
		},
		placeholder: '',
		description: 'End of the Evaluation',
	},
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsStaffShiftId'],
				resource: ['employee_evaluations'],
			},
		},
		placeholder: '',
		description: 'Enter Staff Shift ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsStaffShiftId'],
				resource: ['employee_evaluations'],
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
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:<ul> <li>minimum_break</li></ul>.',
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
		],
	},
];
