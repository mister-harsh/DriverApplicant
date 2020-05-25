import * as actionType from 'actions';

export const getJobDetailsPost = (jobInfo) => ({
  type: actionType.GET_JOB_DETAILS,
  payload: jobInfo
});

export const getJobDetailsPostSuccess = (jobStatus) => ({
type: actionType.GET_JOB_DETAILS_SUCCESS,
payload: jobStatus
});



 


