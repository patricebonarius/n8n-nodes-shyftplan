import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmploymentsIdDestroyEmploymentCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1EmploymentsIdDestroyEmployment'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmploymentsIdDestroyEmployment'],
				resource: ['employments'],
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
				operation: ['postApiV1EmploymentsIdDestroyEmployment'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
