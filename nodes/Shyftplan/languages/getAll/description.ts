import { INodeProperties } from 'n8n-workflow';
export const getApiV1LanguagesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Filter for single Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1Languages'],
				resource: ['languages'],
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
				operation: ['getApiV1Languages'],
				resource: ['languages'],
			},
		},
		options: [],
	},
];
