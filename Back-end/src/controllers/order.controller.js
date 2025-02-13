/*************  ✨ Codeium Command ⭐  *************/
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                menu: true
            }
        });
        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await prisma.order.findUnique({
            where: { id: id },
            include: {
                menu: true
            }
        });
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: "Order not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the order." });
    }
}