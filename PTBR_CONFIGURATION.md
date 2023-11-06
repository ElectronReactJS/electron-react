# Arquivos de Configuração

## Diretrizes

1. **.anyhooksrc**
    - Este arquivo contém preferências de usuário e de nível de projeto e deve estar localizado no diretório principal do usuário.

2. **.anyhooksopenapi.enc**
    - Este arquivo criptografado contém informações sensíveis e também deve estar localizado no diretório principal do usuário.

## Referências
- [Melhores Práticas para Arquivos de Configuração](https://12factor.net/config)


# Diretrizes de Configuração para o Projeto Electron-React Boilerplate

## Introdução

O projeto Electron-React Boilerplate é estruturado para fornecer uma configuração simplificada e padronizada para a construção de aplicações Electron-React. Arquivos de configuração são instrumentais para adaptar a configuração do projeto às necessidades específicas e garantir um ambiente de desenvolvimento consistente. Este documento descreve as diretrizes e práticas para gerenciar os arquivos de configuração dentro do projeto.

## Arquivos de Configuração

### `.env`

O arquivo `.env` é usado para definir variáveis específicas do ambiente que são cruciais para a funcionalidade do projeto. É aconselhável manter informações sensíveis, como chaves de API ou credenciais, fora do controle de origem, utilizando o arquivo `.env`.

Exemplo:
```plaintext
API_KEY=sua-chave-de-api-aqui
```

### `.gitconfig`

O arquivo `.gitconfig` é usado para a configuração do Git em nível de projeto, garantindo que o Git se comporte como esperado para todos os colaboradores, independentemente de suas configurações globais pessoais.

Exemplo:
```plaintext
[core]
    autocrlf = input
```

### `.editorconfig`

O arquivo `.editorconfig` ajuda a manter estilos de codificação consistentes para vários desenvolvedores que trabalham no mesmo projeto, em diferentes editores e IDEs.

Exemplo:
```plaintext
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Gerenciando Configurações

### Controle de Versão

- É aconselhável manter um modelo dos arquivos de configuração com os campos necessários no controle de versão.
- Informações sensíveis ou específicas do ambiente devem ser omitidas, e um espaço reservado ou documentação deve ser fornecido para que os colaboradores saibam quais informações eles precisam fornecer.

### Documentação

- Documente as configurações não triviais ou configurações que divergem das configurações padrão ou práticas comuns.
- Forneça documentação suficiente para explicar a finalidade e o uso das diferentes configurações para novos colaboradores.

### Automação

- Utilize scripts de configuração ou ferramentas de automação para simplificar o processo de configuração.
- Certifique-se de que as configurações automáticas tenham documentação clara e fallbacks para configuração manual.

## Conclusão

A gestão adequada e a documentação dos arquivos de configuração são essenciais para manter um ambiente de projeto robusto, consistente e amigável para os colaboradores. Seguir estas diretrizes garantirá que o projeto permaneça organizado, flexível e fácil de configurar para novos colaboradores.


---

Essas diretrizes fornecem uma abordagem estruturada para gerenciar arquivos de configuração no projeto Electron-React Boilerplate, garantindo um processo de configuração consistente e simplificado para todos os colaboradores.

    Autor: Ricardo Malnati
