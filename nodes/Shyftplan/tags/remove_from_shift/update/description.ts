import { INodeProperties } from 'n8n-workflow';
export const putApiV1TagsIdRemoveFromShiftUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of tag',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsIdRemoveFromShift'],
				resource: ['tags'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of shift',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsIdRemoveFromShift'],
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
		description: 'Enter Location ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1TagsIdRemoveFromShift'],
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
				operation: ['putApiV1TagsIdRemoveFromShift'],
				resource: ['tags'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
		],
	},
];
