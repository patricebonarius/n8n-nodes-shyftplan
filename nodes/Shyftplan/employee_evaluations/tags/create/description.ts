import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmployeeEvaluationsEvaluationIdTagsCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsEvaluationIdTags'],
				resource: ['employee_evaluations'],
			},
		},
	},
	{
		displayName: 'Tag ID',
		name: 'tag_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Tag ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmployeeEvaluationsEvaluationIdTags'],
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
				operation: ['postApiV1EmployeeEvaluationsEvaluationIdTags'],
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
				operation: ['postApiV1EmployeeEvaluationsEvaluationIdTags'],
				resource: ['employee_evaluations'],
			},
		},
		options: [],
	},
];
