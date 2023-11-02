import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AvailabilitiesAvailabilityIdGetFields: INodeProperties[] = [
        {
                    displayName: 'Availability ID', 
                    name: 'availability_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AvailabilitiesAvailabilityId' 
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
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1AvailabilitiesAvailabilityId'],
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