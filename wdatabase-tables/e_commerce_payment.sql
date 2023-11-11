-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: e_commerce
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_seller` int(11) NOT NULL,
  `paid_out` tinyint(1) DEFAULT 0,
  `status_paid` varchar(20) NOT NULL DEFAULT '201',
  `payment_type` varchar(20) NOT NULL,
  `pricing` float NOT NULL,
  `external_references` varchar(1000) NOT NULL,
  `payment_url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  KEY `id_user` (`id_user`),
  KEY `id_seller` (`id_seller`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`id_seller`) REFERENCES `seller` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,3,3,6,0,'Aguadando Pagamento','Mercado Pago',0,'0','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=839637711-caf809b8-f782-49a4-9e03-e92f45e70d59'),(2,5,3,1,0,'Aguadando Pagamento','Mercado Pago',1299.99,'3','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=839637711-90276596-3be6-438d-8ff2-5eb6eb4d78cc'),(3,5,3,1,0,'Aguadando Pagamento','Mercado Pago',1299.99,'3rnzim16992358520895','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=839637711-7fca61c4-403a-41d3-8e3a-eeda191e27bd'),(4,1,3,1,0,'Aguadando Pagamento','Mercado Pago',1300,'3rnzim16993715743931','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=839637711-6cdc03ac-095e-4c89-a356-4bf2547654c7'),(5,3,20,6,1,'Pagemento Realizado','credit_card',799.99,'20rnzim16993938309373','Item Pago Com Sucesso'),(6,1,20,1,1,'Pagemento Realizado','credit_card',1300,'20rnzim16994030923001','Item Pago Com Sucesso'),(7,3,20,6,1,'Pagemento Realizado','credit_card',799.99,'20rnzim16994033536993','Item Pago Com Sucesso'),(8,1,23,1,0,'Aguadando Pagamento','Mercado Pago',1300,'23rnzim16995802364371','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-26f54f1f-b4d8-4b74-b747-a623a357bc16'),(9,1,23,1,0,'Aguadando Pagamento','Mercado Pago',1300,'23rnzim16995819092531','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-af15d0cc-239a-4c84-8188-651558da1662'),(10,5,23,1,0,'Aguadando Pagamento','Mercado Pago',1299.99,'23rnzim16995819629495','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-61fe97d3-2a98-42cb-bb66-b9ae7ac42545'),(11,3,23,6,0,'Aguadando Pagamento','Mercado Pago',799.99,'23rnzim16995819732233','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-c9684907-67bc-42fb-9e1d-ce908f918cc3'),(12,3,27,6,0,'Aguadando Pagamento','Mercado Pago',799.99,'27rnzim16995826072743','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-1bcde884-34d3-4bbc-bf25-ef3829902201'),(13,7,27,1,0,'Aguadando Pagamento','Mercado Pago',99,'27rnzim16996618079657','https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=1078459919-26d99ef3-e48f-45b6-9574-f1de9c823aae');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 23:38:27
