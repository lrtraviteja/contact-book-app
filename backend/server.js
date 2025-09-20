import express from 'express';
import cors from 'cors';
import database from './database.js'
import contactsRouter from './routes/contactsRouter.js';



//app config
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.locals.db = database;

app.use('/api/contacts', contactsRouter);

app.get('/', (req, res) => {
    res.send('API Working...')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
