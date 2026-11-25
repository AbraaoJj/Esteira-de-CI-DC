const { initializeApp } = require("firebase/app"); 
const apiKey = process.env.FIREBASE_API_KEY; 
console.log("Iniciando teste automatizado de integracao..."); 
if (!apiKey || apiKey.trim() === "") { 
 console.error("ERRO CRITICO: Variavel FIREBASE_API_KEY nao encontrada nos Secrets!");  process.exit(1); 
} 
try { 
 const app = initializeApp({ 
 apiKey: apiKey, 
 projectId: process.env.FIREBASE_PROJECT_ID || "fasttrack-demo-lab" 
 }); 
 console.log("Sucesso! Firebase inicializado para o projeto:", app.options.projectId);  process.exit(0); 
} catch (erro) { 
 console.error("Falha ao inicializar Firebase:", erro.message); 
 process.exit(1); 
} 
