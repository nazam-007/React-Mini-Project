import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [EnableMultiSelection, SetEnableMultiSelection] = useState(false);
  const [multiple, SetMultiple] = useState([]);

  function handleSingleSection(getCurrentId) {
    // console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);
    SetMultiple(cpyMultiple);
  }

  console.log(selected);
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => SetEnableMultiSelection(!EnableMultiSelection)}
          className={`button ${EnableMultiSelection ? "disable" : "enable"}`}
        >
          {EnableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    EnableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  {/* <span>+</span> */}
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}
