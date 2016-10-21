export default function({ dispatch}) {
    return next => action => {
        //if action has no payload
        //or the payload does not have a .then property
        //we dont care and should pass to next();
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        // make sure the acions promise is resolved
        action.payload
            .then(response => {
                const newAction =   { ...action, payload: response };
                dispatch(newAction);
            });
    }
}
