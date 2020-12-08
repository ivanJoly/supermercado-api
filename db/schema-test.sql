-- MySQL Workbench Forward Engineering
CREATE DATABASE main_db;
USE main_db;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plataforma5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NULL,
  `firstName` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `role` VARCHAR(255) DEFAULT("buyer") NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

/*
Usuario{
id	integer($int64)
username	string
firstName	string
lastName	string
email	string
password	string
role	string
*/

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (id,userName,firstName,lastName,email,password,role)
values
(1,'juanCor92',"juan","ignacio","cor","juanignaciocor92@gmail.com","nacho123","isAdmin");

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `quantity` INT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` (id,name,category,quantity,description,price)
values
(1,'Acondicionador para cabellos dañados', 'Perfumería e Higiene', 10, 'Acondicionador', 50);

/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `state` ENUM('active', 'closed') NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
INSERT INTO `Cart` (id, userId)
values
(1,1);

/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `CartProducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CartProducts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cartId` INT NOT NULL,
  `productId` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `CartProducts` WRITE;
/*!40000 ALTER TABLE `CartProducts` DISABLE KEYS */;
INSERT INTO `CartProducts` (id, cartId, productId)
values
(1,1,1);

/*!40000 ALTER TABLE `CartProducts` ENABLE KEYS */;
UNLOCK TABLES;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

