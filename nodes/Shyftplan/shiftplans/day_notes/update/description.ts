import { INodeProperties } from 'n8n-workflow';
        export const putApiV1ShiftplansShiftplanIdDayNotesIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
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
                    displayName: 'title', 
                    name: 'title',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Day note title', 
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
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Day note start date', 
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
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Day note end date', 
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
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: '', 
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
                            'putApiV1ShiftplansShiftplanIdDayNotesId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: '', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['putApiV1ShiftplansShiftplanIdDayNotesId'],
                    resource: ['shiftplans'],
                },
            },
            options: [{
                    displayName: 'description', 
                    name: 'description',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Day note description', 
                },
	],
    },];