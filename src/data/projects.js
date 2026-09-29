import {agenda, marioImg, shopeeCart, IaAgentsLab, olaMundo} from "../assets/images" 

export const projects = [
    {
        id: 1,
        title: "Agenda",
        featured: true,
        image: agenda,
        description: "Aplicação fullstack de gerenciamento de contatos desenvolvida com Node.js, Express e MongoDB. Possui autenticação segura, login baseado em sessões, criptografia de senhas, proteção contra ataques CSRF e gerenciamento de contatos seguindo a arquitetura MVC e as melhores práticas de segurança.",
        github: "https://github.com/MilenaMP/Agenda",
        demo: "https://agenda-0a9k.onrender.com/",
        techs: [ "Node.js", "Express", "MongoDB", "Mongoose", "JavaScript"],
    },
    {
        id: 2,
        title: "Mario Kart Simulator",
        featured: false,
        image: marioImg,
        description:  "Simulador de corridas inspirado em Mario Kart, desenvolvido para terminal com Node.js e JavaScript. Possui seleção de personagens, mecânicas de corrida por turnos, eventos aleatórios, sistema de batalhas, gerenciamento de vidas, efeitos de itens e arquitetura modular, demonstrando programação orientada a objetos e lógica de jogos.",
        github: "https://github.com/MilenaMP/Projeto-mario-kart",
        demo: "#",
        techs: [ "Node.js", "JavaScript", "OOP", "Async/Await"],
    }, 
    {
        id: 3,
        title: "Shopee Cart Simulator",
        featured: false,
        image: shopeeCart,
        description:  "Simulador de carrinho de compras inspirado na Shopee, desenvolvido para terminal com Node.js e JavaScript ES Modules. É possível adicionar produtos, remover itens, excluir produtos do carrinho, calcular subtotais e o valor total da compra, além de persistir os dados em um arquivo JSON, permitindo que o carrinho seja carregado novamente quando a aplicação é executada. O projeto foi desenvolvido utilizando arquitetura modular, separando responsabilidades entre modelos, serviços, utilitários e armazenamento de dados.",
        github: "https://github.com/MilenaMP/shopee-cart-simulator",
        demo: "#",
        techs: [ "Node.js", "JavaScript", "File System (fs/promises)", "JSON(Persistência de dados)", "Async/Await"],
    },
    {
        id: 4,
        title: "AI Agents Lab",
        featured: false,
        image: IaAgentsLab,
        description:  "Laboratório prático dedicado ao desenvolvimento e experimentação com agentes de Inteligência Artificial aplicados ao desenvolvimento de software. Reúne estudos, experimentos e aplicações utilizando agentes, ferramentas de IA e automação de tarefas de desenvolvimento.",
        github: "https://github.com/MilenaMP/ai-agents-lab",
        demo: "#",
        techs: [ "IA", "AI Agents", "GitHub Copilot", "Microsoft Foundry", "Node.js", "JavaScript" ],
    },
    {
        id: 5,
        title: "Alura ola mundo",
        featured: false,
        image: olaMundo,
        description:  "Portfólio pessoal desenvolvido com React, JavaScript, HTML e CSS, apresentando projetos, artigos sobre tecnologia e conteúdos relacionados ao desenvolvimento de software. Possui navegação entre as páginas Início e Sobre Mim, utilizando React Router e React Markdown para organização e renderização dos conteúdos.",
        github: "https://github.com/MilenaMP/alura-ola_mundo",
        demo: "https://alura-ola-mundo-two.vercel.app/",
        techs: ["React", "JavaScript", "HTML", "CSS", "React Router", "React Markdown" ],
    }

]