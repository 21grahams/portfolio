DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE IF NOT EXISTS users(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(200),
  message VARCHAR(1000),
  PRIMARY KEY (id)
);