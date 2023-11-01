import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmploymentsIdAvailabilitiesGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmploymentsIdAvailabilities' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Start Date to get availabilities from', 
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
                            'getApiV1EmploymentsIdAvailabilities' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'End Date to get availabilities from', 
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
                            'getApiV1EmploymentsIdAvailabilities' 
                        ], 
                        resource: [
                            'employments'
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
                    operation: ['getApiV1EmploymentsIdAvailabilities'],
                    resource: ['employments'],
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
{
                    displayName: 'Availability IDs[]', 
                    name: 'availability_ids[]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Availabilities Ids to filter for', 
                },
{
                    displayName: 'page', 
                    name: 'page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Page to fetch for pagination', 
                },
{
                    displayName: 'Per Page', 
                    name: 'per_page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Per Page items for pagination', 
                },
	],
    },];