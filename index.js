const express = require('express');
const userRouter = require('./routes/UserRoutes');
const loginRouter = require('./routes/LoginRouter');
const categoriesRouter = require('./routes/CategoryRouter');
const postRouter = require('./routes/PostRouter');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use((err, _req, res, _next) => {
  if (err.details) {
    const [error] = err.details;
    const { message } = error;

    return res.status(400).json({ message });
  }

  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});
