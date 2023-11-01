import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1ShiftsShiftIdShiftBreaksIdDeleteFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1ShiftsShiftIdShiftBreaksId' 
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
                            'deleteApiV1ShiftsShiftIdShiftBreaksId' 
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
                            'deleteApiV1ShiftsShiftIdShiftBreaksId' 
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
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['deleteApiV1ShiftsShiftIdShiftBreaksId'],
                    resource: ['shifts'],
                },
            },
            options: [	],
    },];