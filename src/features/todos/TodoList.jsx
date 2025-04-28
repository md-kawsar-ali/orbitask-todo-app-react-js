import React from "react";
import Header from "../../components/widgets/Header";
import { useSelector } from "react-redux";
import Modal from "../../components/common/Modal";
import AddTask from "../../components/common/AddTask";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Header title="All Tasks">
        <Modal selector="add_task" btnText="Add Task">
          <AddTask />
        </Modal>
      </Header>

      <div className="p-8">
        {todos.length ? (
          todos.map((todo) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
          ))
        ) : (
          <h2 className="text-2xl text-slate-400 font-bold">
            There is no task!
          </h2>
        )}
      </div>
    </>
  );
};

export default TodoList;
