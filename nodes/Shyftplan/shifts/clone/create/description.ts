import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsIdCloneCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsIdClone'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsIdClone'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description:
			'Date to which shift is cloned to, in ISO 8601 format with time and UTC offset (time is nullified)',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsIdClone'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description: 'Enter ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsIdClone'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Connect',
				name: 'connect',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'WhetherConnect new shift with original shift?',
			},
			{
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'string',
				default: 'false',
				placeholder: '',
				description:
					'Wheather true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:<ul> <li>shifts_collision</li><li>absences_collision</li><li>locations_position_changed</li><li>minimum_break</li><li>maximum_working_hours</li><li>minimum_rest</li><li>maximum_earning</li><li>outside_employment_period</li><li>maximum_consecutive_working_days</li><li>restricted_shift_presets</li><li>unavailable</li><li>not_available</li></ul>.',
			},
		],
	},
];
