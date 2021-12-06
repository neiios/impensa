import "./ModalRoot.module.css";
export default function Modal(props) {
  return (
    <div className="modal d-block ">
      <div className="modal-dialog">
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
}
