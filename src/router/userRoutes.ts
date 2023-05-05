import { Router } from "express";

const router = Router();

// create user
router.post("/user", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

// get user
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented ${id}` });
});

// update user
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented ${id}` });
});

export default router;
