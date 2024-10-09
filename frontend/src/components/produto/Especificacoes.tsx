import { Produto } from "@/core";
import Tag from "../shared/Tags";
import { IconTag } from "@tabler/icons-react";

export interface EspecificacoesProps {
    produto: Produto
}

export default function Especificacoes(props: EspecificacoesProps) {
    const { produto } = props
    return (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag label={produto?.especificacoes.destaque}
                    icone={IconTag}
                    outlined
                />
                {
                    produto?.especificacoes &&
                    Object.keys(produto.especificacoes!)
                        .filter((k) => k !== 'destaque')
                        .map((chave) => (
                            <div key={chave} className="flex gap-1">
                                <span className="p-2 w-1/3 rounded">
                                    {chave}
                                    <span className="p-2 w-1/3 rounded flex flex-col">
                                        {produto?.especificacoes[chave]}
                                    </span>
                                </span>
                            </div>
                        ))

                }
            </div>
        </div>
    )
}