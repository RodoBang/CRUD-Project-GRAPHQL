const projectService = require('../services/projectService');

const resolver = {
    Query: {
        projects: () => {
          return projectService.getProjects();
        },
        projectById: (_, { _id }) => {
          return projectService.getProjectById(_id);
        }
      },
    Mutation: {
        createProject: (_, {name, description, startDate, endDate, status, budget}) =>{
            return projectService.createProject({name, description, startDate, endDate, status, budget});
        },
        updateProject: (_, {_id, projectData}) => {
            return projectService.updateProject(_id, projectData);
        },
        deleteProject: (_, {_id}) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolver;
