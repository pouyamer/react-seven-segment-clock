import React from "react"

const Languages = () => {
  return (
    <div className="settings-section ss-language">
      <h2>Language:</h2>
      <select name="lang" id="lang">
        <option value="en">English</option>
        <option value="fa">فارسی</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  )
}

export default Languages
