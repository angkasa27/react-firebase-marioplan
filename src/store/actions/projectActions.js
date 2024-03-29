export const createProject = (project) => {
  return (dispacth, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createAt: new Date(),
      })
      .then(() => {
        dispacth({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispacth({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
