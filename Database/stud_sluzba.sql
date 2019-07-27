-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2019 at 03:41 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stud_sluzba`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_05_22_215254_create_uceniks_table', 1),
(2, '2019_05_22_215521_create_usmerenjes_table', 1),
(3, '2019_05_22_215759_create_profesors_table', 1),
(4, '2019_05_22_215909_create_predmets_table', 1),
(5, '2019_07_26_133716_create_uceniks_predmets_table', 1),
(6, '2019_07_26_172552_add_ocena_to_predmet_ucenik_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `predmets`
--

CREATE TABLE `predmets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `oznaka` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `naziv` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `broj_mesta` bigint(20) NOT NULL,
  `espb` bigint(20) NOT NULL,
  `usmerenje_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `predmets`
--

INSERT INTO `predmets` (`id`, `oznaka`, `naziv`, `broj_mesta`, `espb`, `usmerenje_id`, `created_at`, `updated_at`) VALUES
(1, 'LP', 'Logicko Programiranje', 32, 4, 1, '2019-07-18 22:00:00', '2019-07-18 22:00:00'),
(2, 'C', 'C programiranje', 40, 7, 2, '2019-07-18 22:00:00', '2019-07-18 22:00:00'),
(4, 'MM', 'Merenje sistema', 12, 5, 3, '2019-07-19 22:00:00', '2019-07-19 22:00:00'),
(5, 'OBJ', 'Objektno Programiranje', 20, 7, 1, '2019-07-26 22:00:00', '2019-07-26 22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `predmet_ucenik`
--

CREATE TABLE `predmet_ucenik` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ucenik_id` int(11) NOT NULL,
  `predmet_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `ocena` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `predmet_ucenik`
--

INSERT INTO `predmet_ucenik` (`id`, `ucenik_id`, `predmet_id`, `created_at`, `updated_at`, `ocena`) VALUES
(1, 1, 1, NULL, NULL, 6),
(2, 1, 5, NULL, NULL, 7),
(3, 2, 2, NULL, NULL, 0),
(4, 3, 4, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `profesors`
--

CREATE TABLE `profesors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prezime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jmbg` char(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `korisnicko_ime` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `korisnicka_lozinka` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usmerenje_id` bigint(20) NOT NULL,
  `predmet_id` bigint(20) NOT NULL DEFAULT '0',
  `uloga` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profesors`
--

INSERT INTO `profesors` (`id`, `ime`, `prezime`, `jmbg`, `korisnicko_ime`, `korisnicka_lozinka`, `usmerenje_id`, `predmet_id`, `uloga`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Petar', 'Peric', '2357948621345', 'profa', 'Proba123', 1, 1, 'profesor', NULL, '2019-07-27 11:10:01', '2019-07-27 11:10:01'),
(2, 'Dusan', 'Peric', '0214579486321', 'profa1', 'Proba123', 1, 5, 'profesor', NULL, '2019-07-27 11:10:31', '2019-07-27 11:10:31');

-- --------------------------------------------------------

--
-- Table structure for table `uceniks`
--

CREATE TABLE `uceniks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prezime` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `broj_indeksa` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `korisnicka_lozinka` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prosecna_ocena` double(2,1) NOT NULL,
  `usmerenje_id` int(11) NOT NULL,
  `uloga` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `uceniks`
--

INSERT INTO `uceniks` (`id`, `ime`, `prezime`, `broj_indeksa`, `korisnicka_lozinka`, `prosecna_ocena`, `usmerenje_id`, `uloga`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Marko', 'Markovic', 'e214/2015', 'Proba123', 6.5, 1, 'ucenik', NULL, '2019-07-27 11:09:31', '2019-07-27 11:13:39'),
(2, 'Ilija', 'Spasic', 'e215/2015', 'Proba123', 0.0, 2, 'ucenik', NULL, '2019-07-27 11:20:30', '2019-07-27 11:21:16'),
(3, 'Aleksandar', 'Jeremic', 'e216/2015', 'Proba123', 0.0, 3, 'ucenik', NULL, '2019-07-27 11:31:08', '2019-07-27 11:31:42'),
(4, 'p', 'p', 'e217/2015', 'Proba123', 0.0, 0, 'ucenik', NULL, '2019-07-27 11:35:00', '2019-07-27 11:35:46');

-- --------------------------------------------------------

--
-- Table structure for table `usmerenjes`
--

CREATE TABLE `usmerenjes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sifra` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `naziv` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `oblast` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usmerenjes`
--

INSERT INTO `usmerenjes` (`id`, `sifra`, `naziv`, `oblast`, `created_at`, `updated_at`) VALUES
(1, 'E2', 'Racunarstvo i automatika', 'Elektrotehinka', '2019-07-18 22:00:00', '2019-07-18 22:00:00'),
(2, 'E3', 'Softversko inzenjerstvo', 'Elektrotehinka', '2019-07-18 22:00:00', '2019-07-18 22:00:00'),
(3, 'E1', 'Merenje', 'Elektrotehinka', '2019-07-18 22:00:00', '2019-07-18 22:00:00'),
(4, 'EE', 'Energetika', 'Elektrotehinka', '2019-07-18 22:00:00', '2019-07-18 22:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `predmets`
--
ALTER TABLE `predmets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `predmet_naziv_unique` (`naziv`);

--
-- Indexes for table `predmet_ucenik`
--
ALTER TABLE `predmet_ucenik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesors`
--
ALTER TABLE `profesors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profesors_jmbg_unique` (`jmbg`),
  ADD UNIQUE KEY `profesors_korisnicko_ime_unique` (`korisnicko_ime`);

--
-- Indexes for table `uceniks`
--
ALTER TABLE `uceniks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uceniks_broj_indeksa_unique` (`broj_indeksa`);

--
-- Indexes for table `usmerenjes`
--
ALTER TABLE `usmerenjes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usmerenjes_sifra_unique` (`sifra`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `predmets`
--
ALTER TABLE `predmets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `predmet_ucenik`
--
ALTER TABLE `predmet_ucenik`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `profesors`
--
ALTER TABLE `profesors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `uceniks`
--
ALTER TABLE `uceniks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usmerenjes`
--
ALTER TABLE `usmerenjes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
