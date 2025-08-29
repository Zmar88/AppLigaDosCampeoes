-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Jan-2022 às 16:08
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `trab2pw`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `equipas`
--

CREATE TABLE `equipas` (
  `id` int(11) NOT NULL COMMENT 'primary key',
  `name` varchar(250) DEFAULT NULL COMMENT 'team name',
  `year` varchar(250) DEFAULT NULL COMMENT 'fouding year',
  `cl_titles` int(11) DEFAULT NULL COMMENT 'number of CL titles',
  `img` mediumtext DEFAULT NULL COMMENT 'image'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `equipas`
--

INSERT INTO `equipas` (`id`, `name`, `year`, `cl_titles`, `img`) VALUES
(1, 'SL Benfica', '1904', 2, NULL),
(2, 'FC Red Bull Salzburg', '2005', 0, NULL),
(3, 'FC Bayern Munchen', '1900', 6, NULL),
(4, 'Club Atletico de Madrid', '1903', 0, NULL),
(5, 'Manchester United FC', '1878', 3, NULL),
(6, 'Sporting CP', '1906', 0, NULL),
(7, 'Manchester City FC', '1880', 0, NULL),
(8, 'FC Villarreal', '1923', 0, NULL),
(9, 'Juventus FC', '1897', 2, NULL),
(10, 'AFC Ajax', '1900', 4, NULL),
(11, 'FC Internazionale Milano', '1908', 3, NULL),
(12, 'FC Liverpool', '1892', 6, NULL),
(13, 'Chelsea FC', '1905', 2, NULL),
(14, 'LOSC Lille', '1944', 0, NULL),
(15, 'FC Paris Saint-Germain', '1970', 0, NULL),
(16, 'Real Madrid CF', '1902', 13, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `equipas`
--
ALTER TABLE `equipas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `equipas`
--
ALTER TABLE `equipas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key', AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
