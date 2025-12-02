import pool from "../config/db.js";

export const getPricelist = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM pricelist ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error loading pricelist" });
  }
};

export const createItem = async (req, res) => {
  const { article_no, product_service, in_price, price, unit, in_stock, description } = req.body;

  try {
    const query = `
      INSERT INTO pricelist (article_no, product_service, in_price, price, unit, in_stock, description)
      VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;
    const values = [article_no, product_service, in_price, price, unit, in_stock, description];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error creating item" });
  }
};
