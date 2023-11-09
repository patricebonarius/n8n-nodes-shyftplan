import { INodeProperties } from 'n8n-workflow';
export const putApiV1CustomFieldsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Custom_field ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1CustomFieldsId'],
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
				operation: ['putApiV1CustomFieldsId'],
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
				operation: ['putApiV1CustomFieldsId'],
				resource: ['custom_fields'],
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
