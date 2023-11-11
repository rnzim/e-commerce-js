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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(60) NOT NULL,
  `sald` float NOT NULL DEFAULT 0,
  `seller` tinyint(1) DEFAULT 0,
  `img_profiler` varchar(255) DEFAULT 'profile.png',
  `registration_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Maria Santos','maria_santos123','maria.santos@example.com','$2b$08$VNE6z/MO6RXPC1yATV7uQOuUCpJzi9tbCQgqLrJTS2nKu/xm1P7gq',500.75,0,'profile.png','2023-11-04 14:30:00'),(2,'Carlos Pereira','carlosp123','carlos.pereira@example.com','$2b$08$a6p69/Qtlnnh1JWI0fwtse/aatdXNisANawhOXgRNw4BEB28L7Z5m',750.25,1,'profile.png','2023-11-04 15:45:00'),(3,'Ana Oliveira','ana_o','ana.oliveira@example.com','$2b$08$iqcafreO/Wz8uO98zk2hvOlxozeu9aShbjl1oEA/UD06LEHVqOqOS',1200.1,1,'profile1699322676957.jpg','2023-11-04 12:15:00'),(4,'Rafael Santos','rafael.santos123','rafael.santos@example.com','$2b$08$BxlhbiKvG/yBeIF5xYlIEOLkvnqufrNMQwPw7XfWscuQPkatjEc/.',600.8,1,'profile.png','2023-11-04 17:20:00'),(5,'Ana Silva','ana.silva567','ana.silva@example.com','$2b$08$T7kpF.WGlfN4blSBwCn00.SC4/IirKzxAtOwvDQEbRK.FxliTFo7S',950.5,0,'profile.png','2023-11-04 11:30:00'),(6,'Mariana Santos','mariana.santos99','mariana.santos@example.com','$2b$08$U2Bs/MdCbYtxbgf211xvnur0terkys5iDL.piD4vFNGyfZs0URcW.',800.75,1,'profile.png','2023-11-04 14:00:00'),(7,'Carolina Pereira','carolina.p','carolina.pereira@example.com','$2b$08$LiIn3UxKOibabfANp.4w1O2CX7DloxKopnIppvqlkDnK7ASc6sB2u',550.6,1,'profile.png','2023-11-04 16:45:00'),(8,'Larissa Oliveira','larissa.o','larissa.oliveira@example.com','$2b$08$z4UAr/Af/4AMwlnCQdozCO0Nw.6TEkjUDGGAkkfYpRMbu8eO2XOwO',700.3,1,'profile.png','2023-11-04 12:20:00'),(9,'Isabela Rocha','isabela_r','isabela.rocha@example.com','$2b$08$26Aacx2bbhpgbL0Brwj4b.cmATEazR8m5qLoHLkYhFXRd6wjrc0ay',1050.9,1,'profile.png','2023-11-04 10:45:00'),(10,'Luísa Pereira','luisa.p123','luisa.pereira@example.com','$2b$08$Q595LBiEdhrSUgFKpMhEsuh0X4o7Ot70CzGcM2GMop9JiweNKGAqS',950.25,1,'profile.png','2023-11-04 15:15:00'),(11,'Beatriz Mendes','beatriz123','beatriz.mendes@example.com','$2b$08$Oc7Whng.OvpRh1qAn5bK6uhyAt60PTQF5whgb0FGHCtDAVLQj16sK',800.75,0,'profile.png','2023-11-04 13:40:00'),(12,'Camila Ribeiro','camila.r','camila.ribeiro@example.com','$2b$08$p48X.fJ4guSjdd2gGLTj2.Iz2JpS/UPdkkmiCIeBeEb0vUJtJ1H/6',600.6,1,'profile.png','2023-11-04 09:55:00'),(13,'Juliana Alves','juliana.a','juliana.alves@example.com','$2b$08$MpFjIxS4rSZMDQyOEFVhh.RmM/3MArCmjWpV1tkgqUlJNRFW0g/QK',700.45,0,'profile.png','2023-11-04 16:30:00'),(14,'Patrícia Lima','patricia.l','patricia.lima@example.com','$2b$08$X8BvbFGzV9tgIf80uk3ZauaFSaxuEKDfiMYR495RMH8bb0GfqZIpm',850.3,1,'profile.png','2023-11-04 14:15:00'),(15,'Fernanda Gonçalves','fernanda.g123','fernanda.goncalves@example.com','$2b$08$vJmpZ2eLH7.DKWXVRsiMselEMz8qhtywe6UJq/KeJjtRi.YJ98mRu',900.5,0,'profile.png','2023-11-04 12:40:00'),(16,'Luciana Silva','luciana.s567','luciana.silva@example.com','$2b$08$rB/14Lb71YNe2uVYwd5DpeImSVG7mvcSjNILrAahRKbT3nHdjrwVy',750.25,1,'profile.png','2023-11-04 10:20:00'),(17,'Renata Pereira','renata.p','renata.pereira@example.com','$2b$08$31IT0NApxYq5LhKBmEpYDeJplBl0D8cf6qkAR3Z5DK8xGOTFOqTv.',720.8,0,'profile.png','2023-11-04 15:35:00'),(19,'Daniela Almeida','daniela.a123','daniela.almeida@example.com','$2b$08$1LL4DAPVPNXRXlLcNgvy2uxdSQW0Dk/fXMIwgLmPsWh83BVbecixa',880.65,1,'profile.png','2023-11-04 16:50:00'),(20,'Sofia Martins','sofia.m','sofia.martins@example.com','$2b$08$.vIXPaAuGXMBl86aqk4gm.1FiFzypA8TkwJoBQ/PSPLGJ5qKQ4EGG',600.4,0,'profile.png','2023-11-04 11:25:00'),(21,'Tatiana Costa','tatiana.c','tatiana.costa@example.com','$2b$08$N4Gy5P3Xpvc.FXhzpYgEbu7Eml87TULdSTbYGtyVaDCUncwC.UODq',930.75,1,'profile.png','2023-11-04 13:05:00'),(22,'Marta Ferreira','marta.f123','marta.ferreira@example.com','$2b$08$KWXuG01jW2iTN7zWp8RAcetKpeIZmVMEo9sO0hxSy5sC5ey6ZsK9.',700.15,0,'profile.png','2023-11-04 09:30:00'),(23,'Eduarda Santos','eduarda.s','eduarda.santos@example.com','$2b$08$SdnnvOTQ2jjUwXrkVkrMf.oNXU59KRgR6UyhLwu.70zj/YaqQu26.',780.55,1,'profile.png','2023-11-04 17:10:00'),(24,'Laura Carvalho','laura.c567','laura.carvalho@example.com','$2b$08$wS1Nr0EDetun6URNNzsaDec.oUVxW0FJ6DpAa1uYCSKixAQzH7jOi',820.7,0,'profile.png','2023-11-04 14:55:00'),(27,'Eduarda Silva','aeduardahun.ss','eduarda.adsantos@example.com','$2b$08$9jgKG7yEvuWUCFmBtcU3p.ye0F5eionlC07pQSae9YIBRykTYVryq',780.55,1,'profile.png','2023-11-04 17:10:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
