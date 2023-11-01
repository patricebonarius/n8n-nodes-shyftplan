import { INodeProperties } from 'n8n-workflow';
        export const patchApiV1ShiftsShiftIdShiftBreaksIdPatchFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsShiftIdShiftBreaksId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company Id', 
                },
{
                    displayName: 'Shift ID', 
                    name: 'shift_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsShiftIdShiftBreaksId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shift ID', 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsShiftIdShiftBreaksId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shift break ID', 
                },
{
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsShiftIdShiftBreaksId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shift break start time', 
                },
{
                    displayName: 'Ends At', 
                    name: 'ends_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsShiftIdShiftBreaksId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shift break start time', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
                    resource: ['shifts'],
                },
            },
            options: [	],
    },];