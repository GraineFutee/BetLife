# Functional Component -- MethodManagement.jsx

## Get data

    - Method: {Method} = Null

## State

    - method: {Method} = Null
    - modal: {active: Boolean, for: String} = {active: False, for: ""}

## Render

    - Title
    - Form
        - Input [onChange] : {method.name}, [Value] : {method.name}
        - Input [onChange] : {method.bet}, [Value] : {method.bet}
        - Input [onChange] : {method.onOdd}, [Value] : {method.onOdd}
        - Input [onChange] : {method.onTeam; if (value === "Teams") {modal.active = True; modal.for = "On"}}, [Value] : {method.onTeam}
        - Input [onChange] : {method.playing}, [Value] : {method.playing}
        - Input [onChange] : {method.against; if (value === "Teams") {modal.active = True; modal.for = "Against"}}, [Value] : {method.against}
        - Box
            - {method.condition.map(condition)}
                - Input [onChange] : {condition.on}, [Value] : {condition.on}
                    - Input [onChange] : {condition.value1}, [Value] : {condition.value1}
                    - Input [onChange] : {condition.value2}, [Value] : {condition.value2}
            - Button [onClick] : {addCondidtion()}
        - Submit [onClick] : {POST(method) if (res === True) props.actualize()}
        - Button [onClick] : {props.close()}
