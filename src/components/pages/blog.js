// Desde 07-033 NavLink Styles
import React, { Component } from "react";
// Desde 07-034, (regular) Link component
import { Link } from 'react-router-dom'

// De 09-120 AXios API for blog
import axios from 'axios'

import BlogItem from "../blog/blog-item";


const miApi = 'https://apialexandr.devcamp.space'

class Blog extends Component {

    constructor() {

        super()

        this.state = {

            blogItems: []

        }

        this.activateInfiniteScroll()
        
        this.getBlogItems = this.getBlogItems.bind(this)

    }

    activateInfiniteScroll() {

        window.onscroll = () => {

            console.log('[DEBUG onscroll]')

        }

    }

    getBlogItems(){

        axios
            .get(`${miApi}/portfolio/portfolio_blogs`,
                { withCredentials: true}
            )
            .then( response =>{

                console.log('[AXIOS BLOG API GET] : ', response)

                this.setState({

                    blogItems: response.data.portfolio_blogs
                    
                })

            })
            .catch( error =>{
                console.log('[AXIOS BLOG ERROR] -> ', error)
            })


    }

    componentDidMount(){
        this.getBlogItems()
    }

    render() {

        const blogRecords = this.state.blogItems.map( blogItem => {

            return(

                <BlogItem key={blogItem.id} blogItem={blogItem} />

            )

        })

        return(

            <div className="blog-container">

                <div className="content-container">
                    {blogRecords}
                </div>

            </div>

        )
    }
}

export default Blog