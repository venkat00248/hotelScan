import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import {entityReducer } from './entityReducer'
import { ticketReducer } from "./ticketsReducer";
import { dateRangeReducer } from "./dateRangeReducer";
import { ticketFlag } from "./ticketFlag";
import { ticketUnassingFlag } from "./ticketUnassingFlag";
import { setTileFlag } from "./setTileFlag";
import { ticketStatusCount } from "./ticketStatusCount";
import { convasFlag } from "./convasFlag";
import { toogleNotification } from "./toogleNotification";

const reducers = combineReducers({
  allReducers: themeReducer,
  entityReducer:entityReducer,
  ticketReducer:ticketReducer,
  dateRangeReducer:dateRangeReducer,
  ticketFlag:ticketFlag,
  ticketUnassingFlag:ticketUnassingFlag,
  ticketStatusCount:ticketStatusCount,
  setTileFlag:setTileFlag,
  convasFlag:convasFlag,
  toogleNotification:toogleNotification
});
export default reducers;