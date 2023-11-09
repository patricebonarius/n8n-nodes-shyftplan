import { INodeProperties } from 'n8n-workflow';
export const postApiV1AbsencesIdApproveCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdApprove'],
				resource: ['absences'],
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
				operation: ['postApiV1AbsencesIdApprove'],
				resource: ['absences'],
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
				displayName: 'Force Collision',
				name: 'force_collision',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Create absences even when conflicts exists when set to true',
			},
			{
				displayName: 'Force Collision_and_remove',
				name: 'force_collision_and_remove',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Remove staff from conflicting Shifts',
			},
		],
	},
];
