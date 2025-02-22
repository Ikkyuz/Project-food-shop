/*************  ✨ Codeium Command ⭐  *************/
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                items: true
            }
        });
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "An error occurred while fetching the orders." });
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await prisma.order.findUnique({
            where: { id: id },
            include: {
                items: true
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