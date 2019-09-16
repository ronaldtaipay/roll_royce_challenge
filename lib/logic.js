/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Admin create Department asset.
 * @param {roll_royce.challenge.com.AdminCreateDepartment} createDepartment
 * @transaction
 */
async function CreateDepartment(createDepartment) {
  let newDepartment;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.Department')
        .then(function(departmentRegistry) {
          newDepartment = factory.newResource('roll_royce.challenge.com', 'Department', createDepartment.departmentID);
          newDepartment.departmentID = createDepartment.departmentID;
          newDepartment.departmentName = createDepartment.departmentName;
          newDepartment.manager = createDepartment.manager;
          return departmentRegistry.add(newDepartment);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'AdminCreateDepartmentEvent');
          event.department = newDepartment;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Admin create Project asset.
 * @param {roll_royce.challenge.com.AdminCreateProject} createProject
 * @transaction
 */
async function CreateProject(createProject) {
  let newProject;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.Project')
        .then(function(projectRegistry) {
          newProject = factory.newResource('roll_royce.challenge.com', 'Project', createProject.projectID);
          newProject.projectID = createProject.projectID;
          newProject.projectName = createProject.projectName;
          newProject.manager = createProject.manager;
          return projectRegistry.add(newProject);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'AdminCreateProjectEvent');
          event.project = newProject;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Requestor create WorkRequest asset.
 * @param {roll_royce.challenge.com.RequestorCreateWorkRequest} createWorkRequest
 * @transaction
 */
async function CreateWorkRequest(createWorkRequest) {
  let newWorkRequest;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestRegistry) {
          newWorkRequest = factory.newResource('roll_royce.challenge.com', 'WorkRequest', createWorkRequest.entryID);
          newWorkRequest.entryID = createWorkRequest.entryID;
          newWorkRequest.taskName = createWorkRequest.taskName;
          newWorkRequest.taskPriority = createWorkRequest.taskPriority;
          newWorkRequest.description = createWorkRequest.description;
          newWorkRequest.deadline = createWorkRequest.deadline;
          newWorkRequest.completion = createWorkRequest.completion;
          newWorkRequest.disable = createWorkRequest.disable;
          newWorkRequest.created = createWorkRequest.created;
          newWorkRequest.location = createWorkRequest.location;
          newWorkRequest.referenceNumber = createWorkRequest.referenceNumber;
          newWorkRequest.ACtailNumber = createWorkRequest.ACtailNumber;
          newWorkRequest.enginePositionNumber = createWorkRequest.enginePositionNumber;
          newWorkRequest.ESN = createWorkRequest.ESN;
          newWorkRequest.lineAdditions = createWorkRequest.lineAdditions;
          newWorkRequest.actions = createWorkRequest.actions;
          newWorkRequest.materialsNeeded = createWorkRequest.materialsNeeded;
          newWorkRequest.specialInstructions = createWorkRequest.specialInstructions;
          newWorkRequest.hangarAdditions = createWorkRequest.hangarAdditions;
          newWorkRequest.aircraftCheckName = createWorkRequest.aircraftCheckName;
          newWorkRequest.documentReference = createWorkRequest.documentReference;
          newWorkRequest.E4NotificationNumber = createWorkRequest.E4NotificationNumber;
          newWorkRequest.componentChanges = createWorkRequest.componentChanges;
          newWorkRequest.EXEJE8Notification = '' ? '' : createWorkRequest.EXEJE8Notification;
          newWorkRequest.PNon = '' ? '' : createWorkRequest.PNon;
          newWorkRequest.PNoff = '' ? '' : createWorkRequest.PNoff;
          newWorkRequest.BFEShortages = '' ? '' : createWorkRequest.BFEShortages;
          newWorkRequest.equipmentNumber = createWorkRequest.equipmentNumber;
          newWorkRequest.requestorName = createWorkRequest.requestorName;
          newWorkRequest.responder = createWorkRequest.responder;
          newWorkRequest.manager = createWorkRequest.manager;
          newWorkRequest.department = createWorkRequest.department;
          newWorkRequest.project = createWorkRequest.project;
          return workRequestRegistry.add(newWorkRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'RequestorCreateWorkRequestEvent');
          event.workRequest = newWorkRequest;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager create TaskCard asset.
 * @param {roll_royce.challenge.com.ManagerCreateTaskCard} createTaskCard
 * @transaction
 */
async function ManagerCreateTaskCard(createTaskCard) {
  let newTaskCard;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.TaskCard')
        .then(function(taskCardRegistry) {
          newTaskCard = factory.newResource('roll_royce.challenge.com', 'TaskCard', createTaskCard.cardID);
          newTaskCard.cardID = createTaskCard.cardID;
          newTaskCard.details = createTaskCard.details;
          newTaskCard.created = createTaskCard.created;
          newTaskCard.updated = createTaskCard.updated;
          newTaskCard.completed = createTaskCard.completed;
          newTaskCard.cancelled = createTaskCard.cancelled;
          newTaskCard.worker = createTaskCard.worker;
          newTaskCard.manager = createTaskCard.manager;
          newTaskCard.taskCardTitle = createTaskCard.taskCardTitle;
          newTaskCard.workRequest = createTaskCard.workRequest;
          return taskCardRegistry.add(newTaskCard);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'ManagerCreateTaskCardEvent');
          event.taskCard = newTaskCard;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager create TaskCard asset.
 * @param {roll_royce.challenge.com.CreateTaskCardTitle} createTaskCardTitle
 * @transaction
 */
async function CreateTaskCardTitle(createTaskCardTitle) {
  let newTaskCardTitle;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.TaskCardTitle')
        .then(function(taskCardTitleRegistry) {
          newTaskCardTitle = factory.newResource('roll_royce.challenge.com', 'TaskCardTitle', createTaskCardTitle.titleID);
          newTaskCardTitle.titleID = createTaskCardTitle.titleID;
          newTaskCardTitle.title = createTaskCardTitle.title;
          newTaskCardTitle.created = createTaskCardTitle.created;
          newTaskCardTitle.updated = createTaskCardTitle.updated;
          newTaskCardTitle.manager = createTaskCardTitle.manager;
          newTaskCardTitle.admin = createTaskCardTitle.admin;
          return taskCardTitleRegistry.add(newTaskCardTitle);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'CreateTaskCardTitleEvent');
          event.taskCardTitle = newTaskCardTitle;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager and Operator create WorkInstruction asset.
 * @param {roll_royce.challenge.com.CreateWorkInstruction} createWorkInstruction
 * @transaction
 */
async function CreateWorkInstruction(createWorkInstruction) {
  let newWorkInstruction;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.WorkInstruction')
        .then(function(workInstructionRegistry) {
          newWorkInstruction = factory.newResource('roll_royce.challenge.com', 'WorkInstruction', createWorkInstruction.instrctionID);
          newWorkInstruction.instrctionID = createWorkInstruction.instrctionID;
          newWorkInstruction.workscopeContactDetails = createWorkInstruction.workscopeContactDetails;
          newWorkInstruction.revision = createWorkInstruction.revision;
          newWorkInstruction.networkNumber = createWorkInstruction.networkNumber;
          newWorkInstruction.activity = createWorkInstruction.activity;
          newWorkInstruction.originatorName = createWorkInstruction.originatorName;
          newWorkInstruction.date = createWorkInstruction.date;
          newWorkInstruction.customerInformation = createWorkInstruction.customerInformation;
          newWorkInstruction.workscopeTask = createWorkInstruction.workscopeTask;
          return workInstructionRegistry.add(newWorkInstruction);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'CreateWorkInstructionEvent');
          event.workInstruction = newWorkInstruction;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager and Operator create CustomerInformation asset.
 * @param {roll_royce.challenge.com.CreateCustomerInformation} createCustomerInformation
 * @transaction
 */
async function CreateCustomerInformation(createCustomerInformation) {
  let newCustomerInformation;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.CustomerInformation')
        .then(function(customerInformationRegistry) {
          newCustomerInformation = factory.newResource('roll_royce.challenge.com', 'CustomerInformation', createCustomerInformation.customerInformationID);
          newCustomerInformation.customerInformationID = createCustomerInformation.customerInformationID;
          newCustomerInformation.aircraftRegistration = createCustomerInformation.aircraftRegistration;
          newCustomerInformation.engineType = createCustomerInformation.engineType;
          newCustomerInformation.OnOffWing = createCustomerInformation.OnOffWing;
          newCustomerInformation.wingPosition = createCustomerInformation.wingPosition;
          newCustomerInformation.taskLocation = createCustomerInformation.taskLocation;
          newCustomerInformation.taskStart = createCustomerInformation.taskStart;
          newCustomerInformation.taskEnd = createCustomerInformation.taskEnd;
          newCustomerInformation.operator = createCustomerInformation.operator;
          return customerInformationRegistry.add(newCustomerInformation);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'CreateCustomerInformationEvent');
          event.customerInformation = newCustomerInformation;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager and Operator create WorkscopeTask asset.
 * @param {roll_royce.challenge.com.CreateWorkscopeTask} createWorkscopeTask
 * @transaction
 */
async function CreateWorkscopeTask(createWorkscopeTask) {
  let newWorkscopeTask;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.WorkscopeTask')
        .then(function(workscopeTaskRegistry) {
          newWorkscopeTask = factory.newResource('roll_royce.challenge.com', 'WorkscopeTask', createWorkscopeTask.workscopeTaskID);
          newWorkscopeTask.workscopeTaskID = createWorkscopeTask.workscopeTaskID;
          newWorkscopeTask.requestedTaskDescription = createWorkscopeTask.requestedTaskDescription;
          newWorkscopeTask.technicalDataReference = createWorkscopeTask.technicalDataReference;
          newWorkscopeTask.SIAtaskReference = createWorkscopeTask.SIAtaskReference;
          newWorkscopeTask.additionalNotes = createWorkscopeTask.additionalNotes;
          newWorkscopeTask.costRateCharge = createWorkscopeTask.costRateCharge;
          newWorkscopeTask.costType = createWorkscopeTask.costType;
          newWorkscopeTask.workInstructionAcceptance = createWorkscopeTask.workInstructionAcceptance;
          newWorkscopeTask.invoicingInstructions = createWorkscopeTask.invoicingInstructions;
          return workscopeTaskRegistry.add(newWorkscopeTask);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'CreateWorkscopeTaskEvent');
          event.workscopeTask = newWorkscopeTask;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Admin or Manager update Department asset.
 * @param {roll_royce.challenge.com.UpdateDepartment} updateDepartment
 * @transaction
 */
async function UpdateDepartment(updateDepartment) {
  const departmentID = updateDepartment.department.departmentID;
  let theDepartment = '';
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.Department')
        .then(function(departmentAssetRegistry) {
          // Use departmentID to get the asset.
          return departmentAssetRegistry.get(departmentID);
        }).then(async function(department) {
          // Update the field and asset.
          theDepartment = department;
          department.departmentName = updateDepartment.departmentName;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.Department');
          await updateAsset.update(department);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateDepartmentEvent');
          event.department = theDepartment;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Admin or Manager update Project asset.
 * @param {roll_royce.challenge.com.UpdateProject} updateProject
 * @transaction
 */
async function UpdateProject(updateProject) {
  const projectID = updateProject.project.projectID;
  const factory = getFactory();
  let theProject = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.Project')
        .then(function(projectAssetRegistry) {
        // Use projectID to get the asset.
          return projectAssetRegistry.get(projectID);
        }).then(async function(project) {
        // Update the field and asset.
          theProject = project;
          project.projectName = updateProject.projectName;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.Project');
          await updateAsset.update(project);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateProjectEvent');
          event.project = theProject;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Admin update WorkRequest asset.
 * @param {roll_royce.challenge.com.AdminUpdateWorkRequest} updateWorkRequest
 * @transaction
 */
async function AdminUpdateWorkRequest(updateWorkRequest) {
  const entryID = updateWorkRequest.workRequest.entryID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use entryID to get the asset.
          return workRequestAssetRegistry.get(entryID);
        }).then(async function(workRequest) {
        // Update the field and asset.
          theWorkRequest = workRequest;
          workRequest.disable = updateWorkRequest.disable;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkRequest');
          await updateAsset.update(workRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'AdminUpdateWorkEvent');
          event.workRequest = theWorkRequest;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager update WorkRequest asset.
 * @param {roll_royce.challenge.com.ManagerUpdateWorkRequest} updateWorkRequest
 * @transaction
 */
async function ManagerUpdateWorkRequest(updateWorkRequest) {
  const entryID = updateWorkRequest.workRequest.entryID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use entryID to get the asset.
          return workRequestAssetRegistry.get(entryID);
        }).then(async function(workRequest) {
        // Update the field and asset.
          theWorkRequest = workRequest;
          workRequest.completion = updateWorkRequest.completion;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkRequest');
          await updateAsset.update(workRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'ManagerUpdateWorkEvent');
          event.workRequest = theWorkRequest;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manager update TaskCard asset.
 * @param {roll_royce.challenge.com.ManagerUpdateTaskCard} updateTaskCard
 * @transaction
 */
async function ManagerUpdateTaskCard(updateTaskCard) {
  const cardID = updateTaskCard.taskCard.cardID;
  const factory = getFactory();
  let theTaskCard = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.TaskCard')
        .then(function(taskCardAssetRegistry) {
        // Use cardID to get the asset.
          return taskCardAssetRegistry.get(cardID);
        }).then(async function(taskCard) {
        // Update the field and asset.
          theTaskCard = taskCard;
          taskCard.cancelled = updateTaskCard.cancelled;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.TaskCard');
          await updateAsset.update(taskCard);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'ManagerUpdateTaskCardEvent');
          event.taskCard = theTaskCard;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};


/**
 * Requestor update WorkRequest asset.
 * @param {roll_royce.challenge.com.RequestorUpdateWorkRequest} updateWorkRequest
 * @transaction
 */
async function RequestorUpdateWorkRequest(updateWorkRequest) {
  const entryID = updateWorkRequest.workRequest.entryID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use entryID to get the asset.
          return workRequestAssetRegistry.get(entryID);
        }).then(async function(workRequest) {
          // Update the field and asset.
          theWorkRequest = workRequest;

          workRequest.taskName = !updateWorkRequest.taskName ? workRequest.taskName : updateWorkRequest.taskName;
          workRequest.taskPriority = !updateWorkRequest.taskPriority ? workRequest.taskPriority : updateWorkRequest.taskPriority;
          workRequest.description = !updateWorkRequest.description ? workRequest.description : updateWorkRequest.description;
          workRequest.deadline = !updateWorkRequest.deadline ? workRequest.deadline : updateWorkRequest.deadline;
          workRequest.location = !updateWorkRequest.location ? workRequest.location : updateWorkRequest.location;
          workRequest.referenceNumber = !updateWorkRequest.referenceNumber ? workRequest.referenceNumber : updateWorkRequest.referenceNumber;
          workRequest.ACtailNumber = !updateWorkRequest.ACtailNumber ? workRequest.ACtailNumber : updateWorkRequest.ACtailNumber;
          workRequest.enginePositionNumber = !updateWorkRequest.enginePositionNumber ? workRequest.enginePositionNumber : updateWorkRequest.enginePositionNumber;
          workRequest.ESN = !updateWorkRequest.ESN ? workRequest.ESN : updateWorkRequest.ESN;
          workRequest.lineAdditions = !updateWorkRequest.lineAdditions ? workRequest.lineAdditions : updateWorkRequest.lineAdditions;
          workRequest.actions = !updateWorkRequest.actions ? workRequest.actions : updateWorkRequest.actions;
          workRequest.materialsNeeded = !updateWorkRequest.materialsNeeded ? workRequest.materialsNeeded : updateWorkRequest.materialsNeeded;
          workRequest.specialInstructions = !updateWorkRequest.specialInstructions ? workRequest.specialInstructions : updateWorkRequest.specialInstructions;
          workRequest.hangarAdditions = !updateWorkRequest.hangarAdditions ? workRequest.hangarAdditions : updateWorkRequest.hangarAdditions;
          workRequest.aircraftCheckName = !updateWorkRequest.aircraftCheckName ? workRequest.aircraftCheckName : updateWorkRequest.aircraftCheckName;
          workRequest.documentReference = !updateWorkRequest.documentReference ? workRequest.documentReference : updateWorkRequest.documentReference;
          workRequest.E4NotificationNumber = !updateWorkRequest.E4NotificationNumber ? workRequest.E4NotificationNumber : updateWorkRequest.E4NotificationNumber;
          workRequest.componentChanges = !updateWorkRequest.componentChanges ? workRequest.componentChanges : updateWorkRequest.componentChanges;
          workRequest.EXEJE8Notification = !updateWorkRequest.EXEJE8Notification ? workRequest.EXEJE8Notification : updateWorkRequest.EXEJE8Notification;
          workRequest.PNon = !updateWorkRequest.PNon ? workRequest.PNon : updateWorkRequest.PNon;
          workRequest.PNoff = !updateWorkRequest.PNoff ? workRequest.PNoff : updateWorkRequest.PNoff;
          workRequest.BFEShortages = !updateWorkRequest.BFEShortages ? workRequest.BFEShortages : updateWorkRequest.BFEShortages;
          workRequest.equipmentNumber = !updateWorkRequest.equipmentNumber ? workRequest.equipmentNumber : updateWorkRequest.equipmentNumber;

          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkRequest');
          await updateAsset.update(workRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'RequestorUpdateWorkEvent');
          event.workRequest = theWorkRequest;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Worker update TaskCard asset.
 * @param {roll_royce.challenge.com.WorkerUpdateTaskCard} updateTaskCard
 * @transaction
 */
async function WorkerUpdateTaskCard(updateTaskCard) {
  const cardID = updateTaskCard.taskCard.cardID;
  const factory = getFactory();
  let theTaskCard = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.TaskCard')
        .then(function(taskCardAssetRegistry) {
        // Use cardID to get the asset.
          return taskCardAssetRegistry.get(cardID);
        }).then(async function(taskCard) {
        // Update the field and asset.
          theTaskCard = taskCard;
          taskCard.completed = updateTaskCard.completed;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.TaskCard');
          await updateAsset.update(taskCard);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'WorkerUpdateTaskCardEvent');
          event.taskCard = theTaskCard;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Update TaskCardTitle asset.
 * @param {roll_royce.challenge.com.UpdateTaskCardTitle} updateTaskCardTitle
 * @transaction
 */
async function UpdateTaskCardTitle(updateTaskCardTitle) {
  const titleID = updateTaskCardTitle.taskCardTitle.titleID;
  const factory = getFactory();
  let theTaskCardTitle = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.TaskCardTitle')
        .then(function(taskCardTitleAssetRegistry) {
        // Use titleID to get the asset.
          return taskCardTitleAssetRegistry.get(titleID);
        }).then(async function(taskCardTitle) {
        // Update the field and asset.
          theTaskCardTitle = taskCardTitle;
          taskCardTitle.title = updateTaskCardTitle.title;
          taskCardTitle.created = updateTaskCardTitle.created;
          taskCardTitle.updated = updateTaskCardTitle.updated;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.TaskCardTitle');
          await updateAsset.update(taskCardTitle);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateTaskCardTitleEvent');
          event.taskCardTitle = theTaskCardTitle;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Operator and Manager update WorkInstruction asset.
 * @param {roll_royce.challenge.com.UpdateWorkInstruction} updateWorkInstruction
 * @transaction
 */
async function UpdateWorkInstruction(updateWorkInstruction) {
  const instrctionID = updateWorkInstruction.workInstruction.instrctionID;
  const factory = getFactory();
  let theWorkInstruction = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkInstruction')
        .then(function(workInstructionAssetRegistry) {
        // Use instrctionID to get the asset.
          return workInstructionAssetRegistry.get(instrctionID);
        }).then(async function(workInstruction) {
        // Update the field and asset.
          theWorkInstruction = workInstruction;
          theWorkInstruction.workscopeContactDetails = updateWorkInstruction.workscopeContactDetails;
          theWorkInstruction.revision = updateWorkInstruction.revision;
          theWorkInstruction.networkNumber = updateWorkInstruction.networkNumber;
          theWorkInstruction.activity = updateWorkInstruction.activity;
          theWorkInstruction.originatorName = updateWorkInstruction.originatorName;
          theWorkInstruction.date = updateWorkInstruction.date;
          theWorkInstruction.customerInformation = updateWorkInstruction.customerInformation;
          theWorkInstruction.workscopeTask = updateWorkInstruction.workscopeTask;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkInstruction');
          await updateAsset.update(workInstruction);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateWorkInstructionEvent');
          event.workInstruction = theWorkInstruction;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Operator and Manager update CustomerInformation asset.
 * @param {roll_royce.challenge.com.UpdateCustomerInformation} updateCustomerInformation
 * @transaction
 */
async function UpdateCustomerInformation(updateCustomerInformation) {
  const customerInformationID = updateCustomerInformation.customerInformation.customerInformationID;
  const factory = getFactory();
  let theCustomerInformation = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.CustomerInformation')
        .then(function(customerInformationAssetRegistry) {
        // Use customerInformationID to get the asset.
          return customerInformationAssetRegistry.get(customerInformationID);
        }).then(async function(customerInformation) {
        // Update the field and asset.
          theCustomerInformation = customerInformation;
          theCustomerInformation.aircraftRegistration = updateCustomerInformation.aircraftRegistration;
          theCustomerInformation.engineType = updateCustomerInformation.engineType;
          theCustomerInformation.OnOffWing = updateCustomerInformation.OnOffWing;
          theCustomerInformation.wingPosition = updateCustomerInformation.wingPosition;
          theCustomerInformation.taskLocation = updateCustomerInformation.taskLocation;
          theCustomerInformation.taskStart = updateCustomerInformation.taskStart;
          theCustomerInformation.taskEnd = updateCustomerInformation.taskEnd;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.CustomerInformation');
          await updateAsset.update(customerInformation);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateCustomerInformationEvent');
          event.customerInformation = theCustomerInformation;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Operator and Manager update WorkscopeTask asset.
 * @param {roll_royce.challenge.com.UpdateWorkscopeTask} updateWorkscopeTask
 * @transaction
 */
async function UpdateWorkscopeTask(updateWorkscopeTask) {
  const workscopeTaskID = updateWorkscopeTask.workscopeTask.workscopeTaskID;
  const factory = getFactory();
  let theWorkscopeTask = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkInstruction')
        .then(function(workscopeTaskAssetRegistry) {
        // Use workscopeTaskID to get the asset.
          return workscopeTaskAssetRegistry.get(workscopeTaskID);
        }).then(async function(workscopeTask) {
        // Update the field and asset.
          theWorkscopeTask = workscopeTask;
          theWorkscopeTask.requestedTaskDescription = updateWorkscopeTask.requestedTaskDescription;
          theWorkscopeTask.technicalDataReference = updateWorkscopeTask.technicalDataReference;
          theWorkscopeTask.SIAtaskReference = updateWorkscopeTask.SIAtaskReference;
          theWorkscopeTask.additionalNotes = updateWorkscopeTask.additionalNotes;
          theWorkscopeTask.costRateCharge = updateWorkscopeTask.costRateCharge;
          theWorkscopeTask.costType = updateWorkscopeTask.costType;
          theWorkscopeTask.workInstructionAcceptance = updateWorkscopeTask.workInstructionAcceptance;
          theWorkscopeTask.invoicingInstructions = updateWorkscopeTask.invoicingInstructions;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkInstruction');
          await updateAsset.update(workscopeTask);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'UpdateWorkscopeTaskEvent');
          event.workscopeTask = theWorkscopeTask;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Delete TaskCardTitle asset.
 * @param {roll_royce.challenge.com.DeleteTaskCardTitle} deleteTaskCardTitle
 * @transaction
 */
async function DeleteTaskCardTitle(deleteTaskCardTitle) {
  try {
    return getAssetRegistry('roll_royce.challenge.com.TaskCardTitle')
        .then(function(taskCardTitleAssetRegistry) {
          return taskCardTitleAssetRegistry.remove(deleteTaskCardTitle.titleID);
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'DeleteTaskCardTitleEvent');
          event.message = 'success delete task card title#' + deleteTaskCardTitle.titleID;
          emit(event);
        })
        .catch(function(error) {
          console.log(error);
          throw new Error(error);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * List Departments.
 * @param {roll_royce.challenge.com.ListDepartments} listDepartments
 * @transaction
 */
async function ListDepartments(listDepartments) {
  let listData = '';
  try {
    return getAssetRegistry('roll_royce.challenge.com.Department')
        .then(async function() {
          try {
            let assets = await query('TheDepartmentsList', {
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'ListDepartmentsEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * List Projects.
 * @param {roll_royce.challenge.com.ListProjects} listProjects
 * @transaction
 */
async function ListProjects(listProjects) {
  let listData = '';
  try {
    return getAssetRegistry('roll_royce.challenge.com.Project')
        .then(async function() {
          try {
            let assets = await query('TheProjectsList', {});
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'ListProjectsEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * List TaskCardTitle.
 * @param {roll_royce.challenge.com.ListTaskCardTitle} listTaskCardTitle
 * @transaction
 */
async function ListTaskCardTitle(listTaskCardTitle) {
  let listData = '';
  try {
    return getAssetRegistry('roll_royce.challenge.com.TaskCardTitle')
        .then(async function() {
          try {
            let assets = await query('TheTaskCardTitleList', {});
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'ListTaskCardTitleEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * Adimn list WorkRequests.
 * @param {roll_royce.challenge.com.AdminWorkRequestList} adminWorkRequestList
 * @transaction
 */
async function AdminWorkRequestList(adminWorkRequestList) {
  let listData = '';
  try {
    return getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(async function() {
          try {
            let assets = await query('AdminWorkRequestList', {});
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'AdminWorkRequestListEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * Manager list WorkRequests.
 * @param {roll_royce.challenge.com.ManagerWorkRequestList} managerWorkRequestList
 * @transaction
 */
async function ManagerWorkRequestList(managerWorkRequestList) {
  let listData = '';
  const userID = managerWorkRequestList.userID;
  try {
    return getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(async function() {
          try {
            let assets = await query('ManagerWorkRequestList', {
              'managerID': 'resource:roll_royce.challenge.com.Manager#' + userID,
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'ManagerWorkRequestListEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * Requestor list WorkRequests.
 * @param {roll_royce.challenge.com.RequestorWorkRequestList} requestorWorkRequestList
 * @transaction
 */
async function RequestorWorkRequestList(requestorWorkRequestList) {
  let listData = '';
  const userID = requestorWorkRequestList.userID;
  try {
    return getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(async function() {
          try {
            let assets = await query('RequestorWorkRequestList', {
              'entryID': 'resource:roll_royce.challenge.com.Requestor#' + userID,
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'RequestorWorkRequestListEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * Worker list TaskCards.
 * @param {roll_royce.challenge.com.WorkerTaskCardList} workerTaskCardList
 * @transaction
 */
async function WorkerTaskCardList(workerTaskCardList) {
  let listData = '';
  const userID = workerTaskCardList.userID;
  try {
    return getAssetRegistry('roll_royce.challenge.com.TaskCard')
        .then(async function() {
          try {
            let assets = await query('WorkerTaskCardList', {
              'workerID': 'resource:roll_royce.challenge.com.Worker#' + userID,
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'WorkerTaskCardListEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

/**
 * Manager list TaskCards.
 * @param {roll_royce.challenge.com.ManagerTaskCardList} managerTaskCardList
 * @transaction
 */
async function ManagerTaskCardList(managerTaskCardList) {
  let listData = '';
  const userID = managerTaskCardList.userID;
  try {
    return getAssetRegistry('roll_royce.challenge.com.TaskCard')
        .then(async function() {
          try {
            let assets = await query('ManagerTaskCardList', {
              'managerID': 'resource:roll_royce.challenge.com.Manager#' + userID,
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'ManagerTaskCardListEvent');
          event.listData = listData;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
