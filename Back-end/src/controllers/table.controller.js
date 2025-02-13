/*************  ✨ Codeium Command 🌟  *************/
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all tables
exports.getAllTables = async (req, res) => {
    try {
        const tables = await prisma.table.findMany();
        res.json(tables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get table by ID
exports.getTableById = async (req, res) => {
    try {
        const { id } = req.params;
        const table = await prisma.table.findUnique({
            where: { id: id },
        });
        if (table) {
            res.json(table);
        } else {
            res.status(404).json({ error: "Table not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new table
exports.createTable = async (req, res) => {
    try {
        const { number } = req.body;
        const table = await prisma.table.create({
            data: {
                number: parseInt(number),
            },
        });
        res.status(201).json(table);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a table
exports.updateTable = async (req, res) => {
    try {
        const { id } = req.params;
        const { number } = req.body;
        const table = await prisma.table.update({
            where: { id: id },
            data: {
                number: parseInt(number),
            },
        });
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a table
exports.deleteTable = async (req, res) => {
    try {
        const { id } = req.params;
        const table = await prisma.table.delete({
            where: { id: id },
        });
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
