const getAllProjects = (req, res) => {
  res.send("get all project");
};

const createProject = (req, res) => {
  res.send("createProject");
};

const updateProject = (req, res) => {
  res.send("updateProject");
};
const deleteProject = (req, res) => {
  res.send("deleteProject");
};

module.exports = {
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
};
