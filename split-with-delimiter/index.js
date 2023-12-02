const { memphis } = require("memphis-functions");

exports.handler = async (event) => { // The name of this file and this function should match the handler field in the memphis.yaml file in the following format <file name>.<function name>
    return await memphis.createFunction(event, eventHandler);
};

/**
 * https://github.com/memphisdev/memphis.js/tree/functions_wrapper#creating-a-memphis-function
 * @param {Uint8Array} payload 
 * @param {Object} headers 
 * @param {Object} inputs 
 * @returns {Object} 
 */
function eventHandler(payload, headers, inputs) {
    // Handle event here
    
    // Here is a short example of converting the payload to a json object and returning it as an Uint8Array
    // const decodedPayload = payload.toString('utf-8');
    
    // const asJson = JSON.parse(payload);
    const asJson = payload
    // const field = inputs.field_to_split.split(".")
    // console.log(field)
    // console.log(asJson[field[0]]["object"])
    // console.log(inputs2)
    // console.log(asJson[inputs2])
    asJson[inputs.key_to_split]=asJson[inputs.key_to_split].split(inputs.delimiter)

    // asJson[inputs.field_to_split]=asJson[inputs.field_to_split].split(inputs.delimiter)

    return {
        processedMessage: Buffer.from(JSON.stringify(asJson), 'utf-8'),
        processedHeaders: headers
    };
}

// var doc = {
//     "active": true,
//     "aggregate_usage": null,
//     "stiggEntityUrl": "https://app.stigg.io/production-9bb95b22/subscriptions/subscription-plan-cloud-growth-buckets-9c6433",
// }
// const asJson = doc
// const inputs = {
//     "key_to_split":"stiggEntityUrl",
//     "delimiter":"/"
// }
// console.log(asJson[inputs.key_to_split].split(inputs.delimiter))