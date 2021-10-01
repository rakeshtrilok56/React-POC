import React from 'react'
import { ThemeConsumer, UserConsumer } from './UseContext'
class ComponentD extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <UserConsumer>
                {(user) => {
                    return (<ThemeConsumer>
                        {(theme) => {
                            return (
                                <>
                                    <h1>Welcome ComponentD,{user},{theme}</h1>
                                </>
                            )
                        }}
                    </ThemeConsumer>
                    )
                }}
            </UserConsumer>
        )
    }
}
export default ComponentD