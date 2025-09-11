// De 08-086
import React, { Component } from "react";
import axios from 'axios'
// De 09-097, dropzone intehgration
import DropzoneComponent from 'react-dropzone-component'

import '../../../node_modules/react-dropzone-component/styles/filepicker.css'
import '../../../node_modules/dropzone/dist/min/dropzone.min.css'

const miApi = 'https://apialexandr.devcamp.space'


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
            logo: '',
            editMode: false,
            apiUrl: `${miApi}/portfolio/portfolio_items`,
            apiAction: 'post'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleThumbDrop = this.handleThumbDrop.bind(this);
        this.handleBannerDrop = this.handleBannerDrop.bind(this);
        this.handleLogoDrop = this.handleLogoDrop.bind(this);


        // De 09-100, incluir REFs para clear form
        this.thumbRef = React.createRef()
        this.bannerRef = React.createRef()
        this.logoRef = React.createRef()

    }

    // De 09-110
    componentDidUpdate(){

        // Si no añadimos verificacion if al propio this.props.portfolioToEdit, no funcionará
        if ( this.props.portfolioToEdit && Object.keys( this.props.portfolioToEdit ).length > 0 ) {

            // Esto es Destructuring Assignment para extraer datos
            // evitamos reiterar lineas de  this.props.portfoliotToEdit.variable
            const {

                id,
                name,
                description,
                category,
                position,
                url,
                thumb_image,
                banner_image,
                logo

            } = this.props.portfolioToEdit

            this.props.clearPortfolioToEdit()

            this.setState({

                id: id,
                name: name || '',
                description: description || '',
                category: category || 'Services',
                position: position || '',
                url: url || '',
                editMode: true,
                apiUrl: `${miApi}/portfolio/portfolio_items/${id}`,
                apiAction: 'patch',
                thumb_image: thumb_image || '',
                banner_image: banner_image || '',
                logo: logo   || ''

            });
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

    // De 09-097, Dropzone Integration
    componentConfig() {

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


    buildForm() {

        let formData = new FormData()

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);

        {/* De 09-098, actualizar componente para Thumb, de manera condicional*/}
        if ( this.state.thumb_image ) {

            formData.append('portfolio_item[thumb_image]', this.state.thumb_image)

        }        
        {/* De 09-099, resto */}
        if ( this.state.banner_image ) {

            formData.append('portfolio_item[banner_image]', this.state.banner_image)

        }
        {/* De 09-099, resto */}
        if ( this.state.logo ) {

            formData.append('portfolio_item[logo]', this.state.logo)

        }

        return formData;

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
        
        // MUCHISIMO CUIDADO CON LOS INDENTS DEL PUTO AXIOS DE LOS COJONES!
        axios({

            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true
        })

            .then(response => {

                if ( this.state.editMode ) {

                    this.props.handleEditFormSubmission()

                } else {

                this.props.handleNewFormSubmission(response.data.portfolio_item);
                }

                this.setState({
                    name: "",
                    description: "",
                    category: "Services",
                    position: "",
                    url: "",
                    thumb_image: "",
                    banner_image: "",
                    logo: "",
                    editMode: false,
                    apiUrl: `${miApi}/portfolio/portfolio-items`,
                    apiAction: 'post'
                });

                [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
                    ref.current.dropzone.removeAllFiles();
                });
            })
            .catch(error => {
                console.log("portfolio form handleSubmit error", error);
            });

        // preventDefault() debe ir al mismo nivel que axios, Muchiiiiiisimo cuidado con la identacion
        event.preventDefault();
    }


    render() {

        return(
            // Desde 09-101, reajustamos el form
            <form className="portfolio-form-wrapper" onSubmit={this.handleSubmit} >
                
                <div className="two-column">
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

                <div className="two-column">
                    
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
                    className="select-element" 
                    >

                        {/* De momento van a ser hardcoded*/}
                        <option value="Technology">Technology</option>
                        <option value="eLearning">eLearning</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Services">Services</option>
                    </select>

                </div>

                <div className="one-column">

                    {/* De 09-093, Parsing "input" -> react textarea /> */}
                    <textarea
                    name="description"
                    placeholder="Add a description ..."
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </div>

                {/* De 09-097, Dropzone Integration*/}
                { /* THUMB */ }
                <div className="image-uploaders">

                    {this.state.thumb_image && this.state.editMode ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={this.state.thumb_image} />
                        </div>
                    ) : (

                    <DropzoneComponent 
                    ref={this.thumbRef}
                    config={this.componentConfig()} 
                    djsConfig={this.djsConfig()}
                    eventHandlers={this.handleThumbDrop()}
                    >
                        <div className="dz-message">
                            Upload Thumbnail
                        </div>
                    </DropzoneComponent>

                    )}


                    {this.state.banner_image && this.state.editMode ? (
                        
                        <div className="portfolio-manager-image-wrapper">
                            <img src={this.state.banner_image} />
                        </div>

                    ) : (

                    <DropzoneComponent 
                    ref={this.bannerRef}
                    config={this.componentConfig()} 
                    djsConfig={this.djsConfig()} 
                    eventHandlers={this.handleBannerDrop()} 
                    >
                        <div className="dz-message">
                            Upload Banner
                        </div>
                    </DropzoneComponent>
                    )}



                    {this.state.logo && this.state.editMode ? (
                        
                        <div className="portfolio-manager-image-wrapper">
                            <img src={this.state.logo} />
                        </div>

                    ) : (
                    <DropzoneComponent 
                    ref={this.logoRef} 
                    config={this.componentConfig()}  
                    djsConfig={this.djsConfig()} 
                    eventHandlers={this.handleLogoDrop()}
                    >
                        <div className="dz-message">
                            Upload Logo
                        </div>
                    </DropzoneComponent>
                    )}
                    

                </div>

                <div>
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        )
    }
}