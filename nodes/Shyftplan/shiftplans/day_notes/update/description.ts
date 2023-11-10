import { INodeProperties } from 'n8n-workflow';
        export const putApiV1ShiftplansShiftplanIdDayNotesIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Company ID",
                    required: true,
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
                },
{
                    displayName: 'Title', 
                    name: 'title',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Enter Day note title",
                    required: true,
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
                },
{
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Enter Day note start date",
                    required: true,
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
                },
{
                    displayName: 'Ends At', 
                    name: 'ends_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Enter Day note end date",
                    required: true,
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
                },
{
                    displayName: 'Shiftplan ID', 
                    name: 'shiftplan_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter ",
                    required: true,
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
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter ",
                    required: true,
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
                            displayName: 'Description', 
                            name: 'description',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Enter Day note description", 
                        },
	],
    },];