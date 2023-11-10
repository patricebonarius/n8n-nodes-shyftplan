import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsIdCloneCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftsIdClone'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '',
		placeholder: '',
		description:
			'Enter Date to which shift is cloned to, in ISO 8601 format with time and UTC offset (time is nullified)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsIdClone'],
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
				operation: ['postApiV1ShiftsIdClone'],
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
				description: 'Whether Connect new shift with original shift?',
			},
			{
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description:
					'Enter Either true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist Possible values are:<ul> <li>shifts_collision</li><li>absences_collision</li><li>locations_position_changed</li><li>minimum_break</li><li>maximum_working_hours</li><li>minimum_rest</li><li>maximum_earning</li><li>outsIDe_employment_period</li><li>maximum_consecutive_working_days</li><li>restricted_shift_presets</li><li>unavailable</li><li>not_available</li></ul>',
			},
		],
	},
];
