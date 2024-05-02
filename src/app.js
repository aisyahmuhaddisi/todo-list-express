import mongoose from 'mongoose';
import express from 'express';
import http from 'http';
import { config } from 'dotenv';
import cors from 'cors'
// import errorHandler from './middlewares/ErrorHandler';
import todoRoutes from './routes/TodoRoutes.js';
// import loggerHandler from './middlewares/LoggerHandler';

config()

const app = express();

app.use(cors())
app.use(express.json());

app.use('/todos', todoRoutes);

// app.use(errorHandler);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
  }
);

const con = mongoose.connection;

try {
  con.on('open', () => {
    console.log('Connected to the database');
  })
} catch (error) {
  console.log("Error: " + error);
}


// Listening
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server started on port ' + port);
});

const shutdownProcess = () => {
  // eslint-disable-next-line no-console
  server.close(() => {
    // eslint-disable-next-line no-console
    console.log('closing remaining connection');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdownProcess);
process.on('SIGINT', shutdownProcess);

export default app;
