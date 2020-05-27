import React from "react";
import SelectContent from "./editor";

const MiniSettings = ({ setContent, isShowing, hide, type, value }) => {
  if (isShowing) {
    return (
      <>
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div onClick={hide} className="modal-overlay" />
          <div className="modal">
            <div className="modal-header">
              <div class="modal-name">{value.name}</div>
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <SelectContent type={type} value={value} onChange={setContent} />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default MiniSettings;
