import { INodeProperties } from 'n8n-workflow';
export const postApiV1PositionsCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'EnterCompany ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Positions'],
				resource: ['positions'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'EnterName',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Positions'],
				resource: ['positions'],
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
				operation: ['postApiV1Positions'],
				resource: ['positions'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'EnterDescription',
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'color',
				default: '',
				placeholder: '',
				description: 'EnterColor HEX format, eg #FF00FF',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'EnterPosition Comment (Shown on Shift)',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'EnterUsed to order Positions in the UI',
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
				description: 'Enter Position metadata as JSON',
			},
		],
	},
];
