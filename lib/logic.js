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
 * Requester create WorkRequest asset.
 * @param {roll_royce.challenge.com.RequesterCreateWorkRequest} createWorkRequest
 * @transaction
 */
async function CreateWorkRequest(createWorkRequest) {
  let newWorkRequest;
  try {
    const factory = getFactory();
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestRegistry) {
          newWorkRequest = factory.newResource('roll_royce.challenge.com', 'WorkRequest', createWorkRequest.workRequestID);
          newWorkRequest.workRequestID = createWorkRequest.workRequestID;
          newWorkRequest.taskName = createWorkRequest.taskName;
          newWorkRequest.taskPriority = createWorkRequest.taskPriority;
          newWorkRequest.description = createWorkRequest.description;
          newWorkRequest.deadline = createWorkRequest.deadline;
          newWorkRequest.completion = createWorkRequest.completion;
          newWorkRequest.disable = createWorkRequest.disable;
          newWorkRequest.created = createWorkRequest.created;
          newWorkRequest.requester = createWorkRequest.requester;
          newWorkRequest.responder = createWorkRequest.responder;
          newWorkRequest.manager = createWorkRequest.manager;
          newWorkRequest.department = createWorkRequest.department;
          newWorkRequest.project = createWorkRequest.project;
          return workRequestRegistry.add(newWorkRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'RequesterCreateWorkRequestEvent');
          event.workRequest = newWorkRequest;
          emit(event);
        });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

/**
 * Manger create TaskCard asset.
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
// TODO: WE NEED CHECK THE PARTICIPANT AND ASSET ARE EXISTED OR NOT.
/**
 * Manger create TaskCard asset.
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
  const workRequestID = updateWorkRequest.workRequest.workRequestID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use workRequestID to get the asset.
          return workRequestAssetRegistry.get(workRequestID);
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
  const workRequestID = updateWorkRequest.workRequest.workRequestID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use workRequestID to get the asset.
          return workRequestAssetRegistry.get(workRequestID);
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
 * Requester update WorkRequest asset.
 * @param {roll_royce.challenge.com.RequesterUpdateWorkRequest} updateWorkRequest
 * @transaction
 */
async function RequesterUpdateWorkRequest(updateWorkRequest) {
  const workRequestID = updateWorkRequest.workRequest.workRequestID;
  const factory = getFactory();
  let theWorkRequest = '';
  try {
    return await getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(function(workRequestAssetRegistry) {
        // Use workRequestID to get the asset.
          return workRequestAssetRegistry.get(workRequestID);
        }).then(async function(workRequest) {
        // Update the field and asset.
          theWorkRequest = workRequest;
          let newTaskName = '';
          let newTaskPriority = '';
          let newDescription = '';
          let newDeadline = '';
          if (!updateWorkRequest.taskName) {
            newTaskName = workRequest.taskName;
          } else {
            newTaskName = updateWorkRequest.taskName;
          }

          if (!updateWorkRequest.taskPriority) {
            newTaskPriority = workRequest.taskPriority;
          } else {
            newTaskPriority = updateWorkRequest.taskPriority;
          }

          if (!updateWorkRequest.description) {
            newDescription = workRequest.description;
          } else {
            newDescription = updateWorkRequest.description;
          }

          if (!updateWorkRequest.deadline) {
            newDeadline = workRequest.deadline;
          } else {
            newDeadline = updateWorkRequest.deadline;
          }

          workRequest.taskName = newTaskName;
          workRequest.taskPriority = newTaskPriority;
          workRequest.description = newDescription;
          workRequest.deadline = newDeadline;
          const updateAsset = await getAssetRegistry('roll_royce.challenge.com.WorkRequest');
          await updateAsset.update(workRequest);
        })
        .then(function() {
          const event = factory.newEvent('roll_royce.challenge.com', 'RequesterUpdateWorkEvent');
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
 * Requester list WorkRequests.
 * @param {roll_royce.challenge.com.RequesterWorkRequestList} requesterWorkRequestList
 * @transaction
 */
async function RequesterWorkRequestList(requesterWorkRequestList) {
  let listData = '';
  const userID = requesterWorkRequestList.userID;
  try {
    return getAssetRegistry('roll_royce.challenge.com.WorkRequest')
        .then(async function() {
          try {
            let assets = await query('RequesterWorkRequestList', {
              'requestID': 'resource:roll_royce.challenge.com.Requester#' + userID,
            });
            assets = JSON.stringify(assets);
            listData = assets;
          } catch (e) {
            console.log(e);
            throw new Error(e);
          }
        }).then(function() {
          const event = getFactory().newEvent('roll_royce.challenge.com', 'RequesterWorkRequestListEvent');
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
