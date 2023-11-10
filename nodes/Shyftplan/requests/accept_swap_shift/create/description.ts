import { INodeProperties } from 'n8n-workflow';
export const postApiV1RequestsAcceptSwapShiftCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsAcceptSwapShift'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Swap Request ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsAcceptSwapShift'],
				resource: ['requests'],
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
				operation: ['postApiV1RequestsAcceptSwapShift'],
				resource: ['requests'],
			},
		},
		options: [
			{
				displayName: 'Ignore Collisions',
				name: 'ignore_collisions',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Accept swap requests even when shift/absence collisions are present',
			},
			{
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether Accept swap requests when other types of conflict warnings are present',
			},
		],
	},
];
