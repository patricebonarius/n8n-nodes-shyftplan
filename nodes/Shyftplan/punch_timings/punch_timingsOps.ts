import { INodeProperties } from 'n8n-workflow';import { postApiV1PunchTimingsPunchTimingIdPunchBreaksCreateFields } from './punch_breaks/create/description';import { putApiV1PunchTimingsPunchTimingIdPunchBreaksIdUpdateFields } from './punch_breaks/update/description';import { postApiV1PunchTimingsShiftCreateCreateFields } from './shift_create/create/description';import { postApiV1PunchTimingsStartCreateFields } from './start/create/description';import { getApiV1PunchTimingsFetchLocationsPositionsGetAllFields } from './fetch_locations_positions/getAll/description';import { getApiV1PunchTimingsPunchTimeGetAllFields } from './punch_time/getAll/description';import { getApiV1PunchTimingsRecordGetAllFields } from './record/getAll/description';import { getApiV1PunchTimingsGetAllFields } from './getAll/description';import { putApiV1PunchTimingsIdUpdateFields } from './update/description';

export const punch_timingsOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['punch_timings'],
                },
            },
            options: [{
                    name: 'Post Punch Timings Punch Timing By ID Punch Breaks',
                    value: 'postApiV1PunchTimingsPunchTimingIdPunchBreaks',
                    description: 'Create a punch break',
                    action: 'Post punch timings punch timing by ID punch breaks',
                }, {
                    name: 'Put Punch Timings Punch Timing By ID Punch Breaks Id',
                    value: 'putApiV1PunchTimingsPunchTimingIdPunchBreaksId',
                    description: 'Update a punch break',
                    action: 'Put punch timings punch timing by ID punch breaks id',
                }, {
                    name: 'Post Punch Timings Shift Create',
                    value: 'postApiV1PunchTimingsShiftCreate',
                    description: 'Create a shift',
                    action: 'Post punch timings shift create',
                }, {
                    name: 'Post Punch Timings Start',
                    value: 'postApiV1PunchTimingsStart',
                    description: 'Start punchtime session',
                    action: 'Post punch timings start',
                }, {
                    name: 'Get Punch Timings Fetch Locations Positions',
                    value: 'getApiV1PunchTimingsFetchLocationsPositions',
                    description: 'Fetch location positions',
                    action: 'Get punch timings fetch locations positions',
                }, {
                    name: 'Get Punch Timings Punch Time',
                    value: 'getApiV1PunchTimingsPunchTime',
                    description: 'Punch in',
                    action: 'Get punch timings punch time',
                }, {
                    name: 'Get Punch Timings Record',
                    value: 'getApiV1PunchTimingsRecord',
                    description: 'Fetch status',
                    action: 'Get punch timings record',
                }, {
                    name: 'Get Punch Timings',
                    value: 'getApiV1PunchTimings',
                    description: 'Get current punch time company',
                    action: 'Get punch timings',
                }, {
                    name: 'Put Punch Timings By ID',
                    value: 'putApiV1PunchTimingsId',
                    description: 'Updates the punch time',
                    action: 'Put punch timings by ID',
                }, ],
    default: 'putApiV1PunchTimingsId',
    noDataExpression: true,
    },

            ... postApiV1PunchTimingsPunchTimingIdPunchBreaksCreateFields,
            
            ... putApiV1PunchTimingsPunchTimingIdPunchBreaksIdUpdateFields,
            
            ... postApiV1PunchTimingsShiftCreateCreateFields,
            
            ... postApiV1PunchTimingsStartCreateFields,
            
            ... getApiV1PunchTimingsFetchLocationsPositionsGetAllFields,
            
            ... getApiV1PunchTimingsPunchTimeGetAllFields,
            
            ... getApiV1PunchTimingsRecordGetAllFields,
            
            ... getApiV1PunchTimingsGetAllFields,
            
            ... putApiV1PunchTimingsIdUpdateFields,
            ];
