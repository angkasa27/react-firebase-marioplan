const initState = {
  projects: [
    {
      id: 1,
      title: "This is the project's title",
      content: "This is the description or the content",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Creaete Project Error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
