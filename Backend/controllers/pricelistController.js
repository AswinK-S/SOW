import pool from "../config/db.js";

export const getPricelist = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM pricelist ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error loading pricelist" });
  }
};


