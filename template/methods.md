# Functional Component -- MyMethods.jsx

## Get data

    - listOfMethods: [{Method}]

## State

    - listOfMethods: [{Method}] = null
    - methodManagement: {active: Boolean, methodId: Int Or Null} = {active: False, methodId: Null}

## Render

<section>
    <container>
        <h1></h1>
        <table>
            <tbody>
                {*listOfMethods*.map((method) => (
                    <tr>
                        <th>*method.name*</th>
                        <td>*method.creation*</td>
                        <td>*method.resume*</td>
                        <td>
                            <button>Modify</button> => **onClick** = *methodManagement* => {active: *True*, methodId: *method.id*}
                        </td>
                        <td>
                            <button>Delete</button> => **onClick** = *DeleteMethod*(*method.id*)
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </container>
</section>
