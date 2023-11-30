# Split a string using custom delimiter (Node.js)
## Description
TBD
## Supported event formats
JSON 
## Inputs:
Input name | Description | Type
|---|---|---|
| field_to_split | The name of the field that should be splitted | string |
| delimiter | The delimiter to use | string |
## Test event 

### Inputs
Input name | Value
|---|---|
| field_to_ingest | hello_world_enrichment

### Event:

```json
{
    "id": 1
}
```

## Output to the test event

### Modified Event:
```json
{
    "id": 1,
    "hello_world_enrichment": "Hello from Memphis!"
}
```