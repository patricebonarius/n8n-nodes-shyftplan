import { INodeProperties } from 'n8n-workflow';
export const postApiV1PositionsIdDestroyPositionCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'EnterPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1PositionsIdDestroyPosition'],
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
				operation: ['postApiV1PositionsIdDestroyPosition'],
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
		],
	},
];
