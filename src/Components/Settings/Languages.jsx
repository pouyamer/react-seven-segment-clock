import React from "react"

const Languages = ({ partLanguage, changeLanguage, language }) => {
  return (
    <div className="settings-section ss-language">
      <h2>{partLanguage.label}:</h2>
      <select
        onChange={e => {
          changeLanguage(e.target.value)
        }}
        name="lang"
        id="lang"
      >
        <option value="en-US">English</option>
        <option value="fa-IR">Farsi</option>
        <option value="de-BRD"></option>
      </select>
    </div>
  )
}

export default Languages
