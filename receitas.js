// Receitas da ceia. Usado pelo cardápio (index.html) e pelo mercado (mercado.html).
// Para mudar um ingrediente, mude só aqui.
// n = nome, q = quantidade (null = a gosto), u = unidade, obs = detalhe, c = corredor do mercado

var UNIDADES = {
  g: ['g', 'g'], kg: ['kg', 'kg'], ml: ['ml', 'ml'], l: ['l', 'l'],
  colher: ['colher de sopa', 'colheres de sopa'],
  un: ['unidade', 'unidades'], dente: ['dente', 'dentes'],
  punhado: ['punhado', 'punhados'], pao: ['pão', 'pães'],
  pacote: ['pacote', 'pacotes'], garrafa: ['garrafa', 'garrafas']
};

var RECEITAS = {
  1: { nome: 'Carpaccio de Salmão', preco: 'R$ 90,00',
    passos: ['Deixe o salmão uns 20 minutos no freezer para firmar. Com uma faca bem afiada, corte fatias finas e arrume no prato.', 'Espalhe a cebola roxa fatiada fina, as alcaparras e as raspas de limão.', 'Esprema metade do limão por cima, regue com azeite e tempere com sal e pimenta.', 'Deixe na geladeira até a hora de servir. Coloque a salsinha por cima.', 'Sirva com as torradas.'],
    itens: [
      { n: 'Salmão fresco', q: 500, u: 'g', obs: 'em fatias', c: 'Carnes e peixes' },
      { n: 'Azeite', q: 3, u: 'colher', c: 'Mercearia' },
      { n: 'Limão', q: 1, u: 'un', obs: 'raspas e suco', c: 'Hortifrúti' },
      { n: 'Alcaparras', q: 2, u: 'colher', c: 'Mercearia' },
      { n: 'Cebola roxa', q: 1, u: 'un', obs: 'pequena', c: 'Hortifrúti' },
      { n: 'Torradas', q: 1, u: 'pacote', obs: 'para acompanhar', c: 'Mercearia' },
      { n: 'Sal', q: null, c: 'Mercearia' },
      { n: 'Pimenta', q: null, c: 'Mercearia' },
      { n: 'Salsinha', q: 2, u: 'colher', obs: 'picada', c: 'Hortifrúti' }
    ] },
  2: { nome: 'Tábua de Frios', preco: 'R$ 110,00',
    passos: ['Fatie os queijos e os salames.', 'Lave as uvas.', 'Arrume tudo na tábua.', 'Coloque o mel e as nozes.', 'Sirva com as torradas.'],
    itens: [
      { n: 'Queijo brie', q: 150, u: 'g', c: 'Frios e laticínios' },
      { n: 'Queijo gouda', q: 150, u: 'g', c: 'Frios e laticínios' },
      { n: 'Salames', q: 150, u: 'g', c: 'Frios e laticínios' },
      { n: 'Uvas frescas', q: 300, u: 'g', c: 'Hortifrúti' },
      { n: 'Mel', q: 3, u: 'colher', c: 'Mercearia' },
      { n: 'Nozes', q: 50, u: 'g', c: 'Mercearia' },
      { n: 'Torradas', q: 1, u: 'pacote', obs: 'para acompanhar', c: 'Mercearia' }
    ] },
  3: { nome: 'Bruschetta de Pera e Gorgonzola', preco: 'R$ 50,00',
    passos: ['Ligue o forno a 180 °C. Corte o pão em fatias, coloque numa assadeira, regue com azeite e leve ao forno por 5 minutos, até ficar crocante.', 'Tire do forno e coloque a pera fatiada fina e o gorgonzola em pedaços sobre cada fatia.', 'Espalhe as nozes picadas.', 'Volte ao forno por mais 5 minutos, até o queijo derreter.'],
    itens: [
      { n: 'Pão italiano', q: 1, u: 'pao', obs: 'cerca de 10 fatias', c: 'Mercearia' },
      { n: 'Azeite', q: 2, u: 'colher', c: 'Mercearia' },
      { n: 'Pera', q: 2, u: 'un', c: 'Hortifrúti' },
      { n: 'Gorgonzola', q: 150, u: 'g', c: 'Frios e laticínios' },
      { n: 'Nozes', q: 50, u: 'g', c: 'Mercearia' }
    ] },
  5: { nome: 'Entrecot', preco: 'R$ 140,00',
    passos: ['Faça antes: descasque a batata baroa, corte em pedaços e cozinhe em água com sal por cerca de 20 minutos, até ficar bem macia.', 'Escorra e amasse com o leite de coco aquecido e 2 colheres de sopa de manteiga até virar purê. Prove o sal e mantenha tampado.', 'Corte 5 bifes de 3 cm de espessura. Tempere com sal. Aqueça bem a frigideira com azeite e grelhe de 4 a 5 minutos de cada lado, virando só uma vez. Faça em 2 ou 3 levas, sem encher a frigideira.', 'Na mesma frigideira, ferva o vinho tinto raspando o fundo, até reduzir quase pela metade (uns 5 minutos).', 'Desligue o fogo, junte 2 colheres de sopa de manteiga e misture até o molho ficar brilhante.', 'Sirva os bifes com o molho e o purê.'],
    itens: [
      { n: 'Bifes de entrecot', q: 1000, u: 'g', obs: '3 cm de espessura', c: 'Carnes e peixes' },
      { n: 'Azeite', q: 2, u: 'colher', c: 'Mercearia' },
      { n: 'Vinho tinto (para o molho)', q: 250, u: 'ml', obs: 'pode ser da garrafa da mesa', c: 'Bebidas' },
      { n: 'Manteiga', q: 4, u: 'colher', obs: '2 colheres no molho e 2 no purê', c: 'Frios e laticínios' },
      { n: 'Batata baroa', q: 1000, u: 'g', obs: 'para o purê', c: 'Hortifrúti' },
      { n: 'Leite de coco', q: 200, u: 'ml', obs: 'para o purê', c: 'Mercearia' },
      { n: 'Sal', q: null, c: 'Mercearia' }
    ] },
  6: { nome: 'Vagem Salteada', preco: 'R$ 40,00',
    passos: ['Lave a vagem, corte as pontas e cozinhe em água fervente com sal por 3 a 4 minutos. Escorra. Pode fazer antes: passe em água gelada e guarde na geladeira.', 'Derreta a manteiga na frigideira e doure o alho por 1 minuto.', 'Junte a vagem e salteie por 2 a 3 minutos.', 'Tempere com sal e pimenta.', 'Finalize com as amêndoas e o manjericão.'],
    itens: [
      { n: 'Vagem', q: 500, u: 'g', c: 'Hortifrúti' },
      { n: 'Manteiga', q: 2, u: 'colher', c: 'Frios e laticínios' },
      { n: 'Alho', q: 2, u: 'dente', c: 'Hortifrúti' },
      { n: 'Amêndoas laminadas', q: 50, u: 'g', c: 'Mercearia' },
      { n: 'Manjericão fresco', q: 1, u: 'punhado', obs: 'de folhas', c: 'Hortifrúti' },
      { n: 'Sal', q: null, c: 'Mercearia' },
      { n: 'Pimenta', q: null, c: 'Mercearia' }
    ] },
  7: { nome: 'Ganache de Chocolate', preco: 'R$ 40,00',
    passos: ['Pique o chocolate em pedaços.', 'Aqueça o creme de leite na panela, sem ferver.', 'Com o creme bem quente, coloque o chocolate e misture até derreter.', 'Distribua nos bowls e leve à geladeira.', 'Sirva com morangos e raspas de chocolate.'],
    itens: [
      { n: 'Chocolate meio amargo', q: 200, u: 'g', c: 'Mercearia' },
      { n: 'Creme de leite', q: 200, u: 'g', obs: 'uma caixinha, aquecido', c: 'Frios e laticínios' },
      { n: 'Morangos', q: 250, u: 'g', obs: 'para acompanhar', c: 'Hortifrúti' }
    ] }
};

// Bebidas para servir (não entram nas receitas)
var BEBIDAS = [
  { n: 'Vinho branco seco', q: 1, u: 'garrafa', obs: 'Entrada' },
  { n: 'Vinho tinto seco', q: 2, u: 'garrafa', obs: 'Jantar' },
  { n: 'Espumante', q: 1, u: 'garrafa', obs: 'Sobremesa' }
];

// 500 -> "500 g" | 1000 -> "1 kg" | null -> "a gosto"
function formatarQtd(q, u) {
  if (q == null) return 'a gosto';
  if (u === 'g' && q >= 1000) { q = q / 1000; u = 'kg'; }
  if (u === 'ml' && q >= 1000) { q = q / 1000; u = 'l'; }
  var nome = UNIDADES[u] || [u, u];
  var txt = String(Math.round(q * 100) / 100).replace('.', ',');
  return txt + ' ' + (q > 1 ? nome[1] : nome[0]);
}

// Texto que aparece ao lado do ingrediente na janela da receita
function detalheItem(i) {
  return '- ' + (i.obs ? '(' + i.obs + ') - ' : '') + formatarQtd(i.q, i.u);
}

// Junta os ingredientes de todas as receitas (itens repetidos somam)
// Volta: { 'Corredor': [ { nome, qtd, usado } ] }
function juntarItens() {
  var mapa = {}, ordem = [];
  Object.keys(RECEITAS).forEach(function (id) {
    var r = RECEITAS[id];
    r.itens.forEach(function (i) {
      var m = mapa[i.n];
      if (!m) { m = mapa[i.n] = { cat: i.c, qtds: {}, unidades: [], usado: [] }; ordem.push(i.n); }
      if (i.q != null) {
        if (m.qtds[i.u] == null) { m.qtds[i.u] = 0; m.unidades.push(i.u); }
        m.qtds[i.u] += i.q;
      }
      if (m.usado.indexOf(r.nome) < 0) m.usado.push(r.nome);
    });
  });
  BEBIDAS.forEach(function (b) {
    if (!mapa[b.n]) {
      var m = mapa[b.n] = { cat: 'Bebidas', qtds: {}, unidades: [], usado: [b.obs] };
      if (b.q != null) { m.qtds[b.u] = b.q; m.unidades.push(b.u); }
      ordem.push(b.n);
    }
  });
  var grupos = {};
  ordem.forEach(function (n) {
    var m = mapa[n];
    var partes = m.unidades.map(function (u) { return formatarQtd(m.qtds[u], u); });
    if (!partes.length && m.cat !== 'Bebidas') partes = ['a gosto'];
    (grupos[m.cat] = grupos[m.cat] || []).push({ nome: n, qtd: partes.join(' + '), usado: m.usado.join(', ') });
  });
  return grupos;
}
