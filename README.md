# Roll-royce Challenge Business Network

> This is the "Roll-royce Challenge" of Hyperledger Composer samples, which demonstrates the core functionality of Hyperledger Composer by changing the value of an asset.

This business network defines:

**Participant**
`Requestor`, `Worker`, `Admin`, `Manager`, `Operator`, `IoTserver`

**Asset**
`WorkRequest`, `Department`, `Project`, `TaskCard`, `TaskCardTitle`, `WorkInstruction`, `CustomerInformation`, `WorkscopeTask`, `DeviceReading`

**Transaction**
`AdminCreateDepartment`, `AdminCreateProject`, `RequesterCreateWorkRequest`, `ManagerCreateTaskCard`, `CreateTaskCardTitle`, `CreateWorkInstruction`, `CreateCustomerInformation`, `CreateWorkscopeTask`, `CreateDeviceReading`, `UpdateDepartment`, `UpdateProject`, `RequesterUpdateWorkRequest`, `AdminUpdateWorkRequest`, `ManagerUpdateWorkRequest`, `ManagerUpdateTaskCard`, `WorkerUpdateTaskCard`, `UpdateTaskCardTitle`, `UpdateWorkInstruction`,`UpdateCustomerInformation`, `UpdateWorkscopeTask`, `ListDepartments`, `ListProjects`, `ListTaskCardTitle`, `AdminWorkRequestList`, `ManagerWorkRequestList`, `RequesterWorkRequestList`, `WorkerTaskCardList`, `ManagerTaskCardList`, `DeleteTaskCardTitle`

**Event**
`AdminCreateDepartmentEvent`, `AdminCreateProjectEvent`, `RequesterCreateWorkRequestEvent`, `ManagerCreateTaskCardEvent`, `CreateTaskCardTitleEvent`, `CreateWorkInstructionEvent`, `CreateCustomerInformationEvent`, `CreateWorkscopeTaskEvent`, `CreateDeviceReadingEvent`, `UpdateDepartmentEvent`, `UpdateProjectEvent`, `RequesterUpdateWorkEvent`, `AdminUpdateWorkEvent`, `ManagerUpdateWorkEvent`, `ManagerUpdateTaskCardEvent`, `WorkerUpdateTaskCardEvent`, `UpdateTaskCardTitleEvent`, `UpdateWorkInstructionEvent`, `UpdateCustomerInformationEvent`, `UpdateWorkscopeTaskEvent`, `ListDepartmentsEvent`, `ListProjectsEvent`, `ListTaskCardTitleEvent`, `AdminWorkRequestListEvent`, `ManagerWorkRequestListEvent`, `RequesterWorkRequestListEvent`, `WorkerTaskCardListEvent`, `ManagerTaskCardListEvent`, `DeleteTaskCardTitleEvent`

Admin can create the departmet and project assets with `AdminCreateDepartment` and `AdminCreateProject` transactions,these assets can be edited with `UpdateDepartment` and  `UpdateProject` transactions. Requester can create the `WorkRequest` asset with `RequesterCreateWorkRequest` transaction and then Admin can disable work request with `AdminUpdateWorkRequest` transaction, the Manager can update work request completion with `ManagerUpdateWorkRequest` transaction. Manager can create the task card with `ManagerCreateTaskCard` transaction and cancel that with `ManagerUpdateTaskCard` transaction.
Manager and Admin can create the task card title with `CreateTaskCardTitle` transaction and update that with `UpdateTaskCardTitle` transaction, also using the `DeleteTaskCardTitle` transaction to delete the task card title. We can use these transactions `ListDepartments`, `ListProjects`and `ListTaskCardTitle` to get all the department, project and task card title assets. Admin can get the work request assets with `AdminWorkRequestList` transaction. Manager and Requester can get his own work request assets with `ManagerWorkRequestList` and `RequesterWorkRequestList` transactions. Worker and Manager can get his own task card assets with `WorkerTaskCardList` and `ManagerTaskCardList` transactions. Manager and Operator can create the work instruction, customer information and workscope task assets with `CreateWorkInstruction`, `CreateCustomerInformation` and `CreateWorkscopeTask` transactions, aslo using the `UpdateWorkInstruction`, `UpdateCustomerInformation` and `UpdateWorkscopeTask` transactions to update these assets. IoTserver can create device reading asset with `CreateDeviceReading` transaction.

To test this Business Network Definition in the **Test** tab:

Create a `Admin` participant:

```
{
  "$class": "roll_royce.challenge.com.Admin",
  "userID": "a01",
  "username": "admin01",
  "email": "admin01@test",
  "created": "2019-09-11T02:18:07.572Z",
  "disabled": false,
  "department": "resource:roll_royce.challenge.com.Department#d01"
}
```

Submit a `AdminCreateDepartment` transaction:

```
{
  "$class": "roll_royce.challenge.com.AdminCreateDepartment",
  "admin": "resource:roll_royce.challenge.com.Admin#a01",
  "departmentID": "d02",
  "departmentName": "department02",
  "manager": "resource:roll_royce.challenge.com.Manager#m01"
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry and that a `AdminCreateDepartmentEvent` has been emitted. We can see the `Department` asset which includes an assets that "departmentID" is "d02".

Congratulations!

## License <a name="license"></a>
Hyperledger Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the LICENSE file. Hyperledger Project documentation files are made available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
