import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteFields: INodeProperties[] =
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
					operation: ['deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId'],
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
					operation: ['deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId'],
					resource: ['employee_evaluations'],
				},
			},
		},
		{
			displayName: 'Evaluation Break_ID',
			name: 'evaluation_break_id',
			type: 'number',
			default: '',
			placeholder: '',
			description: 'Enter Evaluation Break_ID',
			required: true,
			displayOptions: {
				show: {
					operation: ['deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId'],
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
					operation: ['deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId'],
					resource: ['employee_evaluations'],
				},
			},
			options: [],
		},
	];
