import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1CustomFieldsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter custom_field ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1CustomFieldsId'],
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
				operation: ['deleteApiV1CustomFieldsId'],
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
