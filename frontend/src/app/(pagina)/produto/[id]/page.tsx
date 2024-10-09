'use client'
import InformacoesProduto from '@/components/produto/InformacoesProduto'
import TituloProduto from '@/components/produto/TituloProduto'
import { Produto } from '@/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useEffect, useState } from 'react'

export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? (
            <div className='flex flex-col gap-20 text-center'>                     
                    <TituloProduto produto={produto} />
                    <InformacoesProduto  produto={produto}/>
            </div>
                ) : 
        <div>Produto não encontrado</div>
}
