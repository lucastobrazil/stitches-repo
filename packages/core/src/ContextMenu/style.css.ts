export default {
  content: {
    minWidth: 130,
    backgroundColor: "$background",
    borderRadius: 6,
    padding: 8,
    boxShadow: "0px 5px 15px -5px hsla(206,22%,7%,.15)",
  },
  item: {
    fontSize: 13,
    padding: "5px 10px",
    borderRadius: 3,
    cursor: "default",
    color: "$text",
    "&:focus": {
      outline: "none",
      backgroundColor: "$primary",
      color: "$background",
    },
  },
  trigger: {
    backgroundColor: 'lightgray',
    border: '3px dashed $primary',
    padding: '$lg'
  }
};
