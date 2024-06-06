-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: java_final
-- ------------------------------------------------------
-- Server version	8.0.36

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
  `id` bigint NOT NULL,
  `product_description` text NOT NULL,
  `product_image_1` varchar(255) DEFAULT NULL,
  `product_image_2` varchar(255) DEFAULT NULL,
  `product_image_3` varchar(255) DEFAULT NULL,
  `product_image_4` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` double NOT NULL,
  `product_category` enum('OneBedRoom','TwoBedRoom','ThreeBedRoom','NONE') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Complexul hotelier este situat pe beautiful plaja din Golful Makadi, la aproximativ 30 de kilometri sud de Hurghada. Golful Makadi se mandreste cu cele mai frumoase plaje din regiunea Hurghada, asa ca iubitorii de inot isi vor gasi locul aici.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/makadi-bay/prima-life-makadi-resort-a-spa/h13517_c0_133052.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/makadi-bay/prima-life-makadi-resort-a-spa/h13517_c0_133053.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/makadi-bay/prima-life-makadi-resort-a-spa/h13517_c0_133054.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/makadi-bay/prima-life-makadi-resort-a-spa/h13517_c0_133055.jpg','Prima Life Makadi Resort ',1008,'ThreeBedRoom'),(3,'Vastul complex hotelier, format din cladirea principala si vile, este situat in partea de sud a orasului Hurghada, pe o plaja lunga cu nisip.\n\nCentrul complexului este dominat de o piscina proiectata interesant. Camerele standard sunt situate in bungalouri confortabile cu terasa, cazarea in cladirea principala este posibila contra cost.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/long-beach-resort/h13027_c0_82383.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/long-beach-resort/h13027_c0_82384.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/long-beach-resort/h13027_c0_82385.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/long-beach-resort/h13027_c0_82386.jpg','Long Beach Resort',630,'TwoBedRoom'),(4,'Amarina Abu Soma Resort este un hotel complet recent renovat, care are camere mobilate cu mult gust, iar locatia sa excelenta langa una dintre cele mai frumoase plaje din zona, cu o mare limpede, este o alegere excelenta pentru a va petrece vacanta. Merita mentionat si programul all-inclusive bogat la un nivel inalt. Hotelul este potrivit pentru toate categoriile de varsta si pentru clientii mai pretentiosi. Mediul calm si aerisit este potrivit atat pentru familiile cu copii, cat si pentru cupluri sau persoane fizice.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/safaga/amarina-abu-soma-resort/h14427_c0_79069.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/safaga/amarina-abu-soma-resort/h14427_c0_79070.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/safaga/amarina-abu-soma-resort/h14427_c0_79071.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/safaga/amarina-abu-soma-resort/h14427_c0_79072.jpg','Amarina Abu Soma Resort',658,'TwoBedRoom'),(5,'Titanic Royal Resort este cel mai nou si, de asemenea, cel mai luxos dintre cele trei hoteluri Titanic, prin urmare potrivit nu numai pentru familii cu copii si cupluri, ci si pentru clientela pretentioasa. Imediat dupa deschidere, la inceputul sezonului estival 2019, hotelul a devenit unul dintre cele mai bine vandute hoteluri din oferta noastra.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/titanic-royal-resort/h13103_c0_79969.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/titanic-royal-resort/h13103_c0_79970.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/titanic-royal-resort/h13103_c0_79971.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/titanic-royal-resort/h13103_c0_79972.jpg','Titanic Royal Resort',1120,'ThreeBedRoom'),(6,'Caesar Palace este situat pe propria plaja de nisip, cu o vedere panoramica fascinanta a Marii Rosii, cristalina. Aceasta statiune, cu un parc acvatic excelent echipat si o selectie bogata de wellness si servicii, este o alegere potrivita atat pentru o vacanta in familie, cat si pentru iubitorii de kitesurfing, pentru care conditiile sunt ideale. Categoria oficiala a hotelului este 5*, ratingul nostru este 4*.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/hawaii-caesar-palace/c8a3fd67a5ede83b8fdb25298e621c5f_ceasar_palace_overview.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/hawaii-caesar-palace/393aae06ff98735985b82fd609e40e7b_img_7490.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/hawaii-caesar-palace/24d85b4a98b6ea2e32bb0c909f951dda_img_7466.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/hawaii-caesar-palace/133116.jpeg','Hawaii Caesar Palace',378,'OneBedRoom'),(7,'Royal Star Beach Resort este un hotel de oras mai mic, situat langa propria plaja mai mica de nisip. Interiorul hotelului este mobilat confortabil in stil arab modern si ofera clientilor sai servicii de inalta calitate. Datorita locatiei sale in apropierea centrului popular din Saqqala, este o alegere potrivita nu numai pentru clientii care cauta viata de noapte.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/royal-star-beach-resort/187942-15.jpeg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/royal-star-beach-resort/187942-15.jpeg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/royal-star-beach-resort/272214-15.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/royal-star-beach-resort/272227-15.jpg','Royal Star Beach Resort',392,'OneBedRoom'),(8,'Complexul hotelier SUNNY DAYS PALMA DE MIRETTE este situat pe o plaja cu nisip, langa un golf frumos, la 3 km de centrul orasului Hurghada, la 12 km de aeroportul Hurghada, la 220 km de aeroportul Marsa Alam.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/sunny-days-palma-de-mirette/pool-b-3.jpg','https://pics.dertour.ro/hotels/egypt/sunny-days-palma-de-mirette/panorama_12-jpg.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/sunny-days-palma-de-mirette/kid_s-water-slides-b-1.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/palma-de-mirette/aeghrg10ug_631820-jpg.jpeg','Sunny Days Palma De Mirette',518,'TwoBedRoom'),(9,'Aceasta proprietate este situata in partea de nord a orasului Hurghada, la aproximativ 10 kilometri nord de centrul orasului. Bellagio Beach Resort & Spa este situat langa propria plaja de nisip, cu o intrare treptata in mare si este inconjurat de o gradina exotica frumos intretinuta. Hotelul este format dintr-o cladire hoteliera si bungalouri, situate pe laguna. Il recomandam clientilor de toate categoriile de varsta, in special familiilor cu copii, pentru care exista o gama larga de activitati.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bellagio-beach-resort-a-spa/h16168_c0_134762.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bellagio-beach-resort-a-spa/h16168_c0_134763.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bellagio-beach-resort-a-spa/h16168_c0_134764.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bellagio-beach-resort-a-spa/h16168_c0_134765.jpg','Bellagio Beach Resort Spa',672,'TwoBedRoom'),(10,'Bel Air Azur Resort este un hotel destinat exclusiv adultilor, situat pe malul marii, langa 2 lagune mari create de om, langa un recif de corali care formeaza o mica peninsula. Distanta complexului fata de centrul vechi al orasului Hurghada (Dahar) este de 6 km, iar fata de centrul nou (Sakkala) este de 2 km.  Aeroportul Hurghada este la 8 km distanta fata de proprietate si aeroportul Marsa Alam este la aproximativ 225 km. Clientii vor gasi magazine de suveniruri, o cafenea, un restaurant in apropierea complexului si chiar langa hotel este un spital.','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bel-air-azur-resort/155448741.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bel-air-azur-resort/159836945.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bel-air-azur-resort/154914413.jpg','https://pics.dertour.ro/hotels/egypt/oblast-hurghada/hurghada/bel-air-azur-resort/155448058.jpg','Bel Air Azur Resort',784,'ThreeBedRoom');
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

-- Dump completed on 2024-06-06 20:22:10
