const express = require('express');
const cors = require('cors');

const solutionsRouter = require('./routes/solutions');
const projectsRouter = require('./routes/projects');
const fundingRouter = require('./routes/funding');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'HASSEEF Platform API scaffold is running.' });
});

app.use('/api/solutions', solutionsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/funding', fundingRouter);

app.listen(PORT, () => {
  console.log(`HASSEEF backend listening on port ${PORT}`);
});
