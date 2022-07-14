import { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Notification from "../notification/Notification";
import Backdrop from "../notification/Backdrop";
import "./singledropdown.scss";

const SingleDropDown = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function toggleDropdown() {
    setIsDropOpen((prevState) => !prevState);
  }

  function openModal() {
    setModalOpen((prevState) => !prevState);
  }

  function copyUrl() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setIsDropOpen(false);
    openModal();
  }

  function emailCurrentPage() {
    window.location.href =
      "mailto:?subject=" +
      document.title +
      "&body=" +
      escape(window.location.href);
    setIsDropOpen(false);
  }

  return (
    <>
      {modalOpen && (
        <Notification text="ბმული კოპირებულია!" onClick={openModal} />
      )}
      {modalOpen && <Backdrop onClick={openModal} />}

      <div className="drop-down">
        <button className="pub-settings" onClick={toggleDropdown}>
          <SettingsIcon className="icon" />
        </button>
        {isDropOpen && (
          <>
            <div className="drop-down-content">
              <ul>
                <li>
                  <span onClick={copyUrl}>ბმულის კოპირება</span>
                </li>
                <li>
                  <span onClick={emailCurrentPage}>ელფოსტით გაგზავნა</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleDropDown;
