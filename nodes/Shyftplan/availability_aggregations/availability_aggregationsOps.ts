import { INodeProperties } from 'n8n-workflow';
import { getApiV1AvailabilityAggregationsGetAllFields } from './getAll/description';

export const availability_aggregationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['availability_aggregations'],
			},
		},
		options: [
			{
				name: 'Get Availability Aggregations',
				value: 'getApiV1AvailabilityAggregations',
				description: 'Gets all availabilities aggregated',
				action: 'Get availability aggregations',
			},
		],
		default: 'getApiV1AvailabilityAggregations',
		noDataExpression: true,
	},

	...getApiV1AvailabilityAggregationsGetAllFields,
];
