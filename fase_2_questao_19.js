const pessoas = [ 
  { nome: 'Ana', cidade: 'SP' }, 
  { nome: 'Lucas', cidade: 'RJ' }, 
  { nome: 'Bruna', cidade: 'SP' }, 
  { nome: 'Caio', cidade: 'MG' } ];

const agruparPorCidade = pessoas.map(p => p.cidade).reduce((acc, cidade) => {acc[cidade] = pessoas.filter(p => p.cidade === cidade); return acc;}, 
  {});

console.log(agruparPorCidade);
