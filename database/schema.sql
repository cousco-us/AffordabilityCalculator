-- DROP DATABASE IF EXISTS calculator
CREATE DATABASE calculator;
USE calculator;

DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  price FLOAT NOT NULL,
  zipcode VARCHAR(5) NOT NULL,
  state varchar(2) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS loans;
CREATE TABLE loans (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  type VARCHAR(25) NOT NULL,
  years INT NOT NULL,
  interest_rate FLOAT NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS taxes;
CREATE TABLE taxes (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  state varchar(2) NOT NULL,
  effective_tax_rate FLOAT NOT NULL,
  PRIMARY KEY (id)
);