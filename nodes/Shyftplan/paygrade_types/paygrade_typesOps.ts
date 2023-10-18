import { INodeProperties } from 'n8n-workflow';
import { paygrade_typesGetAllFields } from './getAll/description';
import { paygrade_typesByIdGetFields } from './get/description';
export const paygrade_typesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['paygrade_types'],
			},
		},
		options: [
			{
				name: 'Get A Paygrade Type',
				value: 'paygrade_typesById_get',
				description: 'Get single paygrade_types',
				action: 'Get a singular type by ID',
			},
			{
				name: 'Get All Paygrade Types',
				value: 'paygrade_types_getAll',
				description: 'Get all paygrade_types',
				action: 'Get a list of paygrade types',
			},
		],
		default: 'paygrade_types_getAll',
		noDataExpression: true,
	},
	/*  Get Fields  */
	...paygrade_typesByIdGetFields,
	/*  Get All Fields  */
	...paygrade_typesGetAllFields,
];
