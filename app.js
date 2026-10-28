const express = require('express');
const os = require('os');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Banco de dados em memória (simples para o começo)
let products = [
  { id: 1, name: 'Notebook Pro', stock: 10 },
  { id: 2, name: 'Mouse Sem Fio', stock: 50 }
];

// Rota de Health Check (Crucial para Kubernetes/Docker)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'UP', 
    hostname: os.hostname(), 
    timestamp: new Date() 
  });
});

// Rota para listar produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// Rota para cadastrar produto
app.post('/products', (req, res) => {
  const { name, stock } = req.body;
  const newProduct = { id: products.length + 1, name, stock: Number(stock) || 0 };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Rota para simular compra
app.put('/products/:id/buy', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Produto nao encontrado' });
  }

  if (product.stock <= 0) {
    return res.status(400).json({ error: 'Estoque esgotado!' });
  }

  product.stock -= 1;
  res.json({ message: 'Compra realizada com sucesso!', product });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT} no host: ${os.hostname()}`);
});