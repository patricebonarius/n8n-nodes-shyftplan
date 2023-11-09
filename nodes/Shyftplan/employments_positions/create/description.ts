import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmploymentsPositionsCreateFields: INodeProperties[] = [
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmploymentsPositions'],
				resource: ['employments_positions'],
			},
		},
	},
	{
		displayName: 'Locations Position_ID',
		name: 'locations_position_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'LocationsPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmploymentsPositions'],
				resource: ['employments_positions'],
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
				operation: ['postApiV1EmploymentsPositions'],
				resource: ['employments_positions'],
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
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Employments Position metadata as JSON',
			},
		],
	},
];
