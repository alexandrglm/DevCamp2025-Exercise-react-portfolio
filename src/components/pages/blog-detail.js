import axios from "axios";
import React, { Component } from "react";
// De 10-154
import ReactHtmlParser from 'react-html-parser'

import BlogFeaturedImage from "../blog/blog-featured-image";
import BlogForm from '../blog/blog-form'

const miApi = 'https://apialexandr.devcamp.space'


export default class BlogDetail extends Component {

    constructor(props){

        super(props)

        this.state = {

            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false

        }

        this.getBlogItem = this.getBlogItem.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)

    }

    handleEditClick() {

        this.setState({

            editMode: true

        })

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


        const contentManager = () => {

            if ( this.state.editMode ) {

                return <BlogForm />

            } else {
                return (

                    <div className="content-container">

                        <h1 onClick={this.handleEditClick}>{title}</h1>

                        <BlogFeaturedImage img={featured_image_url} />

                        <div className="content">

                            <div>{ReactHtmlParser(content)}</div>

                        </div>
                                     
                    </div>
                )

            }

        }

        return(
            // /* Y aqui es donde llamamos al contentcontainter *
            <div className="blog-container">{ contentManager() }</div>

        )


        
    }
}