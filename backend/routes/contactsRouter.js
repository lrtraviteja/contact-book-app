import { Router } from "express";

const contactsRouter = Router();

// POST /contacts - Add a new contact
contactsRouter.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        error: "Missing required fields: name, email, and phone are required",
      });
    }

    const db = req.app.locals.db;

    // Insert new contact
    const result = await db.run(
      "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone]
    );

    // Get the created contact
    const newContact = await db.get("SELECT * FROM contacts WHERE id = ?", [
      result.lastID,
    ]);

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /contacts - Fetch all contacts by pagination
contactsRouter.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const db = req.app.locals.db;

    const totalResult = await db.get("SELECT COUNT(*) as count FROM contacts");
    const total = totalResult.count;

    // Get all paginated contacts
    const contacts = await db.all(
      "SELECT * FROM contacts ORDER BY id LIMIT ? OFFSET ?",
      [limit, offset]
    );

    res.json({
      contacts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalContacts: total,
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE - Remove a contact
contactsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = req.app.locals.db;

    // Check if contact exists
    const existingContact = await db.get(
      "SELECT * FROM contacts WHERE id = ?",
      [id]
    );
    if (!existingContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    // Delete the contact
    await db.run("DELETE FROM contacts WHERE id = ?", [id]);
    res.json({ message: "Contact deleted successfully" });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default contactsRouter;
