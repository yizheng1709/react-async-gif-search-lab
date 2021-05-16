import React, { Component } from 'react'

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    updateState = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <label>Find Gifs Here!!</label>
                    <br></br>
                    <input onChange={this.updateState} type="text" value={this.state.search} ></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default GifSearch