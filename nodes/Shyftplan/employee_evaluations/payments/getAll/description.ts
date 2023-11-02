import { INodeProperties } from "n8n-workflow";
export const getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllFields: INodeProperties[] =
  [
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "ID of the Company",
    },
    {
      displayName: "Staff Shift_ID",
      name: "staff_shift_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Additional Fields",
      name: "additionalFields",
      type: "collection",
      placeholder: "Add Field",
      default: {},
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      options: [],
    },
  ];
