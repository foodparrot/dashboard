import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
function BootstrapModal(props) {
  const DefaultFooter = () => (
    <Button onClick={props.onHide}>Close</Button>
  )
  return (
    <>
      <Modal
        {...props}
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {props.title ?
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
            : <></>
          }
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          {props.footer ? props.footer : <DefaultFooter />}
        </Modal.Footer>
      </Modal>
    </>
  )
}
BootstrapModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.element,
  footer: PropTypes.element,
  onHide: PropTypes.func.isRequired
}
export default BootstrapModal