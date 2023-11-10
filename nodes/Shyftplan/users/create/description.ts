import { INodeProperties } from 'n8n-workflow';
export const postApiV1UsersCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1Users'],
				resource: ['users'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter First Name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Users'],
				resource: ['users'],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Last Name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Users'],
				resource: ['users'],
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
				operation: ['postApiV1Users'],
				resource: ['users'],
			},
		},
		options: [
			{
				displayName: 'Is PaID_monthly',
				name: 'is_paid_monthly',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether its paid monthly',
			},
			{
				displayName: 'Sso Only',
				name: 'sso_only',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether Create user as Single Sign-On only user Password will be ignored if this flag is set',
			},
			{
				displayName: 'User Token',
				name: 'user_token',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter User Token',
			},
			{
				displayName: 'Max Vacation_days',
				name: 'max_vacation_days',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Max Vacation_days',
			},
			{
				displayName: 'Maximum Money_enabled',
				name: 'maximum_money_enabled',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether max money is enabled',
			},
			{
				displayName: 'Maximum Money',
				name: 'maximum_money',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Maximum Money',
			},
			{
				displayName: 'Employment Work_hour_attributes[mon_minutes]',
				name: 'employment_work_hour_attributesSTARTmon_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[mon_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[tue_minutes]',
				name: 'employment_work_hour_attributesSTARTtue_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[tue_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[wed_minutes]',
				name: 'employment_work_hour_attributesSTARTwed_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[wed_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[thu_minutes]',
				name: 'employment_work_hour_attributesSTARTthu_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[thu_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[fri_minutes]',
				name: 'employment_work_hour_attributesSTARTfri_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[fri_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[sat_minutes]',
				name: 'employment_work_hour_attributesSTARTsat_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[sat_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[sun_minutes]',
				name: 'employment_work_hour_attributesSTARTsun_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[sun_minutes]',
			},
			{
				displayName: 'Employment Work_hour_attributes[vacation_minutes]',
				name: 'employment_work_hour_attributesSTARTvacation_minutesEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Employment Work_hour_attributes[vacation_minutes]',
			},
			{
				displayName: 'Exit Date',
				name: 'exit_date',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Exit Date',
			},
			{
				displayName: 'Exit Month_payed_partially',
				name: 'exit_month_payed_partially',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether monthly paid is exited',
			},
			{
				displayName: 'Billing Type_ID',
				name: 'billing_type_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter 1 = abrechnen is billed ; 2 = nicht abrechnen (is not billed)',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Note',
			},
			{
				displayName: 'Phone Number',
				name: 'phone_number',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Phone Number',
			},
			{
				displayName: 'Staff Number',
				name: 'staff_number',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Staff Number',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Email',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				placeholder: '',
				description: 'Enter Password',
			},
		],
	},
];