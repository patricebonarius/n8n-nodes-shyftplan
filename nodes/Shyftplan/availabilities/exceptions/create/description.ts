import { INodeProperties } from 'n8n-workflow';
        export const postApiV1AvailabilitiesAvailabilityIdExceptionsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Availability ID', 
                    name: 'availability_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1AvailabilitiesAvailabilityIdExceptions' 
                        ], 
                        resource: [
                            'availabilities'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Availability id', 
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
                            'postApiV1AvailabilitiesAvailabilityIdExceptions' 
                        ], 
                        resource: [
                            'availabilities'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Start of the selected Availability out of a repeated Availability which should be counted as an exception (must fit the exact availability start)', 
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
                            'postApiV1AvailabilitiesAvailabilityIdExceptions' 
                        ], 
                        resource: [
                            'availabilities'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'End of the selected Availability out of a repeated Availability which should be counted as an exception (must fit the exact availability start)', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1AvailabilitiesAvailabilityIdExceptions'],
                    resource: ['availabilities'],
                },
            },
            options: [{
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
	],
    },];