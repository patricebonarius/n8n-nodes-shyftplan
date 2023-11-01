import { INodeProperties } from 'n8n-workflow';
        export const putApiV2ShiftsIdPaygradesUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV2ShiftsIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
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
                            'putApiV2ShiftsIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
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
                    operation: ['putApiV2ShiftsIdPaygrades'],
                    resource: ['shifts'],
                },
            },
            options: [{
                    displayName: 'Update Connected', 
                    name: 'update_connected',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherUpdate connected shifts if value is true', 
                },
{
                    displayName: 'Paygrades[][paygrade Type_ID]', 
                    name: 'paygrades[][paygrade_type_id]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
{
                    displayName: 'paygrades[][value]', 
                    name: 'paygrades[][value]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
{
                    displayName: 'Paygrades[][child Paygrades[]][][paygrade_type_ID]', 
                    name: 'paygrades[][child_paygrades[]][][paygrade_type_id]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
{
                    displayName: 'Paygrades[][child Paygrades[]][][value]', 
                    name: 'paygrades[][child_paygrades[]][][value]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
	],
    },];