const router = require("express").Router();
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

    const { amount } = req.body;

    const newExpense = await pool.query(
      "INSERT INTO expenses (user_id, expense_amount) VALUES ($1, $2) RETURNING *",
      [req.user.id, amount]
    );

    res.json(newExpense.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update an expense

router.put("/expense/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    const updateExpense = await pool.query(
      "UPDATE expenses SET expense_amount = $1 WHERE expense_id = $2 AND user_id = $3 RETURNING *",
      [amount, id, req.user.id]
    );

    if (updateExpense.rows.length === 0) {
      return res.json("This expense is not yours");
    }

    res.json("Expense was updated");
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

module.exports = router;
