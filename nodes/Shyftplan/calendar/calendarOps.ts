import { INodeProperties } from 'n8n-workflow';
import { getApiV1CalendarAggregationsGetAllFields } from './aggregations/getAll/description';

export const calendarOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['calendar'],
			},
		},
		options: [
			{
				name: 'Get Calendar Aggregations',
				value: 'getApiV1CalendarAggregations',
				description: 'Display aggregations of shifts and absences',
				action: 'Get calendar aggregations',
			},
		],
		default: 'getApiV1CalendarAggregations',
		noDataExpression: true,
	},

	...getApiV1CalendarAggregationsGetAllFields,
];
