import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsIdPaygradesPaygradeIdGetFields: INodeProperties[] = [
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
				operation: ['getApiV1EmploymentsIdPaygradesPaygradeId'],
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
				operation: ['getApiV1EmploymentsIdPaygradesPaygradeId'],
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
				operation: ['getApiV1EmploymentsIdPaygradesPaygradeId'],
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
		],
	},
];
