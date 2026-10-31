# E-commerce DevOps Lab

Um projeto de portfólio focado em demonstrar boas práticas de DevOps, conteinerização, automação de CI/CD e orquestração de microsserviços de forma simples e direta.

---

## Tecnologias Utilizadas

* **Node.js & Express**: API REST leve para gestão de produtos e stock.
* **Docker & Docker Compose**: Empacotamento de aplicação e gestão de ambiente local.
* **GitHub Actions**: Pipeline automatizada de Integração Contínua (CI/CD).
* **Kubernetes (K8s)**: Orquestração de contentores, gestão de réplicas e alta disponibilidade local.

---

## Estrutura do Projeto

```text
ecommerce-devops-lab/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de CI/CD (GitHub Actions)
├── k8s/
│   ├── deployment.yaml     # Manifesto de Deployment do Kubernetes (2 Réplicas)
│   └── service.yaml        # Manifesto de Service (LoadBalancer)
├── app.js                  # Código fonte da API e rotas de Health Check
├── Dockerfile              # Imagem Docker otimizada da aplicação
├── docker-compose.yml      # Orquestração local via Docker Compose
├── .dockerignore           # Ficheiros ignorados pelo Docker
└── package.json            # Dependências do Node.js

Como Executar o Projeto Localmente

Pré-requisitos
Certifica-te de que tens instalados no teu computador:

Docker Desktop (com o Kubernetes ativado nas definições).

Node.js (opcional para testes locais sem Docker).

Método 1: Usando Docker Compose (Recomendado para testes rápidos)
Clona o repositório e entra na pasta do projeto.

Sobe o ambiente com um único comando:

Bash
docker compose up -d
Acede à API no navegador:

Health Check: http://localhost:3000/health

Listar Produtos: http://localhost:3000/products

Para parar os contentores:

Bash
docker compose down

Método 2: Orquestração com Kubernetes (K8s)
Certifica-te de que o Kubernetes está ativo no teu Docker Desktop.

Aplica os manifestos na pasta k8s/:

Bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
Verifica se os pods estão a correr (Running):

Bash
kubectl get pods
Acede à aplicação através do LoadBalancer do Kubernetes:

http://localhost/health


Pipeline de CI/CD (GitHub Actions)

Sempre que é feito um git push para a branch main, o GitHub Actions executa automaticamente um pipeline que:

Faz o checkout do código.

Configura o ambiente Node.js.

Instala as dependências.

Executa um teste de construção (docker build) para garantir que a imagem é gerada sem erros.