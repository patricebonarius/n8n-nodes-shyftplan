import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmployeeEvaluationsStaffShiftIdAcceptCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1EmployeeEvaluationsStaffShiftIdAccept'],
				resource: ['employee_evaluations'],
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
				operation: ['postApiV1EmployeeEvaluationsStaffShiftIdAccept'],
				resource: ['employee_evaluations'],
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
				operation: ['postApiV1EmployeeEvaluationsStaffShiftIdAccept'],
				resource: ['employee_evaluations'],
			},
		},
		options: [
			{
				displayName: 'Ignore Break_warning',
				name: 'ignore_break_warning',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether Ignore minimum break time warning (DEPRECATED Please use ignore_conflicts)',
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
					'Whether true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:<ul> <li>minimum_break</li></ul>.',
			},
		],
	},
];
