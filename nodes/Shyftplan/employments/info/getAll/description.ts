import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmploymentsInfoGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmploymentsInfo' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
                },
{
                    displayName: 'Filters[start Date]', 
                    name: 'filters[start_date]',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmploymentsInfo' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Start date in ISO 8601 format with time and UTC offset', 
                },
{
                    displayName: 'Filters[end Date]', 
                    name: 'filters[end_date]',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmploymentsInfo' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'End date in ISO 8601 format with time and UTC offset', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1EmploymentsInfo'],
                    resource: ['employments'],
                },
            },
            options: [{
                    displayName: 'page', 
                    name: 'page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Page no', 
                },
{
                    displayName: 'Per Page', 
                    name: 'per_page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Total employees page page', 
                },
{
                    displayName: 'Filters[employment IDs][]', 
                    name: 'filters[employment_ids][]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Employment IDs', 
                },
{
                    displayName: 'Filters[location IDs][]', 
                    name: 'filters[location_ids][]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Location IDs', 
                },
{
                    displayName: 'Filters[locations Position_IDs][]', 
                    name: 'filters[locations_position_ids][]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Locations position IDs', 
                },
{
                    displayName: 'Filters[shift Rotation_group_IDs][]', 
                    name: 'filters[shift_rotation_group_ids][]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Shift rotation group IDs', 
                },
{
                    displayName: 'Filters[search String]', 
                    name: 'filters[search_string]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Search employee by the name or staff number', 
                },
{
                    displayName: 'Filters[tag IDs][]', 
                    name: 'filters[tag_ids][]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Filter by an array of Employee Attribute IDs', 
                },
{
                    displayName: 'Sort Name', 
                    name: 'sort_name',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Sorting param', 
                },
{
                    displayName: 'Sort Direction', 
                    name: 'sort_direction',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Sorting direction', 
                },
	],
    },];