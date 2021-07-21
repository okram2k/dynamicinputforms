const data = [
  {
    id: 0,
    name: "claim_number",
    label: "Claim Number",
    default: "",
    required: true,
    type: "text",
  },
  {
    id: 1,
    name: "Coverage",
    label: "Coverage",
    default: "",
    required: false,
    type: "text",
  },
  {
    id: 2,
    name: "Notes",
    label: "Notes",
    default: "Nothing of note.",
    required: false,
    type: "text",
  },
  {
    id: 3,
    name: "Producer",
    label: "Producer",
    default: "",
    required: false,
    type: "text",
  },
  {
    id: 4,
    name: "date",
    label: "Date",
    default: new Date().toISOString(),
    required: false,
    type: "date",
  },
  {
    id: 5,
    name: "date_received",
    label: "Date Received",
    default: new Date().toISOString(),
    required: true,
    type: "date",
  },
  {
    id: 6,
    name: "yearOfAccount",
    label: "Year of Account",
    default: new Date().toISOString(),
    required: false,
    type: "year",
  },
  {
    id: 7,
    name: "LLR Number",
    label: "LLR Number",
    default: "",
    required: false,
    type: "text",
  },
  {
    id: 8,
    name: "Point of Entry",
    label: "Point of Entry",
    default: "",
    required: false,
    type: "text",
  },
  {
    id: 9,
    name: "Loss Location",
    label: "Loss Location",
    default: "",
    required: false,
    type: "text",
  },
  {
    id: 10,
    name: "DistanceByCrow",
    label: "Distance By Crow",
    default: 0,
    required: false,
    type: "number",
  },
  {
    id: 11,
    name: "DistanceByRoad",
    label: "Distance By Road",
    default: 0,
    required: false,
    type: "number",
  },
  {
    id: 12,
    name: "MaxMiles",
    label: "Max Miles Allowed",
    default: 0,
    required: false,
    type: "number",
  },
  {
    id: 13,
    name: "RO Incurred on FNOL",
    label: "RO Incurred on FNOL",
    default: 0,
    required: false,
    type: "number",
  },
  {
    id: 14,
    name: "insured",
    label: "Insured",
    default: false,
    required: false,
    type: "checkBox",
  },
];
export default data;