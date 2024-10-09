import { PrismaClient } from '@prisma/client';
import { produtos } from '../src/core';

const prisma = new PrismaClient();

async function seed() {
    await prisma.produto.createMany({
        data: produtos.map(({ id, tags, ...produto }) => ({
            ...produto,
            tags: tags.join(', ')  // Converte array de tags para string separada por vírgulas
        })),
    });
}

seed();
