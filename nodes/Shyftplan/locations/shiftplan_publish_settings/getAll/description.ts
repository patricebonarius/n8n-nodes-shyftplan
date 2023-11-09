import { INodeProperties } from 'n8n-workflow';
        export const getApiV1LocationsIdShiftplanPublishSettingsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of the Company",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1LocationsIdShiftplanPublishSettings' 
                            ], 
                            resource: [
                                'locations'
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
                    description: "ID of the Location",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1LocationsIdShiftplanPublishSettings' 
                            ], 
                            resource: [
                                'locations'
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
                    operation: ['getApiV1LocationsIdShiftplanPublishSettings'],
                    resource: ['locations'],
                },
            },
            options: [	],
    },];