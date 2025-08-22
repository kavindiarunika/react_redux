const defaultstate = {
  number: 0,
};

const reducer = (state = defaultstate, {type,data}) => {
  if (type === "increment") {
    return {
      number: state.number + data,
    };
  } else if (type === "descriment") {
    return {
      number: state.number - data,
    };
  }

  return state;
};
export default reducer;
