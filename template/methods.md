# Functional Component -- MyMethods.jsx

## Get data

    - listOfMethods: [{Method}]

## State

    - listOfMethods: [{Method}] = Null
    - methodManagement: {active: Boolean, methodId: Int Or Null} = {active: False, methodId: Null}

## Render

    - First block
        - Title
        - Table
            - {listOfMethods.map(method)}
                - ...
                - button [onClick] : {methodManagement = {active: True, methodId: method.id}}
                - button [onClick] : {deleteMethod(method.id)}
    - Second block (show if (methodManagement.active))
        - Title
        - Component -- MethodManagement(methodManagement, close(), actualize())
