const express = require('express');
const calculate = require('./calculando.js');
const app = express ();
const port = 3000;

app.get('/', (requisicao, resposta) => {
    const type = requisicao.query.type;
    const a = parseInt(requisicao.query.a);
    const b = parseInt(requisicao.query.b);

    if(type == 'soma' || type == '+' || type == 'sub' || type == '-' || type == 'mult' || type == '*' || type == 'div' || type == '/'){      // 'calculando'){   //'calculate'//
    const result = calc(type, a, b);
    resposta.send(result);
    } else{
        resposta.send('Utilize um destes operadores para calcular: soma, sub, mult ou div ');
    }
});

app.post('/', (requisicao, resposta) => {
    const pt = requisicao.body
    const result = calc(pt.type, pt.a, pt.b)
    resposta.send(result)
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}')
});
