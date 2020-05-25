import * as actionType from 'actions';

export const commonError  = ({error}) => ({
    type: actionType.COMMON_ERROR,
    payload: {
        error,
    }
});
export const commonErrorClose = () => ({
    type: actionType.COMMON_ERROR_CLOSE,
  });