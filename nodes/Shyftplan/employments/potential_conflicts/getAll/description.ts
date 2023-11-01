import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsPotentialConflictsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Conflicts',
		name: 'conflicts',
		type: 'boolean',
		required: true,
		default: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPotentialConflicts'],
				resource: ['employments'],
			},
		},
		placeholder: '',
		description:
			'Whether either true to check all conflicts from company settings or an Array of conflicts to checkPossible values are:<ul> <li>restricted_shift_presets</li><li>absences_collision</li><li>maximum_consecutive_working_days</li><li>minimum_rest</li><li>shifts_collision</li></ul>',
	},
	{
		displayName: 'Shift Preset_ID_per_employment[][employment_ids][]',
		name: 'shift_preset_id_per_employment[][employment_ids][]',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPotentialConflicts'],
				resource: ['employments'],
			},
		},
		placeholder: '',
		description: 'Employment IDs',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPotentialConflicts'],
				resource: ['employments'],
			},
		},
		placeholder: '',
		description:
			'Date for which to check potential conflicts to in ISO 8601 format with time and UTC offset',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPotentialConflicts'],
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
				description: 'Enter company ID',
			},
			{
				displayName: 'Shift Preset_ID_per_employment[][shift_preset_id]',
				name: 'shift_preset_id_per_employment[][shift_preset_id]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Shift Preset ID',
			},
		],
	},
];
