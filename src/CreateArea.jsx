import React, { useState } from "react";

function CreateArea(props) {
  const [inputtext, setinputtext] = useState({
    title: "",
    content: "",
  });

  function handletext(event) {
    const { name, value } = event.target;
    setinputtext((prevvalues) => {
      return {
        ...prevvalues,
        [name]: value,
      };
    });
  }

  function submitnote(event) {
    props.onadd(inputtext);
    setinputtext({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handletext}
          name="title"
          value={inputtext.title}
          placeholder="Title"
        />
        <textarea
          onChange={handletext}
          name="content"
          value={inputtext.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
