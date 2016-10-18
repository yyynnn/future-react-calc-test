import React from "react";

 export default class Modal extends React.Component {
    render() {
      if (this.props.isOpen === false)
        return null;

      let modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: "#fff",
    borderRadius: "4px",
    border: "1px solid #d4d8df",
    width: "55vw",
    boxShadow: "0px 0px 91px #72addc",
    textAlign: "center",
    paddingBottom: "25px"
  };

      if (this.props.width && this.props.height) {
        modalStyle.width = this.props.width + 'px';
        modalStyle.height = this.props.height + 'px';
        modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
        modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
        modalStyle.transform = null
      }

      if (this.props.style) {
        for (let key in this.props.style) {
          modalStyle[key] = this.props.style[key];
        }
      }

      let backdropStyle = {
        left: 0,
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    zIndex: 3,
    height: "100vh",
    width: "100vw"
  };

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key];
        }
      }

      return (
        <div className={this.props.containerClassName}>

          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }
