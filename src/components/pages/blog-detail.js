import axios from "axios";
import React, { Component } from "react";
// De 10-154
import ReactHtmlParser from 'react-html-parser'

import BlogFeaturedImage from "../blog/blog-featured-image";

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

            <div className="blog-container">
                
                <div className="content-container">

                    <h1>{title}</h1>


                {/* 

                Hemos pasado tan limpiamente un elvis al propio componente
                de featured-image, ya que este incorpora la verificacion 
                
                { featured_image_url ? (

                    <div className="featured-image-wrapper">
                        <img src={featured_image_url} />
                    </div>

                ): null } 
                */}
                <BlogFeaturedImage img={featured_image_url} />



                    <div className="content">

                        <div>{ReactHtmlParser(content)}</div>

                    </div>
                     
                
                </div>

            </div>

        )
    }
}