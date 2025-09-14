// De 09-140, Initial blog-form component 
import React, { Component } from 'react'
import axios from 'axios'

const miApi = 'https://apialexandr.devcamp.space'

export default class BlogForm extends Component {

    constructor(props){

        super(props)

        this.state = {

            title: '',
            blog_status: ''

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        this.setState({

            [event.target.name]: event.target.value

        })

    }
    handleSubmit(event) {

        axios
            .post(`${miApi}/portfolio/portfolio_blogs`,
                this.buildForm(),
                { withCredentials: true}
            )
            .then( response => {

                this.props.handleSuccessfulFormSubmission(this.state)

            })
            .catch ( error => {

                console.log('[AXIOS BLOG-FORM] Error: ', error)
            })


        event.preventDefault()

    }

    buildForm() {

        let formData = new FormData()

        formData.append('portfolio_blog[title]', this.state.title)
        formData.append('portfolio_blog[blog_status]', this.state.blog_status)

        return formData

    }



    render() {

        return(

            <form onSubmit={this.handleSubmit}>

                <input 
                    type="text" 
                    onChange={this.handleChange}
                    name="title"
                    placeholder='Blog Title'
                    value={this.state.title}    
                />

                <input 
                    type="text" 
                    onChange={this.handleChange}
                    name="blog_status"
                    placeholder='Blog Status'
                    value={this.state.blog_status}    
                />




                <button type="submit">Save</button>

            </form>

        )
    }


}