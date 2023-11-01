import { INodeProperties } from 'n8n-workflow';
        export const getApiV1ShiftplansShiftplanIdDayNotesGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1ShiftplansShiftplanIdDayNotes' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
                },
{
                    displayName: 'Shiftplan ID', 
                    name: 'shiftplan_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1ShiftplansShiftplanIdDayNotes' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shiftplan ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1ShiftplansShiftplanIdDayNotes'],
                    resource: ['shiftplans'],
                },
            },
            options: [{
                    displayName: 'page', 
                    name: 'page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Pages starts with 1', 
                },
{
                    displayName: 'Per Page', 
                    name: 'per_page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Between 1 and 1000', 
                },
	],
    },];