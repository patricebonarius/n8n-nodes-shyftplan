import { INodeProperties } from 'n8n-workflow';
export const putApiV1EmploymentsIdPaygradesPaygradeIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Paygrade Type_ID',
		name: 'paygrade_type_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Paygrade Type ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Paygrade value',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Update Paygrades',
		name: 'update_paygrades',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Update paygrades on shifts',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Update Force',
		name: 'update_force',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Paygrade value',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Update All',
		name: 'update_all',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Paygrade value',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Paygrade ID',
		name: 'paygrade_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Paygrade ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
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
				operation: ['putApiV1EmploymentsIdPaygradesPaygradeId'],
				resource: ['employments'],
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
			{
				displayName: 'Update Start_date',
				name: 'update_start_date',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Paygrade value',
			},
			{
				displayName: 'Update End_date',
				name: 'update_end_date',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Paygrade value',
			},
		],
	},
];
