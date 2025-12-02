import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
import pool from "../config/db.js"

export const loginUser = async(req, res) =>{
    const {email, password} = req.body;

    try {
        console.log("login")
        const result = await pool.query("SELECT * FROM users WHERE email=$1",[email])
        const user = result.rows[0];

        if(!user) return res.status(404).json({message:"user.password"})

        const match = await bcrypt.compare(password, user.password)
       
        if(!match)return res.status(400).json({ message: "Incorrect password" });
  
        const token = jwt.sign(
            {id:user.id, email:user.email},
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        )

        return res.json({token})
    } catch (error) {
        return res.status(500).json({message:"Server error", error:error.message})
    }
}

export const getTranslations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM translations");
    const rows = result.rows;

    const translated = {};

    rows.forEach(row => {
      if (!translated[row.language_code]) translated[row.language_code] = {};
      translated[row.language_code][row.key] = row.value;
    });

    res.json(translated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching translations" });
  }
};


