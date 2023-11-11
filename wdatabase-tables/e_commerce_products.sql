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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_product` varchar(255) NOT NULL,
  `description_product` text NOT NULL,
  `id_seller` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `published` date NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT 'productIcon.png',
  `pricing` float DEFAULT NULL,
  `sold` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_seller` (`id_seller`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_seller`) REFERENCES `seller` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Pc Game Da Positivo ','magico',1,233,'0000-00-00','productIcon.png',1300,0),(3,'Smartphone X1','Um smartphone avançado com uma tela grande e uma câmera de alta resolução.',6,50,'2023-02-15','productIcon.png',799.99,0),(5,'Laptop EliteBook 2023','Um laptop de última geração com uma potente CPU e uma tela de alta resolução.',1,20,'2023-03-10','productIcon.png',1299.99,0),(7,'Placa de video generica gamer','muito gamer confiar',1,56,'2023-11-11','productIcon.png',99,0),(15,'Cadeira Gamer Super Confotavel','muito gamer confiar',1,34,'2023-11-11','1699666528966_03df5861f04a43b57a96620f8c278502a2e02bc9e2e91c2518bae1066800bd3d_1.jpg',200,0),(16,'Pc gamer Bacana Roda FreeFire 9gb de ram','muito gamer confia roda em 4k',1,35,'2023-11-11','1699666951022_win98.jpg',1599,0),(17,'Apple iphone Generico Gamer 512mb de ram e hd de 1tb','iphone 17 incrivel aproveita ta na promoçao => sera entregue por um entregado clandestino',1,24,'2023-11-11','1699667130720_aple_.jpg',4999,0),(18,'Placa de video generica gamer v5','muito gamer confiar boa demaill',1,45,'2023-11-11','1699667698664_placa-de-video-pny-nvidia-t600-4gb.jpg',244,0),(19,'Pc Gamer Positivo 8gb de ram 9tb armazenamneto','bom demais:=> se ocorrer algum problema o prolema e seu',1,2345,'2023-11-11','1699667831221_pcmm.jpg',9999,0),(20,'Notebok Para Uso Moderado 8gb de ram','esse e brabo',1,12,'2023-11-11','1699669853532_notebookjpg.jpg',199,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 23:38:26
