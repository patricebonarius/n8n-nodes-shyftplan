import { INodeProperties } from 'n8n-workflow';
export const getApiV1PaygradeTypesIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter PaygradeType ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1PaygradeTypesId'],
				resource: ['paygrade_types'],
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
				operation: ['getApiV1PaygradeTypesId'],
				resource: ['paygrade_types'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
		],
	},
];
