// De 09-140, Initial blog-form component 
import React, { Component } from 'react'
import axios from 'axios'

import RichTextEditor from '../forms/rich-text-editor'

const miApi = 'https://apialexandr.devcamp.space'

export default class BlogForm extends Component {

    constructor(props){

        super(props)

        this.state = {

            title: '',
            blog_status: '',
            content: ''

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this)
    }

    handleRichTextEditorChange(content) {

        /*
        Vamos a empezar a subir syntax; content: content es lo mismo que content a secas en syntax moderna */
        this.setState({

            content

        })
        console.log('[DEBUG DraftJS Blog-Form] -> Content change handler is being invoked succesfully!')

    }

    buildForm() {

        let formData = new FormData()

        formData.append('portfolio_blog[title]', this.state.title)
        formData.append('portfolio_blog[blog_status]', this.state.blog_status)
        formData.append('portfolio_blog[content]', this.state.content )

        return formData

    }


    handleSubmit(event) {

        axios
            .post(`${miApi}/portfolio/portfolio_blogs`,
                this.buildForm(),
                { withCredentials: true}
            )
            .then( response => {

                // console.log("Form data includes:", this.state);
                this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog)

                // limpiando form a lo facil
                this.setState({

                    title: '',
                    blog_status: ''

                })

            })
            .catch ( error => {

                console.log('[AXIOS BLOG-FORM] Error: ', error)
            })


        event.preventDefault()

    }

    handleChange(event) {

        this.setState({

            [event.target.name]: event.target.value

        })

    }




    render() {

        return(

            <form onSubmit={this.handleSubmit} className='blog-form-wrapper'>

                <div className='two-columns'>

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

                </div>

                <div className='one-column'>

                    <RichTextEditor
                        handleRichTextEditorChange={this.handleRichTextEditorChange}    
                    />

                </div>

                <button className="btn" >Save</button>

            </form>

        )
    }


}