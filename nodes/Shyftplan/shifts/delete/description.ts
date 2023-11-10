import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftsIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1ShiftsId'],
				resource: ['shifts'],
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
				operation: ['deleteApiV1ShiftsId'],
				resource: ['shifts'],
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
				operation: ['deleteApiV1ShiftsId'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Delete Connected',
				name: 'delete_connected',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Delete connected shifts if value is true',
			},
		],
	},
];
