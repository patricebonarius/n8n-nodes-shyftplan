import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmploymentsIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1EmploymentsId'],
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
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsId'],
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
				operation: ['deleteApiV1EmploymentsId'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
