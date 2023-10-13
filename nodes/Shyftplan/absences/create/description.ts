import { INodeProperties } from 'n8n-workflow';

export const absencesCreateFields: INodeProperties[] = [
	/* --- Required Fields --- */
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: 'company_id',
		description: 'Please enter the company number',
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM-DDT00:00:00',
		description: 'Please enter the starting time',
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM-DDT00:00:00',
		description: 'Please enter the end of times',
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: '1233134',
		description: 'Please enter the employees ID',
	},
	{
		displayName: 'Absence Reason ID',
		name: 'absence_reason_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: '1233134',
		description: 'Please enter the reasons ID if you know it',
	},
	{
		displayName: 'Days of Absence',
		name: 'days',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: '1',
		description: 'The number of absence days',
	},
	{
		displayName: 'Is Paid',
		name: 'paid',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		default: false,
	},

	/* --- Optional or Additional Fields --- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absences_create'],
				resource: ['absences'],
			},
		},
		options: [
			{
				displayName: 'State',
				name: 'is_paid_monthly',
				type: 'string',
				default: '',
				placeholder: 'new |refused | accepted | withdrawn',
				description: 'The state of the absence',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
			},
		],
	},
];
