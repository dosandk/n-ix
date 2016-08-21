export default store => next => action => {
    const { withRandomId, ...rest } = action;

    if (!withRandomId) return next(action);

    const id = Date.now() + Math.random();

    next({...rest, id})
}