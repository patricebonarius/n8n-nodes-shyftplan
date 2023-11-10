import { INodeProperties } from 'n8n-workflow';
export const getApiV1PunchTimingsRecordGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1PunchTimingsRecord'],
				resource: ['punch_timings'],
			},
		},
		options: [
			{
				displayName: 'Encrypted Company_ID',
				name: 'encrypted_company_id',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter You get encrypted company_ID when you start a punch time',
			},
			{
				displayName: 'User Token',
				name: 'user_token',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter 4 Digit number of the user It can be found in the profile of each user',
			},
		],
	},
];
