-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Abr-2025 às 14:25
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `plataforma_inclusiva`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome_responsavel` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nome_crianca` varchar(100) NOT NULL,
  `genero` enum('masculino','feminino') NOT NULL,
  `idade` int(11) DEFAULT NULL CHECK (`idade` between 5 and 8),
  `nivel_autismo` enum('leve','moderado','severo') NOT NULL,
  `senha_hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome_responsavel`, `email`, `nome_crianca`, `genero`, `idade`, `nivel_autismo`, `senha_hash`) VALUES
(1, 'Pão doce', 'paodoce@gmail.com', 'Broa', 'feminino', 7, 'leve', '$2y$10$uc4RY6vr8XZc1tgcj.u0huM3eovEuTeVyn2X8oplwq/Gr5glXOf3q'),
(2, 'aaaaa', 'aaaa@gmail.com', 'bbbb', 'masculino', 5, 'moderado', '$2y$10$bJ2MC0ZTjrpvVmYVKwulueIh3PbUAbWcj8P6KDN.mq4P3DFQgzY3.'),
(4, 'cccccc', 'cccccc@gmail.com', 'dddd', 'masculino', 8, 'moderado', '$2y$10$8lEU7KIsBzeNimrr6NjDVezONrhpxMF2nUuQtS1CodQmqp7bDlVPW'),
(5, 'lebo', 'lebo@gmail.com', 'Dandara', 'feminino', 5, 'leve', '$2y$10$s2KgVGZ9./nVlNRKKMkiP.jyZYn4uZm2KVxq9UqMXs9E238AFixqK'),
(6, 'Daniel Ambrósio', 'dambrosio@gmail.com', 'Daniela', 'feminino', 7, 'leve', '$2y$10$OdWEeKj4yDw4UwpLuKXWk.xTcH/T2aG0d5PzjBLbW0en2kCnFto6S');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_responsavel` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
