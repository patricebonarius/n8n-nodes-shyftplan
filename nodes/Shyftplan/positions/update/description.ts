import { INodeProperties } from 'n8n-workflow';
export const putApiV1PositionsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'EnterPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PositionsId'],
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
				operation: ['putApiV1PositionsId'],
				resource: ['positions'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'EnterName',
			},
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
				description: 'Enter Color (HEX format, eg #FF00FF)',
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
				description: 'Enter position metadata as JSON',
			},
		],
	},
];
