import { instance } from "utils/axios";


export const JobDetailsServices = async jobInfo => {
  
  return await instance.post('/GetJobOpeningDetails', jobInfo)

}; 

  export const loginAuthServices = async loginInfo => {
  
    return await instance.post('/ValidateApplicant', loginInfo)

  };
  
  export const registerAuthServices = async registerInfo => {
  
    return await instance.post('/AddApplicant', registerInfo)

  };

  export const forgetPassAuthServices = async forgetPassInfo => {
  
    return await instance.post('/ForgotPassword', forgetPassInfo)

  };
  