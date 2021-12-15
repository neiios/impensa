const router = require("express").Router();
const bcrypt = require("bcrypt");
const authorize = require("../middleware/authorize");
const pool = require("../db");

// all expenses and name

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT users.user_name, expenses.expense_id, expenses.expense_amount FROM users LEFT JOIN expenses ON users.user_id = expenses.user_id WHERE users.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// create an expense

router.post("/expense", authorize, async (req, res) => {
  try {
    console.log(req.body);

    const { amount, description, category } = req.body;

    const newExpense = await pool.query(
      "INSERT INTO expenses (user_id, expense_amount, expense_description, expense_category) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.user.id, amount, description, category]
    );

    console.log(newExpense.rows[0]);
    res.json(newExpense.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update an expense

router.put("/expense", authorize, async (req, res) => {
  try {
    console.log(req.body);
    const {
      expense_id,
      expense_amount,
      expense_description,
      expense_category,
    } = req.body;

    const updateExpense = await pool.query(
      "UPDATE expenses SET expense_amount = $1, expense_description=$2, expense_category=$3 WHERE expense_id = $4 AND user_id = $5 RETURNING *",
      [
        expense_amount,
        expense_description,
        expense_category,
        expense_id,
        req.user.id,
      ]
    );

    res.json(`Expense with ID ${expense_id} was updated`);
  } catch (err) {
    console.error(err.message);
  }
});

// delete an expense

router.delete("/expense/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExpense = await pool.query(
      "DELETE FROM expenses WHERE expense_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user.id]
    );

    if (deleteExpense.rows.length === 0) {
      return res.json("This Expense is not yours");
    }

    res.json(`Expense ${id} was deleted`);
  } catch (err) {
    console.error(err.message);
  }
});

// get all expenses

router.get("/expenses", authorize, async (req, res) => {
  try {
    const expenses = await pool.query(
      "SELECT * FROM expenses WHERE user_id = $1",
      [req.user.id]
    );

    res.json(expenses.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get user data
router.get("/user", authorize, async (req, res) => {
  try {
    const userData = await pool.query(
      "SELECT user_name, user_email FROM users WHERE user_id = $1",
      [req.user.id]
    );

    res.json(userData.rows);
  } catch (err) {
    console.error(err.mesage);
  }
});

router.put("/user", authorize, async (req, res) => {
  try {
    console.log(req.body);
    const { userName, userEmail, userPassword, userNewPassword } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      req.user.id,
    ]);

    const validPassword = await bcrypt.compare(
      userPassword,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credentials!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(userNewPassword, salt);

    const updateUser = await pool.query(
      "UPDATE users SET user_name=$1, user_email=$2, user_password=$3 WHERE user_id=$4  RETURNING *",
      [userName, userEmail, bcryptPassword, req.user.id]
    );

    return res.json("User updated succesfully!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
