# 🚀 Guia de Deploy na Hostinger

## 📋 Pré-requisitos

1. Site já compilado com `npm run build`
2. Acesso ao painel da Hostinger
3. Domínio configurado (multimplant.com.br)

## 📦 Passo a Passo

### 1. Escolha a Opção Correta
No painel da Hostinger, selecione:
- **"Site PHP/HTML personalizado"** ← USE ESTA OPÇÃO

### 2. Preparar os Arquivos

Os arquivos prontos para deploy estão na pasta `dist/` após executar:
```bash
npm run build
```

### 3. Fazer Upload

1. Acesse o **File Manager** no painel da Hostinger
2. Navegue até a pasta pública do seu domínio (geralmente `public_html`)
3. **FAÇA BACKUP** dos arquivos existentes (se houver)
4. **DELETE** todos os arquivos da pasta pública
5. **FAÇA UPLOAD** de TODOS os arquivos da pasta `dist/`:
   - ✅ `index.html`
   - ✅ `.htaccess` (ESSENCIAL para React Router funcionar)
   - ✅ Pasta `assets/` completa
   - ✅ Todos os outros arquivos

### 4. Verificar o .htaccess

O arquivo `.htaccess` é **ESSENCIAL** para que as rotas do React Router funcionem. Ele deve conter:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. Testar o Site

Após o upload, teste todas as páginas:
- ✅ `/` (home)
- ✅ `/o-evento`
- ✅ `/curadoria`
- ✅ `/inscricao`
- ✅ `/contato`

## ⚠️ Problemas Comuns

### Erro 404 em rotas
**Solução:** Verifique se o arquivo `.htaccess` foi enviado corretamente e está na raiz do diretório público.

### Imagens não aparecem
**Solução:** Verifique se toda a pasta `assets/` foi enviada com todos os arquivos.

### CSS/JS não carrega
**Solução:** Verifique os caminhos no `index.html`. Eles devem começar com `/assets/` (caminho absoluto).

## 🔄 Atualizar o Site

Quando precisar atualizar:

1. Faça as alterações no código
2. Execute `npm run build`
3. Faça upload apenas dos arquivos alterados (ou todos para garantir)
4. Limpe o cache do navegador (Ctrl+F5)

## 📝 Notas Importantes

- ⚠️ A pasta `dist/` é gerada automaticamente e **não deve** ser versionada no Git
- ✅ O arquivo `.htaccess` já está configurado e será copiado automaticamente para `dist/` durante o build
- ✅ Todos os caminhos já estão configurados como absolutos (`/assets/...`) para funcionar corretamente

