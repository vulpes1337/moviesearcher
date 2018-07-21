import React from 'react'

class Error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return (
                <div className="not-found-wrapper">
                <h1 className="not-found-title">x_x</h1>
                <p className="not-found-text">Произошла ошибка.</p>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}

export default Error