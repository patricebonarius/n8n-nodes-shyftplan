import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ReplaceRequestsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift Offer(SwapRequest) ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ReplaceRequestsId'],
				resource: ['replace_requests'],
			},
		},
	},
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
				operation: ['deleteApiV1ReplaceRequestsId'],
				resource: ['replace_requests'],
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
				operation: ['deleteApiV1ReplaceRequestsId'],
				resource: ['replace_requests'],
			},
		},
		options: [
			{
				displayName: 'Accepted By',
				name: 'accepted_by',
				type: 'number',
				default: '',
				placeholder: '',
				description:
					'Enter Employment ID who accepted the offerIf this is empty, current logged in user is assumed to authorize the action',
			},
		],
	},
];
