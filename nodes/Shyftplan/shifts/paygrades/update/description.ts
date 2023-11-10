import { INodeProperties } from 'n8n-workflow';
export const putApiV2ShiftsIdPaygradesUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV2ShiftsIdPaygrades'],
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
				operation: ['putApiV2ShiftsIdPaygrades'],
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
				operation: ['putApiV2ShiftsIdPaygrades'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Update Connected',
				name: 'update_connected',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Update connected shifts if value is true',
			},
			{
				displayName: 'Paygrades[][paygrade Type_ID]',
				name: 'paygradesSTARTENDSTARTpaygrade_type_idEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Paygrades',
			},
			{
				displayName: 'Paygrades[][value]',
				name: 'paygradesSTARTENDSTARTvalueEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Paygrasdes',
			},
			{
				displayName: 'Paygrades[][child Paygrades[]][][paygrade_type_ID]',
				name: 'paygradesSTARTENDSTARTchild_paygradesSTARTENDENDSTARTENDSTARTpaygrade_type_idEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Paygrades',
			},
			{
				displayName: 'Paygrades[][child Paygrades[]][][value]',
				name: 'paygradesSTARTENDSTARTchild_paygradesSTARTENDENDSTARTENDSTARTvalueEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter ?',
			},
		],
	},
];
