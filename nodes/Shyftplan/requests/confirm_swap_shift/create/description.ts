import { INodeProperties } from 'n8n-workflow';
export const postApiV1RequestsConfirmSwapShiftCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1RequestsConfirmSwapShift'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'Swap Request_ID',
		name: 'swap_request_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter SwapRequest ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsConfirmSwapShift'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID that accepted shift offer',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsConfirmSwapShift'],
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
				operation: ['postApiV1RequestsConfirmSwapShift'],
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
				description: 'Whether Accept swap requests when warnings are present',
			},
		],
	},
];
