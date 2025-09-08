// De 08-086
import React, { Component } from "react";


export default class PortfolioForm extends Component {

    // De 08-087
    constructor(props){
        super(props)

        this.state = {

            name: '',
            description: '',
            category: '',
            position: '',
            url: '',
            thumb_image: '',
            banner_image: '',
            logo: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){

        // de 08-88
        this.setState( {

            [event.target.name]: event.target.value

        })

        console.log('[PORTFOLIO FORM] Handle change', event)


    }

    // De 08-088
    handleSubmit(event) {

        console.log('[PORTFOLIO FORM SUBMIT] Submit portfolio item', event)

        // te acuerdas de como proteger data? preventDefault()
        event.preventDefault()
        
        // de 08-089 FormData
        this.buildForm()
    }

    buildForm() {

        let formData = new FormData()

        /*
            API REQUIERE:

            - portfolio_item : {
                name: value
                description: valie
                url: value
                ...
            }
        */

        formData.append('portfolio_item[name]', this.state.name)
        formData.append('portfolio_item[description]', this.state.description)
        formData.append('portfolio_item[url]', this.state.url)
        formData.append('portfolio_item[category]', this.state.category)
        formData.append('portfolio_item[position]', this.state.position)

        return formData;

    }


    render() {

        return(

            <div>
                <h1> Portfolio Form Test Title</h1>

                <form>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />

                        <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        />

                        <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>

        )
    }

}