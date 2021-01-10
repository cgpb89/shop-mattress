import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface GlobalModalProps {
    className?: string,
    content?:  React.ReactNode;
    isOpen: boolean,
    modalTitle?: string,
    size: string,
    toggle: () => void,
}

export default class GlobalModal extends Component<GlobalModalProps, any> {

    render() {
        const {className, isOpen, toggle, content, size } = this.props;
          
        return (
            <div>
            <Modal size={size} isOpen={isOpen} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody className="modal-content">
                {content}
              </ModalBody>
            </Modal>
          </div>
        )
    }
}
