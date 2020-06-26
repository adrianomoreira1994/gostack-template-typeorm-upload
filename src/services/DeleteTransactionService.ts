import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const repository = getRepository(Transaction);

    const transaction = await repository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction is not exists', 404);
    }

    await repository.remove(transaction);
  }
}

export default DeleteTransactionService;
