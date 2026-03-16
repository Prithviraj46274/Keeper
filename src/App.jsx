import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setnote] = useState([]);
  function addnote(newnote) {
    setnote((prevnotes) => {
      return [...prevnotes, newnote];
    });
  }
  function deletenote(handlenoteid) {
    setnote((prevnotes) => {
      return prevnotes.filter((note, noteindex) => {
        return noteindex != handlenoteid;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {note.map((noteitems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitems.title}
            content={noteitems.content}
            ondelete={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
