const mongoose = require('mongoose'); // Asegúrate de importar mongoose
const Project = require('../models/projectModels');

module.exports = {
    getProjects: async () => {
        try {
            return await Project.find();
        } catch (err) {
            console.error('Error al obtener proyectos', err);
            throw new Error('No se pudieron obtener los proyectos');
        }
    },
    createProject: async ({ name, description, startDate, endDate, status, budget }) => {
        try {
            const project = new Project({ name, description, startDate, endDate, status, budget });
            return await project.save();
        } catch (err) {
            console.error('Error al crear proyecto', err);
            throw new Error('No se pudo crear el proyecto');
        }
    },
    updateProject: async (_id, projectData) => {
        try {
            console.log("Datos recibidos para actualizar:");
            console.log("_id:", _id);
            console.log("projectData:", projectData);
    
            // Verifica y convierte el _id a ObjectId si es necesario
            const validId = mongoose.Types.ObjectId.isValid(_id) ? new mongoose.Types.ObjectId(_id) : null;
            if (!validId) {
                throw new Error('El ID proporcionado no es válido.');
            }
    
            // Actualiza el documento existente y devuelve el documento actualizado
            const updatedProject = await Project.findByIdAndUpdate(validId, projectData, { new: true });
    
            if (!updatedProject) {
                throw new Error('No se encontró el proyecto para actualizar.');
            }
    
            return updatedProject;
        } catch (error) {
            console.error('Error al actualizar proyecto:', error);
            throw new Error('No se pudo actualizar el proyecto');
        }
    },
    deleteProject: async (_id) => {
        try {
          // Verifica y convierte el _id a ObjectId si es necesario
          const validId = mongoose.Types.ObjectId.isValid(_id) ? new mongoose.Types.ObjectId(_id) : null;
          if (!validId) {
            throw new Error('El ID proporcionado no es válido.');
          }
          
          // Elimina el proyecto por ID
          const deletedProject = await Project.findByIdAndDelete(validId);
      
          if (!deletedProject) {
            throw new Error('No se encontró el proyecto para eliminar.');
          }
      
          return deletedProject;
        } catch (err) {
          console.error('Error al eliminar proyecto', err);
          throw new Error('No se pudo eliminar el proyecto');
        }
      },
    getProjectById: async (_id) => {
        try {
          const validId = mongoose.Types.ObjectId.isValid(_id) ? new mongoose.Types.ObjectId(_id) : null;
          if (!validId) {
            throw new Error('El ID proporcionado no es válido.');
          }
          const project = await Project.findById(validId);
          if (!project) {
            throw new Error('No se encontró el proyecto con el ID proporcionado.');
          }
          return project;
        } catch (error) {
          console.error('Error al obtener el proyecto por ID:', error);
          throw new Error('No se pudo obtener el proyecto por ID');
        }
      }
};
