import CustomSelect from "../../molecules/CustomSelect/CustomSelect";
// import { CheckBox } from "../../molecules/CheckBox/CheckBox";
import { Radio } from "../../molecules/Radio/Radio";
import Search from "../../layouts/Search/Search";
import { SampleInput } from "../../molecules/customInput/SampleInput";
import { ChartsComponent } from "../../molecules/Charts/ChartComponent";
import { Authenticate } from "../../uidashboard/Authenticate";
import { Errors } from "../../uidashboard/Errors";
import { OffRamp } from "../../molecules/OffRamp/OffRamp";
import VerticalLinearStepper from "../../molecules/Stepper/VerticalLinearStepper";
import RestrictForm from "../../admin/restrictForm";
import Notification from "../../layouts/Header/Notification";
import { Priority } from '../../ManagePriority/Priority'
import WorkFlow  from "../../molecules/workflow/WorkFlow";
import { FileExtension } from '../../FileExtensions/FileExtension';
import {AdminDashboard} from '../../admin/Admin';
import {Dashboard} from '../../admin/Dashboard';
import DynamicWorkFlow from "../../molecules/workflow/DynamicWorkFlow";
import { WorkFlowList } from "../../molecules/workflow/WorkFlowList";
export const routes: any = [
  //routes
  { path: "customSelect", element: <CustomSelect /> },
  // { path: "checkbox", element: <CheckBox /> },
  { path: "radio", element: <Radio /> },
  { path: "search", element: <Search /> },
  { path: "sampleInput", element: <SampleInput /> },
  { path: "charts", element: <ChartsComponent /> },
  { path: "Errors", element: <Errors /> },
  // { path: "admin/Priorities", element: <Priority /> },
  {
    path: 'admin',
    element: <AdminDashboard />,
    children: [
      // { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard', element: <WorkFlow /> },
      { path: 'Priorities', element: <Priority /> },
      { path: 'filextensions', element: <FileExtension /> },
      { path: 'workflow', element: <WorkFlowList /> },
      { path: 'newWorkflow', element: <DynamicWorkFlow /> },
      { path: "restrictform", element: <RestrictForm /> },
      // Add more nested routes here if needed
    ]
  },

  { path: "dashboard", element: <Authenticate /> },
  // { path: "admin/dashboard", element: <AdminDashboard /> },
  // { path: "admin/filextensions", element: <FileExtension /> },
  { path: "*", element: <OffRamp /> },
  { path: "stepper", element: <VerticalLinearStepper /> },

  { path: "notification", element: <Notification /> },
  // { path: "admin/workflow", element: <WorkFlow /> }
];
