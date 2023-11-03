import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteFields: INodeProperties[] =
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
					operation: ['deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId'],
					resource: ['employee_evaluations'],
				},
			},
		},
		{
			displayName: 'Evaluation ID',
			name: 'evaluation_id',
			type: 'number',
			default: '',
			placeholder: '',
			description: 'Enter Evaluation ID',
			required: true,
			displayOptions: {
				show: {
					operation: ['deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId'],
					resource: ['employee_evaluations'],
				},
			},
		},
		{
			displayName: 'Evaluation Tag_ID',
			name: 'evaluation_tag_id',
			type: 'number',
			default: '',
			placeholder: '',
			description: 'Enter Evaluation Tag_ID',
			required: true,
			displayOptions: {
				show: {
					operation: ['deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId'],
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
					operation: ['deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId'],
					resource: ['employee_evaluations'],
				},
			},
			options: [],
		},
	];
