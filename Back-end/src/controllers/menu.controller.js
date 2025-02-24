const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllMenus = async (req, res) => {
    try {
        const menus = await prisma.menu.findMany({
            include: {
                category: true
            }
        });
        res.status(200).json(menus);
    } catch (error) {
        console.error("Error fetching menus:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.getMenuById = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await prisma.menu.findUnique({
            where: { id: parseInt(id) },
            include: {
                category: true
            }
        });
        if (menu) {
            res.json(menu);
        } else {
            res.status(404).json({ error: "Menu not found." });
        }
    } catch (error) {
        console.error("Error fetching menu by ID:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.createMenu = async (req, res) => {
    try {
        const { name, description, price, categoryId } = req.body;
        const newMenu = await prisma.menu.create({
            data: {
                name: name,
                description: description,
                price: parseFloat(price),
                imageUrl: req.file ? req.file.path : null,
                categoryId: categoryId
            }
        });
        res.status(201).json(newMenu);
    } catch (error) {
        console.error("Error creating menu:", error);
        res.status(500).json({ error: error.message });
    }
}


exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const updatedMenu = await prisma.menu.update({
            where: { id: id },
            data: {
                name: name,
                description: description,
                price: parseFloat(price),
                imageUrl: req.file ? req.file.path : undefined,
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

