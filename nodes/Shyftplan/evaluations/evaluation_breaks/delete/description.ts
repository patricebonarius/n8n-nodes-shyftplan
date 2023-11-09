import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdDeleteFields: INodeProperties[] =
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
					operation: ['deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId'],
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
					operation: ['deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId'],
					resource: ['evaluations'],
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
					operation: ['deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId'],
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
					operation: ['deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId'],
					resource: ['evaluations'],
				},
			},
			options: [],
		},
	];
