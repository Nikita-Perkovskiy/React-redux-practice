import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeathers } from "../../store/Actions";
import { selectToDO } from "../../selects/toDo.select";
import { setMessage } from "../../store/Actions";
import "./index.scss";

const CommentPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectToDO);

  const setNewMessage = () => {
    dispatch(setMessage());
  };

  // console.log("Forecast", weatherCity);
  // console.log("Forecast", city);

  //const { addTodo } = useContext(TodosContext);
  console.log(messages);
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ width: "100%", height: "100vh", backgroundColor: "#04260e" }}
      >
        <div className="mx-auto add-task">
          <div className="form-task">
            <input
              className="task-massage"
              maxLength={50}
              placeholder="Description of my new task"
              type="text"
              name="Todo"
              value={messages}
              onChange={(e) => {
                if (e.target.value !== " ") {
                  setNewMessage({ id: Date.now(), value: e.target.value });
                }
              }}
            />
            <button className="task-btn">Add task</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentPage;
