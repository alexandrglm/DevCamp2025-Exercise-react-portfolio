// Desde 07-033 NavLink Styles
import React, { Component } from "react";

// Desde 07-034, (regular) Link component
import { Link } from 'react-router-dom'



const Blog = () => {

    return(

        <div>

            <div>
                <h2>Blog</h2>

                <div>
                    <Link to ="/about-me">
                        Find more about myself
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Blog;