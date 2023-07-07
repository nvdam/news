import React from "react";
import Modal from "../UI/Modal";
import "./ModalNewsItem.css";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalNewsItem(props) {
  return (
    <>
      <Modal close={props.clickHandler}>
        <div>
          <div className="div">
            <h3> {props.title} </h3>
            <CloseIcon
              className="close-icon"
              color="primary"
              fontSize="small"
              onClick={props.clickHandler}
            />
          </div>
          <hr />
          <p> {props.desc} </p>
          <a href={props.url} target="_blank" rel="noreferrer">
            View Full Article
          </a>

          {/* <button className=" btn btn-primary" onClick={props.clickHandler}>
            CLOSE
          </button> */}
        </div>
      </Modal>
    </>
  );
}
