import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

// create user
router.post("/user", async (req, res) => {
  const { name, email, username } = req.body;
  try {
    const result = await prisma.user.create({
      data: {
        name,
        email,
        username,
        bio: "I love Prisma!",
      },
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Email or username must be unique" });
  }
});

// get all users
router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// get user
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });

  res.json(user);
});

// update user
router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        bio,
        name,
        image,
      },
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// delete user
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.user.delete({ where: { id: Number(id) } });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
