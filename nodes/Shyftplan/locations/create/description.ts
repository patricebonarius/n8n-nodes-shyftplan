import { INodeProperties } from 'n8n-workflow';
export const postApiV1LocationsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1Locations'],
				resource: ['locations'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Locations'],
				resource: ['locations'],
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
				operation: ['postApiV1Locations'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Used to order Locations in the UI',
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Location metadata as JSON',
			},
		],
	},
];
