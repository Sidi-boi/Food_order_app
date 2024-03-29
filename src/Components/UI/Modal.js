import { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // getting the destination where we want to portal

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop />, portalElement)}
      {
        ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)
      }
    </Fragment>
  );
};

export default Modal;
