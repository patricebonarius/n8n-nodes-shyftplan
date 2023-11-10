import { INodeProperties } from 'n8n-workflow';
export const putApiV1PositionsIdAddEmploymentUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'EnterPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PositionsIdAddEmployment'],
				resource: ['positions'],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PositionsIdAddEmployment'],
				resource: ['positions'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PositionsIdAddEmployment'],
				resource: ['positions'],
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
				operation: ['putApiV1PositionsIdAddEmployment'],
				resource: ['positions'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter',
			},
		],
	},
];
