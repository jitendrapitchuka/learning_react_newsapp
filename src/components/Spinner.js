import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center"> 
                <div className="spinner-grow text-success text-center" role="status">
                <span className="sr-only"></span>
                </div>
                </div>
            
        )
    }
}
