exports.handler = function(event, context, callback) {
    console.log(JSON.stringify(event,null,2));
    callback(null, event);//how we signal back to the system
}