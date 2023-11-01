import { INodeProperties } from 'n8n-workflow';
export const postApiV1StaffShiftsCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
		placeholder: '',
		description: 'ID of an Shift',
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShifts'],
				resource: ['staff_shifts'],
			},
		},
		placeholder: '',
		description: 'ID of an Employment',
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
				description: 'WhetherAssign to other connected shifts',
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				default: '',
				placeholder: '',
				description: 'StaffShift metadata as JSON',
			},
			{
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:- -absences_collision - locations_position_changed- minimum_break -maximum_working_hours -minimum_rest - maximum_earning -outside_employment_period -maximum_consecutive_working_days -restricted_shift_presets -unavailable -not_available.',
			},
		],
	},
];
