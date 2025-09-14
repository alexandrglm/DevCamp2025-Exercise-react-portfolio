import React from "react";
import { Link } from 'react-router-dom'
// De 10-154
import ReactHtmlParser from 'react-html-parser'
// De 10-156
import striptags from 'striptags'
import Truncate from 'react-truncate'

const BlogItem = props =>{

    const {

        id,
        blog_status,
        content,
        title,
        featured_image_url
    
    } = props.blogItem


    return (

        <div>

            <Link to={`/b/${id}`} >
                <h1>{title}</h1>
            </Link>

            {/* <div>{ReactHtmlParser(content)}</div> */}
            <div>

                <Truncate
                    lines={5}
                    ellipsis={

                        <span>
                            ...<Link to={`/b/${id}`}>Read More</Link>
                        </span>
                    }
                >

                    {striptags(content)}

                </Truncate>

            </div>


        </div>

    )

}

export default BlogItem

