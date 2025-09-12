import Axios from "axios";
import React, { Component } from "react";

const miApi = 'https://apialexandr.devcamp.space'

export default class BlogDetail extends Component {

    constructor(props){

        super(props)

        this.state = {

            currentId: this.props.match.params.slug,
            blogItem: {}

        }

        this.getBlogItem = this.getBlogItem.bind(this)
    }

    getBlogItem(){

        axios 
            .get(`${miApi}/portfolio/portfolio_blogs/${this.state.currentId}`)
            .then( response =>{

                console.log(response)

            })
            .catch( error =>{
                console.log(error)
            })

    }

    componentDidMount(){
        this.getBlogItem()
    }

    render(){

        return (

            <div>
                <h1>Blog Detail</h1>
            </div>

        )
    }
}