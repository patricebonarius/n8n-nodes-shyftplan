import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1EmployeeEvaluationsEvaluationIdTags'],
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
				operation: ['getApiV1EmployeeEvaluationsEvaluationIdTags'],
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
				operation: ['getApiV1EmployeeEvaluationsEvaluationIdTags'],
				resource: ['employee_evaluations'],
			},
		},
		options: [],
	},
];
