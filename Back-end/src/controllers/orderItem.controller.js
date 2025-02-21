const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await prisma.orderItem.findMany({
            include: {
                order: true,
                menu: true
            }
        });
        res.json(orderItems);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the order items." });
    }
}

exports.getOrderItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderItem = await prisma.orderItem.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                order: true,
                menu: true
            }
        });
        if (orderItem) {
            res.json(orderItem);
        } else {
            res.status(404).json({ error: "Order item not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the order item." });
    }
}