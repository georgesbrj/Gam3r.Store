import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {
  constructor(readonly repo: ProdutoPrisma) {}

  // Acessando os dados do Core
  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos.map((produto) => ({
      ...produto,
      especificacoes: { destaque: produto.especificacoes.destaque },
    }));
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
    const produto = produtos.find((produto) => produto.id === +id);
    return produto ?? null;
  }

  //Acessando os dados do banco
  // @Get()
  //  async obterProdutos(): Promise<Produto[]> {
  //     return this.repo.obter();
  //   }

  // @Get(':id')
  // async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {

  //   return this.repo.obterPorId(Number(id));
  // }
}
