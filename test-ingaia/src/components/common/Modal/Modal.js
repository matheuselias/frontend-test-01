import React, { Component } from 'react';
import './modal.scss'

export class Modal extends Component {
  render() {
    const { handleClose, show, children } = this.props;
    
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <button onClick={handleClose} className="btn btn-close text-uppercase">close</button>
          <div className="row align-items-center">
            {children}
          </div>
        </section>
      </div>
    );
  }
};