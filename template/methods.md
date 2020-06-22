# Functional Component -- MyMethods.jsx

## Get data

- listOfMethods: [{Method}]

## State

- listOfMethods: [{Method}] = null
- methodManagement: {active: Boolean, methodId: Int Or Null} = {active: False, methodId: Null}

## Render

- premier block
  - title
  - table
    - **listOfMethods** [map] :
      - **method.name**
      - **method.creation**
      - **method.resume**
      - button [onClick] : **methodManagement** = {active: **True**, methodId: **method.id**}
      - button [onClick] : [deleteMethod](**method.id**)
