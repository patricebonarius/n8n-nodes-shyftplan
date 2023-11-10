import { INodeProperties } from 'n8n-workflow';
export const postApiV1SessionsRefreshCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1SessionsRefresh'],
				resource: ['sessions'],
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
				operation: ['postApiV1SessionsRefresh'],
				resource: ['sessions'],
			},
		},
		options: [],
	},
];
