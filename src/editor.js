import React, { useState } from "react";

export default function SelectContent({ onChange, type, value }) {
  const [values, setValues] = useState(value);
  const updateValues = () => {
    onChange(values);
  };
  switch (type) {
    case "image":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Src</label>
            <input
              value={values.src}
              onChange={e => {
                setValues({ ...values, src: e.target.value });
                console.log(values.src);
                updateValues();
              }}
              type="text"
            />
          </div>
          <div class="form-row">
            <label>Alt</label>
            <input
              value={values.alt}
              onChange={e => {
                setValues({ ...values, alt: e.target.value });
                updateValues();
              }}
              type="text"
            />
          </div>
        </>
      );
    case "text":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Value</label>
            <input
              value={values.value}
              onChange={e => {
                setValues({ ...values, value: e.target.value });
                updateValues();
              }}
              type="text"
            />
          </div>
        </>
      );
    case "link":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Link</label>
            <input
              value={values.link}
              onChange={e => {
                setValues({ ...values, link: e.target.value });
                onChange(values);
              }}
              type="text"
            />
          </div>
          <div class="form-row">
            <label>Text</label>
            <input
              value={values.text}
              onChange={e => {
                setValues({ ...values, text: e.target.value });
                onChange(values);
              }}
              type="text"
            />
          </div>
        </>
      );
    default:
      return (
        <>
          <input
            value={values.value}
            onChange={e => {
              setValues(e.target.value);
            }}
            type="text"
          />
        </>
      );
  }
}
