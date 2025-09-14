// De 09-135, Modals
import React, { Component } from "react";
import ReactModal from 'react-modal'

import BlogForm from "../blog/blog-form";

/*
IMPORTANTISIMO:
    Arreglamos el warning de :

        Warning: react-modal: App element is not defined. 
        Please use `Modal.setAppElement(el)` or set `appElement={el}`.

    Lo hacemos, sobre todo, por indicativo de ACCESIBILIDAD.
    Esto se ha revisado en EU en 2025, este tipo de implementaciones es MUST.
*/
ReactModal.setAppElement('.app-wrapper')


export default class BlogModal extends Component {

    constructor(props){

        super(props)

        // El enfoque para los modals es hacer estilos inline, para ellos seteamos su contexto
        this.customStyles = {

            content: {

                top: '50%',
                left: '50%',
                right: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '800px'

            },
            overlay: {

                backgroundColor: 'rgba(1,1,1,0.75'

            }
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission(blog) {

        //console.log('[DEBUG BLOG-FORM] -> blog from blog-form: ', blog)
        this.props.handleSuccessfulFormSubmission(blog)

    }

    render() {

        return(

            <ReactModal 
                style={this.customStyles} 
                onRequestClose={ () => { 
                    this.props.handleModalClose();
                }}
                isOpen={this.props.modalIsOpen} >

                    <BlogForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission} 
                    />
            </ReactModal>
        )

    }

}