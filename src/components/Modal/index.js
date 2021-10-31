import React from "react";
import { animated } from "react-spring";

import "./modal.css";

const Modal = ({ style, closeModal }) => (
  <animated.div style={style} className="modal">
    <h3 className="modal-title">Modal title</h3>
    <p className="modal-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores
      molestias praesentium impedit. Facere, perferendis voluptate at, amet
      excepturi ratione mollitia nemo ipsum odit impedit doloremque rerum.
      Quisquam, dolorum at?
    </p>
    <button className="modal-close-button" onClick={closeModal}>
      Close
    </button>
  </animated.div>
);

export default Modal;
