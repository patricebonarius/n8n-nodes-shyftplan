import { INodeProperties } from 'n8n-workflow';
        export const getApiV1PositionsGetAllFields: INodeProperties[] = [
        {
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1Positions'],
                    resource: ['positions'],
                },
            },
            options: [{
                            displayName: 'Company ID', 
                            name: 'company_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "EnterFilter for single Company ID", 
                        },
{
                            displayName: 'Page', 
                            name: 'page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "EnterPages starts with 1", 
                        },
{
                            displayName: 'Per Page', 
                            name: 'per_page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "EnterBetween 1 and 1000", 
                        },
{
                            displayName: 'Updated After', 
                            name: 'updated_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "EnterReturn all records which are updated after", 
                        },
{
                            displayName: 'Created After', 
                            name: 'created_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "EnterReturn all records which are created after", 
                        },
{
                            displayName: 'Updated Before', 
                            name: 'updated_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "EnterReturn all records which are updated before", 
                        },
{
                            displayName: 'Created Before', 
                            name: 'created_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "EnterReturn all records which are created before", 
                        },
{
                            displayName: 'ID', 
                            name: 'id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "EnterFilter for single Position ID", 
                        },
{
                            displayName: 'IDs[]', 
                            name: 'idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "EnterFilter an array of Position ID", 
                        },
{
                            displayName: 'Company IDs[]', 
                            name: 'company_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "EnterFilter an array of Company ID", 
                        },
	],
    },];