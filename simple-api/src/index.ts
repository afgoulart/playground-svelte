import express, { Request, Response, NextFunction } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

interface User {
  id: string;
  name: string;
  email: string;
}

let users: User[] = [];
app.use(routers);

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
