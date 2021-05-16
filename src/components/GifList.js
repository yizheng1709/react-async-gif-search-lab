import React, { Component } from 'react'

class GifList extends Component {

    // constructor(props) {
    //     super(props)
    //     // debugger
    // }

    componentDidMount() {
        // debugger
    }

    render() {
        // debugger
        const results = this.props.list.map(gif => <li><img src={gif}/></li>)
        // debugger
        return(
            <ul>
                {results}
            </ul>
        )
    }
}

export default GifList