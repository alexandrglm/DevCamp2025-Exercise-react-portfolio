// De 09-135, Modals
import React, { Component } from "react";
import ReactModal from 'react-modal'

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
    }

    render() {

        return(

            <ReactModal 
                style={this.customStyles} 
                onRequestClose={ () => { this.props.handleModalClose() } }
                isOpen={this.props.modalIsOpen} >
                <h1> I am a MODAL!</h1>
            </ReactModal>
        )

    }

}