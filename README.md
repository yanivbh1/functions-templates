[![Github (6)](https://github.com/memphisdev/memphis/assets/107035359/bc2feafc-946c-4569-ab8d-836bc0181890)](https://www.functions.memphis.dev/)
<p align="center">
<a href="https://memphis.dev/discord"><img src="https://img.shields.io/discord/963333392844328961?color=6557ff&label=discord" alt="Discord"></a>
<a href="https://github.com/memphisdev/memphis/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed/memphisdev/memphis?color=6557ff"></a> 
  <img src="https://img.shields.io/npm/dw/memphis-dev?color=ffc633&label=installations">
<a href="https://github.com/memphisdev/memphis/blob/master/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Code%20of%20Conduct-v1.0-ff69b4.svg?color=ffc633" alt="Code Of Conduct"></a> 
<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/memphisdev/memphis?color=61dfc6">
<img src="https://img.shields.io/github/last-commit/memphisdev/memphis?color=61dfc6&label=last%20commit">
</p>

<div align="center">
  
  <img width="200" alt="CNCF Silver Member" src="https://www.cncf.io/wp-content/uploads/2022/07/cncf-white-logo.svg#gh-dark-mode-only">
  
</div>
 
 <b><p align="center">
  <a href="https://memphis.dev/pricing/">Cloud</a> - <a href="https://memphis.dev/docs/">Docs</a> - <a href="https://twitter.com/Memphis_Dev">X</a> - <a href="https://www.youtube.com/channel/UCVdMDLCSxXOqtgrBaRUHKKg">YouTube</a>
</p></b>

<div align="center">

  <h4>

**[Memphis.dev](https://memphis.dev)** is more than a broker. It's a new streaming stack.<br>
Memphis.dev is a highly scalable event streaming and processing engine.<br>

  </h4>
  
</div>

## ![20](https://user-images.githubusercontent.com/70286779/220196529-abb958d2-5c58-4c33-b5e0-40f5446515ad.png) About

Before Memphis came along, handling ingestion and processing of events on a large scale took months to adopt and was a capability reserved for the top 20% of mega-companies. Now, Memphis opens the door for the other 80% to unleash their event and data streaming superpowers quickly, easily, and with great cost-effectiveness.<br>
<br>
Memphis Functions Is Part of Memphis.dev Platform For Developing Highly-Customizable Event-driven Features and Pipelines By Creating or Employing Serverless Functions.
<br>

**This repository is to provide ready-to-use templates for writing Memphis Functions.**<br><br>
Supported languages: <img src="https://github.com/memphisdev/function-templates/assets/70286779/10d17064-2754-4075-a7bb-16f8fea5e233" width="15px">
 | <img src="https://github.com/memphisdev/function-templates/assets/70286779/7ea803d9-22a6-4611-9f1f-d8f850b5b9aa" width="30px"> | <img src="https://github.com/memphisdev/function-templates/assets/70286779/a5fc1909-d6d2-4831-bf6b-bf405c89f663" width="15px">

## How to attach a new function
1. [Create](https://cloud.memphis.dev) a Memphis.dev Account
2. Create a new station
3. Attach a new function
4. Produce some messages

## How to develop a new private function
A function comprises code files based on the templates located in this repository and a `memphis.yaml` file contained within a unified directory.<br>
The directory ought to be included in a Git repository that's linked with Memphis.<br>
Here is a brief hierarchy diagram of how a compatible function file tree should be constructed: <img src="https://github.com/memphisdev/memphis-dev-functions/assets/70286779/57591907-ce74-454c-a9e3-f7348db88c48" width="50%" />
<br>

### :rocket: Step-by-step Guide:
1. Clone or create a new repository (At the moment, support is exclusively available for GitHub.)
2. Within this repository, establish a fresh directory and initialize it to your chosen programming language
```bash
mkdir my-function && cd my-function && npm init -y
```
3. [Copy](https://github.com/memphisdev/function-templates) one of the Memphis Functions templates. For this guide, we chose Node.js
4. *Required*. Write your logic inside the `eventHandler` block.<br>Incoming events will be accumulated and dispatched to a function collectively in a batch, therefore the wrapper
```js
exports.handler = async (event) => {
    return await createFunction(event, eventHandler);
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

    // A short example of converting the payload to a json object and returning it as an Uint8Array
    const decodedPayload = payload.toString('utf-8');
    const asJson = JSON.parse(decodedPayload);

    return {
        processedMessage: Buffer.from(JSON.stringify(asJson), 'utf-8'),
        processedHeaders: headers
    };
}
```
Messages will return to the Memphis Station in a batch as well.<br>
5. *Required*. Add or modify the `memphis.yaml` file based on the following template:
```yaml
function_name:        #Required. Must be equal to the directory name
runtime:              #Required. [go | nodejs | nodejs16.x | nodejs18.x | python3.8 | python3.9 | python3.10 | python3.11]
dependencies:         #The file name contains the list of dependencies the function making use of - default to [requirements.txt(python) / go.mod(go) / package.json (nodes)]
handler:              #Required for node.js/Python only. The name of the function's entry point - <file name>.<function name> - for example, if your function is called 'handler' and written inside 'main.py', the handler should be main.handler
tags:                 #List of tags
  - tag: json
  - tag: dev
inputs:               #list of input fields that will be injected into your function per attachment
  - name: timestamp
description:          #Description
```
6. *Optional*. Add a README file to describe your function so others will know what to do :)
7. Connect the designated repository with your Memphis account
8. `my-function` should be available through the Functions main page or a station

## How to develop a new public function
1. Fork https://github.com/memphisdev/memphis-dev-functions
2. Add your function's directory, including `memphis.yaml` file
3. Create a PR
4. The addition of the new function will take place following a thorough review and subsequent approval
5. Get your swag pack! 😍
