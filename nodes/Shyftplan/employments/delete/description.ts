import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmploymentsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsId'],
				resource: ['employments'],
			},
		},
		placeholder: '',
		description: 'Enter company ID',
	},
	{
		displayName: 'Employments ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsId'],
				resource: ['employments'],
			},
		},
		placeholder: '',
		description: 'Enter Employments ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsId'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
