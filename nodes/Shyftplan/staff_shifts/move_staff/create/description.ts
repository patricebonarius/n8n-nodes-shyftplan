import { INodeProperties } from 'n8n-workflow';
export const postApiV1StaffShiftsMoveStaffCreateFields: INodeProperties[] = [
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of shift to which staff is being assigned',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShiftsMoveStaff'],
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
				operation: ['postApiV1StaffShiftsMoveStaff'],
				resource: ['staff_shifts'],
			},
		},
	},
	{
		displayName: 'Source Shift_ID',
		name: 'source_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of shift from which staff is being removed',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShiftsMoveStaff'],
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
				operation: ['postApiV1StaffShiftsMoveStaff'],
				resource: ['staff_shifts'],
			},
		},
		options: [
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
		],
	},
];
