const repository = require('../models/estado-respository');

module.exports = {

    index: async (req, res) => {
        try {
            const result = await repository.find();
            return res.json(result);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    create: async (req, res) => {
        const estado = req.body;
        try {
            const result = await repository.create(estado);
            estado.id = result[0];
            res.status(201).json(estado);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    show: async (req, res) => {
        try {
            const result = await repository.findById(req.params);
            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }
            return res.json(result[0])
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    update: async (req, res) => {
        const estado = req.body;

        try {
            const result = await repository.findById(req.params);
            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }
            await repository.update(estado);
            res.json(estado);
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    delete: async (req, res) => {
        try {
            const result = await repository.findById(req.params);
            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }
            await repository.delete(req.params)
            return res.status(204).json();
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}