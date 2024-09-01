import styles from "./styles.module.scss";

export const Parameters = (setSelecionados) => {
  
  const handleCheckboxChange = (nome: string) => {
    setSelecionados((prevSelecionados: string[]) =>
      prevSelecionados.includes(nome)
        ? prevSelecionados.filter((item) => item !== nome)
        : [...prevSelecionados, nome]
    );
  };

  const cashFlowData = [
    {
      nome: "Entradas de Caixa",
      descricao:
        "Recursos financeiros recebidos pela empresa, como vendas, pagamentos de clientes e rendimentos de investimentos.",
    },
    {
      nome: "Saídas de Caixa",
      descricao:
        "Pagamentos efetuados pela empresa, como salários, impostos, aluguel e compra de insumos.",
    },
    {
      nome: "Fluxo de Caixa Operacional",
      descricao:
        "Dinheiro gerado pelas operações principais da empresa, excluindo investimentos e financiamento.",
    },
    {
      nome: "Fluxo de Caixa de Investimento",
      descricao:
        "Entradas e saídas de caixa relacionadas à compra ou venda de ativos de longo prazo, como propriedades e equipamentos.",
    },
    {
      nome: "Fluxo de Caixa de Financiamento",
      descricao:
        "Entradas e saídas de caixa provenientes de atividades de financiamento, como empréstimos e emissão de ações.",
    },
    {
      nome: "Saldo Inicial de Caixa",
      descricao:
        "Montante de dinheiro disponível em caixa no início do período.",
    },
    {
      nome: "Saldo Final de Caixa",
      descricao:
        "Montante de dinheiro disponível em caixa no final do período.",
    },
    {
      nome: "Contas a Receber",
      descricao:
        "Valor que a empresa espera receber de clientes por vendas a crédito.",
    },
    {
      nome: "Contas a Pagar",
      descricao:
        "Obrigações financeiras da empresa com fornecedores e credores.",
    },
    {
      nome: "Compras corporativas",
      descricao:
        "Tempo necessário para converter investimentos em estoque e entradas em dinheiro de vendas.",
    },
    {
      nome: "Projeção de Fluxo de Caixa",
      descricao: "Previsão das entradas e saídas futuras de caixa.",
    },
  ];

  return (
    <div className={styles.parameters}>
      <div className={styles.cashFlows}>
        {cashFlowData.map((item, index) => (
          <div key={index} className={styles.cashFlow}>
            <input
              type="checkbox"
              name={item.nome}
              id=""
              value={item.nome}
              onChange={() => handleCheckboxChange(item.nome)}
            />
            <div>
              <div className={styles.cashFlow__title}>
                <h5>{item.nome}</h5>
              </div>
              <div className={styles.cashFlow__description}>
                <p style={{fontSize: 12}}>{item.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
