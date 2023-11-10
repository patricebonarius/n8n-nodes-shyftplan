import { INodeProperties } from 'n8n-workflow';
export const postApiV1RequestsConfirmApplyShiftCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1RequestsConfirmApplyShift'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsConfirmApplyShift'],
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
				operation: ['postApiV1RequestsConfirmApplyShift'],
				resource: ['requests'],
			},
		},
		options: [
			{
				displayName: 'OverrIDe Work',
				name: 'override_work',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Ignore overworked hours',
			},
		],
	},
];
