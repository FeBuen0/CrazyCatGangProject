SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_ong2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_ong2` DEFAULT CHARACTER SET utf8;

-- -----------------------------------------------------
-- Table `db_ong2`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ong2`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idcliente`),
  UNIQUE INDEX `idcliente_UNIQUE` (`idcliente` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ong2`.`clinica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ong2`.`clinica` (
  `idclinica` INT NOT NULL AUTO_INCREMENT,
  `bairro` VARCHAR(100) NOT NULL,
  `rua` VARCHAR(255) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cnpj` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idclinica`),
  UNIQUE INDEX `idclinica_UNIQUE` (`idclinica` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ong2`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ong2`.`items` (
  `iditems` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  `clinica_idclinica` INT NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`iditems`),
  UNIQUE INDEX `iditems_UNIQUE` (`iditems` ASC) VISIBLE,
  INDEX `fk_items_cliente_idx` (`cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_items_clinica1_idx` (`clinica_idclinica` ASC) VISIBLE,
  CONSTRAINT `fk_items_cliente`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `db_ong2`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_items_clinica1`
    FOREIGN KEY (`clinica_idclinica`)
    REFERENCES `db_ong2`.`clinica` (`idclinica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ong2`.`gatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ong2`.`gatos` (
  `idgatos` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `raca` VARCHAR(45) NOT NULL,
  `adotado` TINYINT(1) NOT NULL,
  `clinica_idclinica` INT NOT NULL,
  PRIMARY KEY (`idgatos`),
  UNIQUE INDEX `idgatos_UNIQUE` (`idgatos` ASC) VISIBLE,
  INDEX `fk_gatos_clinica_idx` (`clinica_idclinica` ASC) VISIBLE,
  CONSTRAINT `fk_gatos_clinica`
    FOREIGN KEY (`clinica_idclinica`)
    REFERENCES `db_ong2`.`clinica` (`idclinica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ong2`.`adocao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ong2`.`adocao` (
  `idadocao` INT NOT NULL AUTO_INCREMENT,
  `cliente_idcliente` INT NOT NULL,
  `gatos_idgatos` INT NOT NULL,
  PRIMARY KEY (`idadocao`),
  UNIQUE INDEX `idadocao_UNIQUE` (`idadocao` ASC) VISIBLE,
  INDEX `fk_adocao_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_adocao_gatos1_idx` (`gatos_idgatos` ASC) VISIBLE,
  CONSTRAINT `fk_adocao_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `db_ong2`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_adocao_gatos1`
    FOREIGN KEY (`gatos_idgatos`)
    REFERENCES `db_ong2`.`gatos` (`idgatos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
