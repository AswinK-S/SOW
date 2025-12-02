CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- add manual password
INSERT INTO users (email, password)
VALUES ('user@example.com','testPassword');

CREATE TABLE translations(
    key VARCHAR PRIMARY KEY,
    en VARCHAR NOT NULL,
    sv VARCHAR NOT NULL
)

INSERT INTO translations VALUES
('header.home', 'Home', 'Hem'),
('header.order', 'Order', 'Beställ'),
('header.customers', 'Our Customers', 'Våra kunder'),
('header.about', 'About Us', 'Om oss'),
('header.contact', 'Contact Us', 'Kontakta oss'),
('login.title', 'Login', 'Logga in'),
('login.email', 'Enter your email address', 'Ange din e-postadress'),
('login.password', 'Enter your password', 'Ange ditt lösenord');


CREATE TABLE pricelist(
    id SERIAL PRIMARY KEY,
    article_no VARCHAR(50),
    product_service VARCHAR(255),
    in_price NUMERIC(10,2),
    price NUMERIC(10,2),
    unit VARCHAR(50),
    in_stock INTEGER,
    description TEXT
)