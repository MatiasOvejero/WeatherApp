import React from "react";

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" placeholder="city" name="city"></input>
      <input type="text" placeholder="country" name="country"></input>
      <button>Submit</button>
    </form>
  );
};

export default Form;
