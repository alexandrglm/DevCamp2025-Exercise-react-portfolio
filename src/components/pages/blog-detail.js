import axios from "axios";
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

                this.setState({

                    blogItem: response.data.portfolio_blog

                })

            })
            .catch( error =>{
                console.log(error)
            })

    }

    componentDidMount(){
        this.getBlogItem()
    }

    render(){

        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem

        return (

            <div>
                <h1>Blog Detail</h1>
                <img src={featured_image_url} />
                <div>{content}</div>
            </div>

        )
    }
}