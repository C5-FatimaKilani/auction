DROP DATABASE auction;


CREATE DATABASE auction;


USE auction;


CREATE TABLE
  roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
  );


CREATE TABLE
  user(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phoneNum VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
  );


CREATE TABLE
  products(
    id INT AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    user_product_id INT NOT NULL,
    image VARCHAR(1000) NOT NULL,
    FOREIGN KEY (user_product_id) REFERENCES user(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
  );


CREATE TABLE
  auction (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    price VARCHAR(10) NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    PRIMARY KEY(id)
  );


INSERT INTO
  roles
VALUES
  (1, "SELLER", 0),
  (2, "BUYER", 0);