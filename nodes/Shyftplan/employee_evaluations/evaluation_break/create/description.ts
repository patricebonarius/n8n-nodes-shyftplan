import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakCreateFields: INodeProperties[] =
	[
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
					operation: ['postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak'],
					resource: ['employee_evaluations'],
				},
			},
		},
		{
			displayName: 'Starts At',
			name: 'starts_at',
			type: 'string',
			default: '',
			placeholder: '',
			description: 'Evaluation break starts from',
			required: true,
			displayOptions: {
				show: {
					operation: ['postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak'],
					resource: ['employee_evaluations'],
				},
			},
		},
		{
			displayName: 'Ends At',
			name: 'ends_at',
			type: 'string',
			default: '',
			placeholder: '',
			description: 'Evaluation break ends at',
			required: true,
			displayOptions: {
				show: {
					operation: ['postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak'],
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
					operation: ['postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak'],
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
					operation: ['postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak'],
					resource: ['employee_evaluations'],
				},
			},
			options: [],
		},
	];
