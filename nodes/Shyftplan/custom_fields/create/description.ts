import { INodeProperties } from 'n8n-workflow';
export const postApiV1CustomFieldsCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID to create custom_field',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1CustomFields'],
				resource: ['custom_fields'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Name of the custom_field',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1CustomFields'],
				resource: ['custom_fields'],
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
				operation: ['postApiV1CustomFields'],
				resource: ['custom_fields'],
			},
		},
		options: [],
	},
];
