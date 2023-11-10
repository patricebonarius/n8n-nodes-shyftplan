import { INodeProperties } from 'n8n-workflow';
export const putApiV1TagsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of a Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsId'],
				resource: ['tags'],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of a Location',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsId'],
				resource: ['tags'],
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
				operation: ['putApiV1TagsId'],
				resource: ['tags'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsId'],
				resource: ['tags'],
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
				operation: ['putApiV1TagsId'],
				resource: ['tags'],
			},
		},
		options: [
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				placeholder: '',
				description: 'Enter Color (HEX format, eg #FF00FF)',
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
				description: 'Enter Tag metadata JSON',
			},
		],
	},
];
