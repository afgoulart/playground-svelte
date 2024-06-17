import { Express } from 'express'

export const routes = (app: Express) => {
  app.post('/users', (req: Request, res: Response) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
      return res.status(400).send({ message: 'Invalid input' });
    }
    users.push({ id, name, email });
    res.status(201).send({ message: 'User created successfully' });
  });

  app.delete('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.status(204).send();
  });
}