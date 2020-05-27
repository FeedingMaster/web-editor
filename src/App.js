import React, { useState, useEffect } from "react";
import "./styles.css";
import MiniSettings from "./miniSettings";
import useMiniSettings from "./useMiniSettings";
import Highlight from "./Highlight";

export default function App() {
  const [updateContent, setContent] = useState({});
  const [image, setImage] = useState({
    name: "Hero Image",
    src: "https://react.school/img/hello/codesandbox-create-react.png",
    alt: "test"
  });
  const [link, setLink] = useState({
    name: "link",
    link: "https://www.w3schools.com/jsref/met_element_getattribute.asp",
    text: "This is madness"
  });
  const [title, setTitle] = useState({
    name: "Title",
    value: "This is Good Text"
  });
  const [hoverElement, setHoverElement] = useState();
  const { isShowing, toggle } = useMiniSettings();

  const setUpdateImage = () => {
    setContent({
      function: value => {
        setImage(value);
      },
      type: "image",
      value: image
    });
    toggle();
  };
  const setUpdateLink = () => {
    setContent({
      function: value => {
        setLink(value);
      },
      type: "link",
      value: link
    });
    toggle();
  };
  const setUpdateTitle = () => {
    setContent({
      function: value => {
        setTitle(value);
      },
      type: "text",
      value: title
    });
    toggle();
  };

  useEffect(() => {
    const editbale = document.querySelectorAll("[data-content]");
    editbale.forEach(element => {
      element.addEventListener("mouseenter", e => {
        setHoverElement(e.target);
      });
      element.addEventListener("mouseleave", e => {
        setHoverElement(null);
      });
    });
  }, []);

  return (
    <div className="App">
      <MiniSettings
        setContent={updateContent.function}
        type={updateContent.type}
        isShowing={isShowing}
        hide={toggle}
        value={updateContent.value}
      />
      <Highlight currentElement={hoverElement} />
      <img
        onClick={() => {
          setUpdateImage();
        }}
        data-name={image.name}
        data-content="image"
        alt={image.alt}
        width="200px"
        src={image.src}
      />
      <h1
        data-name={title.name}
        onClick={() => {
          setUpdateTitle();
        }}
        data-content="text"
      >
        {title.value}
      </h1>
      <a
        href={link.link}
        data-name={link.name}
        data-content="text"
        onClick={e => {
          e.preventDefault();
          setUpdateLink();
        }}
      >
        {link.text}
      </a>
    </div>
  );
}
