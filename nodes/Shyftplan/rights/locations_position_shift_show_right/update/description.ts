import { INodeProperties } from 'n8n-workflow';
export const putApiV1RightsLocationsPositionShiftShowRightUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1RightsLocationsPositionShiftShowRight'],
				resource: ['rights'],
			},
		},
	},
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
				operation: ['putApiV1RightsLocationsPositionShiftShowRight'],
				resource: ['rights'],
			},
		},
	},
	{
		displayName: 'Locations Position_ID',
		name: 'locations_position_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter LocationsPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1RightsLocationsPositionShiftShowRight'],
				resource: ['rights'],
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
				operation: ['putApiV1RightsLocationsPositionShiftShowRight'],
				resource: ['rights'],
			},
		},
		options: [],
	},
];
