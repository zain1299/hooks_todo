import React, { useState } from "react";

const ToDoos = () => {
  ////////setting up state values///////

  const [works, setWorks] = useState("");
  //////setting up new state for list///////
  const [newWork, setNewWork] = useState([]);

  ///////control inputs/////
  const handleSubmit = (e) => {
    e.preventDefault();
    if (works) {
      const worklist = {
        id: new Date().getTime().toString(),
        works,
        disabled: true,
        //iscompleted:false,
      };
      console.log(worklist);

      setNewWork((newWork) => {
        return [...newWork, worklist];
      });
      setWorks("");
    } else {
      //adding inputs into the list///
      console.log("empty values");
    }
  };

  ////DELETE ITEMS/////
  const handleDelete = (index) => {
    const items = [...newWork];
    items.splice(index, 1);
    setNewWork(items);
    //never do work direct in states

    // let deletelist = newWork.filter((worklist) => worklist.e !== e);
    // setNewWork(deletelist);
  };

  //////RESET Items/////////S
  const handleReset = (e) => {
    setNewWork([]);
  };

  //////edit items//////

  const handleChanges = (e, index) => {
    const items = [...newWork];
    items[index] = { ...items[index], works: e.target.value };
    setNewWork(items);
  };

  const handleEdit = (e, index) => {
    const items = [...newWork];
    items[index].disabled = false;
    //when i didn't set it it wasn't working like wo edit click hone ke bd set nae kr rha tha value
    setNewWork(items);
    //console.log(items[index])
    //items[index]=setWorks(e.target.value);
  };

  //update items
  const handleUpdate = (index) => {
    const items = [...newWork];
    items[index].disabled = true;
    setNewWork(items);

    //const items=[...newWork];
  };

  const handleChange = (e) => {
    setWorks(e.target.value);
  };

  return (
    <>
      <h1 className="heading">TO DO APP</h1>;
      <article>
        <form className="formcontrol">
          <div className="formbox">
            <label htmlFor="todolist"> TO DO LIST: </label>
            <input
              placeholder="add todo list"
              type="text"
              id="works"
              name="works"
              value={works}
              onChange={handleChange}
              //onChange={handleCreate}
            />
            <button type="submit" className="btn" onClick={handleSubmit}>
              +
            </button>
            <button type="button" className="btnreset" onClick={handleReset}>
              RESET
            </button>
          </div>
        </form>
        {newWork.map((worklist, index) => {
          const { id, works, disabled } = worklist;
          return (
            <div className="list" key={id}>
              <input
                className="editinput"
                type="text"
                id="edits"
                name="edits"
                value={works}
                onChange={(e) => handleChanges(e, index)}
                disabled={disabled}
              />
              {/* {works} */}
              <button
                //input={editItem}
                type="button"
                className="btncreate"
                onClick={(e) => handleEdit(e, index)}
              >
                EDIT
              </button>
              <button
                //input={editItem}
                type="button"
                className="btndelete"
                onClick={() => handleDelete(index)}
              >
                DELETE
              </button>
              <button
                //input={editItem}
                type="button"
                className="btnupdate"
                onClick={() => handleUpdate(index)}
              >
                UPDATE
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ToDoos;
