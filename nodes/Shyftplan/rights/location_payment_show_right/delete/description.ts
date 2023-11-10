import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1RightsLocationPaymentShowRightDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1RightsLocationPaymentShowRight'],
				resource: ['rights'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1RightsLocationPaymentShowRight'],
				resource: ['rights'],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Location ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1RightsLocationPaymentShowRight'],
				resource: ['rights'],
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
				operation: ['deleteApiV1RightsLocationPaymentShowRight'],
				resource: ['rights'],
			},
		},
		options: [],
	},
];
