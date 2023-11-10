import { INodeProperties } from 'n8n-workflow';
import { getApiV1ShiftPresetsGetAllFields } from './getAll/description';

export const shift_presetsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shift_presets'],
			},
		},
		options: [
			{
				name: 'Get Shift Presets',
				value: 'getApiV1ShiftPresets',
				description: 'List all Shift presets',
				action: 'Get shift presets',
			},
		],
		default: 'getApiV1ShiftPresets',
		noDataExpression: true,
	},

	...getApiV1ShiftPresetsGetAllFields,
];
