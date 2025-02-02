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
    // Here is a short example of converting the payload to a json object and returning it as an Uint8Array
    const decodedPayload = payload.toString('utf-8');
    const asJson = JSON.parse(decodedPayload);

    // START Handle event here
    const filteredObj = {};
    inputs.keysToKeep = inputs.keysToKeep.split(",");
    inputs.keysToKeep.forEach(key => {
        if (asJson.hasOwnProperty(key)) {
          filteredObj[key] = asJson[key];
        }
    });

    // END Handle event here

    return {
        processedMessage: Buffer.from(JSON.stringify(filteredObj), 'utf-8'),
        processedHeaders: headers
    };
}

// function filterJSON(jsonObj, keysToKeep) {
//     const filteredObj = {};
    
//     keysToKeep.forEach(key => {
//       if (jsonObj.hasOwnProperty(key)) {
//         filteredObj[key] = jsonObj[key];
//       }
//     });
  
//     return filteredObj;
//   }
  
//   // Example usage:
//   const originalJSON = {
//     name: 'John Doe',
//     age: 30,
//     email: 'johndoe@example.com',
//     address: '123 Main St'
//   };
  
//   const keysToKeep = "name,age,email";
//   const filteredJSON = filterJSON(originalJSON, keysToKeep.split(","));
//   console.log(filteredJSON);
  