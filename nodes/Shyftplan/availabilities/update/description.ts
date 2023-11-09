import { INodeProperties } from 'n8n-workflow';
        export const putApiV1AvailabilitiesAvailabilityIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Availability ID', 
                    name: 'availability_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Availability id",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
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
                    description: "Start of the Availability (rounded to steps of 15 minutes)",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
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
                    description: "End of the Availability (rounded to steps of 15 minutes)",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'OverrIDe', 
                    name: 'override',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: "Whether Destroy conflicting availabilities",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Available', 
                    name: 'available',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: "Whether Is the Employee available or inavailable",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Update All', 
                    name: 'update_all',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: "Whether Set to true to update all records of repeating event",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AvailabilitiesAvailabilityId' 
                            ], 
                            resource: [
                                'availabilities'
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
                    operation: ['putApiV1AvailabilitiesAvailabilityId'],
                    resource: ['availabilities'],
                },
            },
            options: [{
                            displayName: 'Company ID', 
                            name: 'company_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Company ID", 
                        },
	],
    },];