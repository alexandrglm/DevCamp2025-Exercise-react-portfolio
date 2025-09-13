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

        /* Atento,
            no lo llamamos desde componentDidMount porque no lo queremos una vez,
            sino presente siempre.
            Por eso no necesita tampoco un contenxto this propio
        */
        this.activateInfiniteScroll()

        this.getBlogItems = this.getBlogItems.bind(this)

    }

    activateInfiniteScroll() {

        window.onscroll = () => {

            // Meto 3 debugs para ser consciente de los valores
            console.log('[DEBUG onscroll] window inner height : ', window.innerHeight)
            console.log(
                '[DEBUG document.documentElement.scrollTop]: ', 
                document.documentElement.scrollTop
            )
            console.log(
                '[DEBUG document.documentElement.offsetHeight]: ',
                document.documentElement.offsetHeight
            )

            // Ahora vamos al turron
            if ( 
                window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
             ) {

                console.log('[DEBUG infitescroll] -> GET MORE POSTS')

             }



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