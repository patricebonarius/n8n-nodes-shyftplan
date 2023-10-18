import { INodeProperties } from 'n8n-workflow';
export const companiesByIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companiesById_get'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Enter the Company ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['companiesById_get'],
				resource: ['companies'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'I dont know',
			},
		],
	},
];
