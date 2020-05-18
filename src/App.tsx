import React from 'react';
import './App.css';

import { Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
//import{ DataManager, WebApiAdaptor } from '@sy'
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations'

class App extends React.Component {
  // private localData : EventSettingsModel = {
  //   dataSource: [{
  //     EndTime: new Date(2020, 4, 11, 6, 30),
  //     StartTime: new Date(2020, 4, 11, 4, 0),
  //     Subject: 'Testing',
  //     IsAllDay: true,
  //     RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
  //   }]
  // }
 private localData = [{
  Id: 1,
  Subject: 'Cardiac Surgery',
  StartTime: new Date(2020, 4, 18, 4, 0),
  EndTime: new Date(2020, 4, 18, 5, 0)
 },
 {
  Id: 2,
  Subject: 'Cardiac Surgery',
  StartTime: new Date(2020, 4, 18, 6, 0),
  EndTime: new Date(2020, 4, 18, 7, 0)
 }]
  public render() {
    return (<div>
      <div className = 'scheduler-title-container'>Dr Sherry White</div>
      <div className = 'scheduler-component'>
      <ScheduleComponent currentView='Week' selectedDate={new Date(2020, 4, 18)}
    eventSettings={{ dataSource:this.localData }}>
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
    </ScheduleComponent>
      </div>
      <div className = 'treeview-title-container'>Patient List</div>
      <div className = 'treeview-component'></div>
      <TreeViewComponent />
    </div>) 
  }
}
export default App;
