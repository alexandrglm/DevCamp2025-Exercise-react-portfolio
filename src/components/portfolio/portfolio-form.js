// De 08-086
import React, { Component } from "react";
import axios from 'axios'
// De 09-097, dropzone intehgration
import DropzoneComponent from 'react-dropzone-component'

import '../../../node_modules/react-dropzone-component/styles/filepicker.css'
import '../../../node_modules/dropzone/dist/min/dropzone.min.css'

export default class PortfolioForm extends Component {

    // De 08-087
    /* En 09-094, hacemos el default value del category: '', hardcoded */
    constructor(props){
        super(props)

        this.state = {

            name: '',
            description: '',
            category: 'Services',
            position: '',
            url: '',
            thumb_image: '',
            banner_image: '',
            logo: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.componentConfig = this.componentConfig.bind(this)
        this.djsConfig = this.djsConfig.bind(this)
        this.handleThumbDrop = this.handleThumbDrop.bind(this)
        this.handleBannerDrop = this.handleBannerDrop.bind(this)
        this.handleLogoDrop = this.handleLogoDrop.bind(this)

    }

    handleChange(event){

        // de 08-88
        this.setState( {

            [event.target.name]: event.target.value

        })

        console.log('[PORTFOLIO FORM] Handle change', event)


    }

    // De 08-088
    // De 08-091 ya implementamos la lógica api
    handleSubmit(event) {

        // te acuerdas de como proteger data? preventDefault()
        // preventDefault() SIEMPRE ANTES DE AXIOS; SIEMPRE ANTES DE TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        event.preventDefault()

        // POST -> url, data, { options }
        axios
        .post(
            'https://apialexandr.devcamp.space/portfolio/portfolio_items',
            
            this.buildForm(),
            
            { withCredentials: true }
        )
        .then( response => {

        this.props.handleSuccessfulFormSubmission(  response.data.portfolio_item )

            console.log('[PORTFOLIO ITEM POST]:', response )


        } )
        .catch( error => {

            console.log('[PORTFOLIO ITEM POST ERROR] Error:', error )
        })


        
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

        {/* De 09-098, actualizar componente para Thumb, de manera condicional*/}
        if ( this.state.thumb_image ) {

            formData.append('portfolio_item[thumb_image', this.state.thumb_image)

        }        
        {/* De 09-099, resto */}
        if ( this.state.banner_image ) {

            formData.append('portfolio_item[banner_image', this.state.banner_image)

        }
                {/* De 09-099, resto */}
        if ( this.state.logo ) {

            formData.append('portfolio_item[logo', this.state.logo)

        }

        return formData;

    }

    // De 09-097, Dropzone Integration
    componentConfig(){

        return {

            iconFiletypes: ['.jpg', '.png', '.svg'],
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post'


        }

    }
    djsConfig() {

        return {

            addRemoveLinks: true,
            maxFiles: 1

        }

    }
    
    // De 09-098
    handleThumbDrop() {

        return {

            addedfile: file => this.setState( { thumb_image: file })

        }

    }
    // De 09-099, lo mismo para BANNER y LOGO
    handleBannerDrop() {

        return {

            addedfile: file => this.setState( { banner_image: file })

        }

    }
    handleLogoDrop() {

        return {

            addedfile: file => this.setState( { logo: file })

        }

    }



    render() {

        return(

            <div>
                <h1> Portfolio Form Test Title</h1>

                {/* Al Formg object hay que meterle las acciones!!!! onSubmit -> Función que maneja el submit....etc*/}
                <form onSubmit={this.handleSubmit} >
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
                        
                        {/* De 09-092, Convertimos el category en SelectDropdown con lo que la api tenga*/}
                        <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        >

                            {/* De momento van a ser hardcoded*/}
                            <option value="Technology">Technology</option>
                            <option value="eLearning">eLearning</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Services">Services</option>
                        </select>

                    </div>

                    <div>
                        {/* De 09-093, Parsing "input" -> react textarea /> */}
                        <textarea
                        name="description"
                        placeholder="Description (this is a <textarea /> element)..."
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>

                    {/* De 09-097, Dropzone Integration*/}
                    { /* THUMB */ }
                    <div className="image-uploaders">

                        <DropzoneComponent
                        config={this.componentConfig()} 
                        djsConfig={this.djsConfig()}
                    
                        eventHandlers={this.handleThumbDrop()}
                        >
                        </DropzoneComponent>

                    </div>
                    { /* BANNER */ }
                    <div className="image-uploaders">

                        <DropzoneComponent
                        config={this.componentConfig()} 
                        djsConfig={this.djsConfig()}
                    
                        eventHandlers={this.handleBannerDrop()}
                        >
                        </DropzoneComponent>

                    </div>
                    { /* THUMB */ }
                    <div className="image-uploaders">

                        <DropzoneComponent
                        config={this.componentConfig()} 
                        djsConfig={this.djsConfig()}
                    
                        eventHandlers={this.handleLogoDrop()}
                        >
                        </DropzoneComponent>

                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>

        )
    }

}