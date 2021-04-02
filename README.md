Crie o Banco de Dados

CREATE DATABASE devnotes CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- devnotes.notes definition

CREATE TABLE `notes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

Instale o npm se não tiver instalado.

acesse a pasta do projeto e execute:

npm install

Se tiver algum problema de instalação, remova as dependências dp packages.json e instale manualmente:

npm init

npm install express

npm install express mysql dotnev cors body-parser

npm install nodemon --save-dev

execute o projeto:

npm start

Para testes localmente, use o site: resttesttest.com

