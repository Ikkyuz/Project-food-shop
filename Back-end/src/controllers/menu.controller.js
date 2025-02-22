const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllMenus = async (req, res) => {
    try {
        const menu = await prisma.menu.findMany();
        res.status(200).json(menu);
    } catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.getMenuById = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await prisma.menu.findUnique({
            where: { id: id },
        });
        if (menu) {
            res.json(menu);
        } else {
            res.status(404).json({ error: "Menu not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the menu." });
    }
} 

exports.createMenu = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newMenu = await prisma.menu.create({
            data: {
                name,
                description,
                price: parseFloat(price)
            }
        });
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the menu." });
    }
}


exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const updatedMenu = await prisma.menu.update({
            where: { id: id },
            data: {
                name,
                description,
                price: parseFloat(price)
            }
        });
        res.status(200).json(updatedMenu);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the menu." });
    }
}

exports.deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.menu.delete({
            where: { id: id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the menu." });
    }
}