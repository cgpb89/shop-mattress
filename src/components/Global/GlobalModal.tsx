import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface GlobalModalProps {
    modalTitle?: string,
    className?: string,
    isOpen: boolean,
    toggle: () => void,
    content?:  React.ReactNode;
}

export default class GlobalModal extends Component<GlobalModalProps, any> {

    render() {
        const {className, isOpen, toggle, content } = this.props;
          
        return (
            <div>
            <Modal size={'xl'} isOpen={isOpen} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody className="modal-content">
                {content}
              </ModalBody>
            </Modal>
          </div>
        )
    }
}
