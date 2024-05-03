import React from "react";
import { useDispatch } from "react-redux";
import { addUser, saludar } from "../redux/userSlice";
export const Formulario = () => {
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(addUser(e.target.value));
  }

  function borrarUsuario() {
    dispatch(saludar())
  }
  return (
    <div className="form-cnt">
      <h1>Componente "Formulario"</h1>
      <form>
        <input type="text" onChange={handleInput} />
      </form>
      <button onClick={borrarUsuario}>saludar</button>
    </div>
  );
};
