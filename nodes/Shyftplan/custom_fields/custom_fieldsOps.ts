import { INodeProperties } from 'n8n-workflow';
import { postApiV1CustomFieldsCreateFields } from './create/description';
import { getApiV1CustomFieldsGetAllFields } from './getAll/description';
import { deleteApiV1CustomFieldsIdDeleteFields } from './delete/description';
import { putApiV1CustomFieldsIdUpdateFields } from './update/description';
import { getApiV1CustomFieldsIdGetFields } from './get/description';

export const custom_fieldsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['custom_fields'],
			},
		},
		options: [
			{
				name: 'Post Custom Fields',
				value: 'postApiV1CustomFields',
				description: 'Create a custom_field',
				action: 'Post custom fields',
			},
			{
				name: 'Get Custom Fields',
				value: 'getApiV1CustomFields',
				description: 'List all Custom Fields.',
				action: 'Get custom fields',
			},
			{
				name: 'Delete Custom Fields By ID',
				value: 'deleteApiV1CustomFieldsId',
				description: 'Delete a custom_field',
				action: 'Delete custom fields by ID',
			},
			{
				name: 'Put Custom Fields By ID',
				value: 'putApiV1CustomFieldsId',
				description: 'Update a custom_field',
				action: 'Put custom fields by ID',
			},
			{
				name: 'Get Custom Fields By ID',
				value: 'getApiV1CustomFieldsId',
				description: 'Return a custom_field.',
				action: 'Get custom fields by ID',
			},
		],
		default: 'getApiV1CustomFieldsId',
		noDataExpression: true,
	},

	...postApiV1CustomFieldsCreateFields,

	...getApiV1CustomFieldsGetAllFields,

	...deleteApiV1CustomFieldsIdDeleteFields,

	...putApiV1CustomFieldsIdUpdateFields,

	...getApiV1CustomFieldsIdGetFields,
];
