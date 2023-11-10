import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftPresetsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftPresets'],
				resource: ['shift_presets'],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Between 1 and 1000',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Single Company ID',
			},
			{
				displayName: 'Company IDs[]',
				name: 'company_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Array of Company ID',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Single Shift preset ID',
			},
			{
				displayName: 'IDs[]',
				name: 'idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Array of ShiftPreset ID',
			},
		],
	},
];
