import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement ,reset} from "./store";


 
     const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
    style={{
      margin: "20% auto",
      justifyContent: "center",
      textAlign: "center",
      padding: "30px",
      border: "2px solid ",
      borderRadius: "10px",
      width: "290px",
      backgroundColor:"olive",
      boxShadow: "0 4px 8px rgba(4, 81, 17, 0.2)",
    }}
    >
      <div style={{
        fontSize:"30px"
      }}>Count:{count}</div><br/><br/>
      
      <button onClick={() => dispatch(increment())}>Increment</button><br/><br/>
      <button onClick={() => dispatch(decrement())}>decrement</button><br/><br/>
      <button onClick={() => dispatch(reset())}>reset</button><br/><br/>
      
    </div>
  );
};

export default Todo;
