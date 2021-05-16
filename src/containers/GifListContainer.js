import { ResourceLoader } from 'jsdom'
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            results: []
        }
    }

    updateResults = (array) => {
        let updatedList = array.map(gif => gif["images"]["original"]["url"])
        // debugger
        // let addition = this.state.results.concat(array)
        this.setState({results: [...this.state.results, updatedList].flat()})
        // debugger
    }

    // componentDidMount() {
    //     // debugger
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=50eChMxwKKc2YkZDdotddQfiIbAAJRWm&rating=g`)
    //     .then(resp => resp.json())
    //     .then(resp => resp["data"].slice(0, 3))
    //     .then(resp => this.updateResults(resp))
    // }

    submitHandler = (e) => {
        // debugger
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.children[2].value}&api_key=50eChMxwKKc2YkZDdotddQfiIbAAJRWm&rating=g`)
        .then(resp => resp.json())
        .then(resp => resp["data"].slice(0, 3))
        .then(resp => this.updateResults(resp))
    }

    render() {
        // debugger
        return(
            <div>
                <GifList list={this.state.results} />
                <GifSearch submitHandler={this.submitHandler} />
            </div>
        )
    }
}

export default GifListContainer