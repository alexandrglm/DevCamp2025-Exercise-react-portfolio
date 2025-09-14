// Desde 07-033 NavLink Styles
import React, { Component } from "react";
// Desde 07-034, (regular) Link component
import { Link } from 'react-router-dom'

// De 09-120 AXios API for blog
import axios from 'axios'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from "../blog/blog-item";

import BlogModal from "../modals/blog-modal";


const miApi = 'https://apialexandr.devcamp.space'

class Blog extends Component {

    constructor() {

        super()

        this.state = {

            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            blogModalIsOpen: false

        }


        this.getBlogItems = this.getBlogItems.bind(this)

        this.onScroll = this.onScroll.bind(this)
        window.addEventListener('scroll', this.onScroll, false)

        this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)

    }

    // 09-137 HAndle Modal Close, pero va a dar sufrimiento porq react tiene problemas con los modals que siguen renderizanmdo main app
    handleModalClose() {

        this.setState({

            blogModalIsOpen: false

        })
    }

    // 09-136 Modal attached al click
    handleNewBlogClick() {

        this.setState({

            blogModalIsOpen: true

        })

    }


    // Refactorizado dese 09-133
    onScroll() {

        if (

            this.state.isLoading ||
            this.state.blogItems.length === this.state.totalCount

        ) { return }

        if (

            // window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ){
            // Intento de arfreglo para cualquier cosa entre navbar y blog component
        // Lo suyo seria integrar DebugComponent para este tipo de cosas, y aqui dejar codigo original
            window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 5
        ){ 
                
                this.getBlogItems()

            }

    }

    getBlogItems(){

        const correccionCurrentPage = this.state.currentPage + 1

        this.setState({

            currentPage: correccionCurrentPage, isLoading: true

        })

        axios
            .get(`${miApi}/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
                { withCredentials: true}
            )
            .then( response =>{

                // debugger;

                console.log('[AXIOS BLOG API GET] : ', response)

                this.setState({

                    blogItems: this.state.blogItems.concat( response.data.portfolio_blogs ),
                    totalCount: response.data.meta.total_records,
                    isLoading: false
                    
                })

            })
            .catch( error =>{
                console.log('[AXIOS BLOG ERROR] -> ', error)
            })


    }

    componentWillMount()  {

        this.getBlogItems()

    }
    componentWillUnmount() {

        window.removeEventListener('scroll', this.onScroll, false)

    }

    render() {

        const blogRecords = this.state.blogItems.map( blogItem => {
            return(
                <BlogItem key={blogItem.id} blogItem={blogItem} />
            )
        })

        return(

            <div className="blog-container">

                <BlogModal
                handleModalClose={this.handleModalClose}
                modalIsOpen={this.state.blogModalIsOpen}
                />

                <div className="new-blog-link">
                    <a onClick={this.handleNewBlogClick}>Open MODAL!</a>
                </div>

                <div className="content-container">
                    {blogRecords}
                </div>

                {this.state.isLoading ? (

                    <div className="content-loader">
                        <FontAwesomeIcon icon="spinner" spin />
                    </div>

                ) : null }

            </div>

        )
    }
}

export default Blog