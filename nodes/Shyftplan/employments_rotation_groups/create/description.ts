import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmploymentsRotationGroupsCreateFields: INodeProperties[] = [
	{
		displayName: 'Shift Rotation_group_ID',
		name: 'shift_rotation_group_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Shift Rotation Group ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmploymentsRotationGroups'],
				resource: ['employments_rotation_groups'],
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
				operation: ['postApiV1EmploymentsRotationGroups'],
				resource: ['employments_rotation_groups'],
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
				operation: ['postApiV1EmploymentsRotationGroups'],
				resource: ['employments_rotation_groups'],
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
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Employments rotation group valid from',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Employments rotation group ends at',
			},
		],
	},
];
