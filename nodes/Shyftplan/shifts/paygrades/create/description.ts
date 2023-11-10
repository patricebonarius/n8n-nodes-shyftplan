import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsShiftIdPaygradesCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Paygrade Type_ID',
		name: 'paygrade_type_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Paygrade type ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Value of paygrade',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
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
				operation: ['postApiV1ShiftsShiftIdPaygrades'],
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
				operation: ['postApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Parent Paygrade_ID',
				name: 'parent_paygrade_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Parent paygrade ID',
			},
		],
	},
];
