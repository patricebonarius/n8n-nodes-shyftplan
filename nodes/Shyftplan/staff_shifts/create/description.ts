import { INodeProperties } from 'n8n-workflow';
export const postApiV1StaffShiftsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of an Shift',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of an Employment',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
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
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
		options: [
			{
				displayName: 'Assign To_connected',
				name: 'assign_to_connected',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Assign to other connected shifts',
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
				description: 'Enter StaffShift metadata as JSON',
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
