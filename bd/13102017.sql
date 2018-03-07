/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : inventory

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2017-10-13 00:23:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for act
-- ----------------------------
DROP TABLE IF EXISTS `act`;
CREATE TABLE `act` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voucher` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `voucherc` (`voucher`) USING BTREE,
  CONSTRAINT `act_ibfk_1` FOREIGN KEY (`voucher`) REFERENCES `voucher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of act
-- ----------------------------

-- ----------------------------
-- Table structure for aux
-- ----------------------------
DROP TABLE IF EXISTS `aux`;
CREATE TABLE `aux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of aux
-- ----------------------------
INSERT INTO `aux` VALUES ('1');
INSERT INTO `aux` VALUES ('2');
INSERT INTO `aux` VALUES ('3');
INSERT INTO `aux` VALUES ('4');
INSERT INTO `aux` VALUES ('5');
INSERT INTO `aux` VALUES ('6');
INSERT INTO `aux` VALUES ('7');
INSERT INTO `aux` VALUES ('8');
INSERT INTO `aux` VALUES ('9');

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` int(11) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukreference` (`provider`,`reference`) USING BTREE,
  KEY `providerbill` (`provider`) USING BTREE,
  KEY `user` (`user`) USING BTREE,
  CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`provider`) REFERENCES `provider` (`id`),
  CONSTRAINT `bill_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bill
-- ----------------------------
INSERT INTO `bill` VALUES ('85', '9', '1', '2017-10-13', '789', '38', '1');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukbrand` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('80', 'OTRO');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukcategory` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=238 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('237', 'OTRO');

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(13) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(10) DEFAULT '',
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukdni` (`dni`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES ('48', '1454564565', 'GABRIEL SALAZAR', 'QUITO NORTE', '2621561', 'gabo@gmai.ocm');

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voucher` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `observation` text,
  `state` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `voucher` (`voucher`) USING BTREE,
  KEY `product` (`product`) USING BTREE,
  CONSTRAINT `detail_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`id`),
  CONSTRAINT `detail_ibfk_2` FOREIGN KEY (`voucher`) REFERENCES `voucher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('87', '41', '60', '', '0');
INSERT INTO `detail` VALUES ('88', '42', '61', '', '0');

-- ----------------------------
-- Table structure for detaildevolution
-- ----------------------------
DROP TABLE IF EXISTS `detaildevolution`;
CREATE TABLE `detaildevolution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `devolution` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `observation` text,
  PRIMARY KEY (`id`),
  KEY `voucher` (`devolution`) USING BTREE,
  KEY `product` (`product`) USING BTREE,
  CONSTRAINT `detaildevolution_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`id`),
  CONSTRAINT `detaildevolution_ibfk_2` FOREIGN KEY (`devolution`) REFERENCES `devolution` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detaildevolution
-- ----------------------------

-- ----------------------------
-- Table structure for devolution
-- ----------------------------
DROP TABLE IF EXISTS `devolution`;
CREATE TABLE `devolution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client` int(11) NOT NULL,
  `date` text,
  `reference` text,
  `type` tinyint(4) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client` (`client`) USING BTREE,
  KEY `user` (`user`),
  CONSTRAINT `devolution_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  CONSTRAINT `devolution_ibfk_2` FOREIGN KEY (`client`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of devolution
-- ----------------------------

-- ----------------------------
-- Table structure for location
-- ----------------------------
DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukname` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of location
-- ----------------------------
INSERT INTO `location` VALUES ('1', 'SIN ASIGNAR', 'SIN ASGINAR');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stockmin` int(11) DEFAULT NULL,
  `unit` int(11) DEFAULT '1',
  `category` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukcode` (`code`) USING BTREE,
  KEY `unit` (`unit`) USING BTREE,
  KEY `brand` (`brand`) USING BTREE,
  KEY `category` (`category`) USING BTREE,
  CONSTRAINT `model_ibfk_1` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `model_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  CONSTRAINT `model_ibfk_3` FOREIGN KEY (`unit`) REFERENCES `unit` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES ('85', '25', 'PRUEBA', null, '4', '1', '237', '80');

-- ----------------------------
-- Table structure for price
-- ----------------------------
DROP TABLE IF EXISTS `price`;
CREATE TABLE `price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `variant` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `size` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `variantprice` (`variant`) USING BTREE,
  CONSTRAINT `price_ibfk_1` FOREIGN KEY (`variant`) REFERENCES `model` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of price
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `barcode` varchar(255) NOT NULL DEFAULT 'S/N',
  `variant` int(11) NOT NULL,
  `location` int(11) DEFAULT NULL,
  `bill` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT '0.00',
  `state` int(11) DEFAULT '0',
  `observation` text,
  PRIMARY KEY (`id`),
  KEY `location` (`location`) USING BTREE,
  KEY `variant` (`variant`) USING BTREE,
  KEY `bill` (`bill`) USING BTREE,
  KEY `state` (`state`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`bill`) REFERENCES `bill` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`variant`) REFERENCES `model` (`id`),
  CONSTRAINT `state` FOREIGN KEY (`state`) REFERENCES `state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('60', 'S/N', '85', null, '85', '25.00', '1', '');
INSERT INTO `product` VALUES ('61', 'S/N', '85', null, '85', '25.00', '1', '');

-- ----------------------------
-- Table structure for provider
-- ----------------------------
DROP TABLE IF EXISTS `provider`;
CREATE TABLE `provider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(13) DEFAULT '',
  `name` varchar(100) DEFAULT NULL,
  `address` text,
  `phone` varchar(10) DEFAULT '',
  `email` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of provider
-- ----------------------------
INSERT INTO `provider` VALUES ('9', '1746987456', 'LA PREVISORA', 'QUITO NORTE', '2456123', 'gabosoam@gmail.com', null, null);

-- ----------------------------
-- Table structure for state
-- ----------------------------
DROP TABLE IF EXISTS `state`;
CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of state
-- ----------------------------
INSERT INTO `state` VALUES ('0', 'EN BODEGA');
INSERT INTO `state` VALUES ('1', 'ENTREGADO');
INSERT INTO `state` VALUES ('2', 'RESERVADO');

-- ----------------------------
-- Table structure for unit
-- ----------------------------
DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `smallDescription` varchar(50) DEFAULT '',
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of unit
-- ----------------------------
INSERT INTO `unit` VALUES ('1', 'UNIDAD', 'UNIDAD', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(70) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `rol` int(11) DEFAULT NULL,
  `password` text,
  `valid` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukusername` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('38', 'GABRIEL', 'SALAZAR', 'gsalazar', 'gabrielsalazar@outlook.com', '1', '1', '$2a$08$dJx.s2fjU3eVsBpElvEpA.uIrAD7vlbOhoGAfvSIcd2qDFEB3nRSm', null);
INSERT INTO `user` VALUES ('39', 'WILLIAM', 'ROMERO', 'wromero', 'wromero@cineto.net', '1', '1', '$2a$08$UpOlBw/anCC0zgGjkL3Au.hrK5A8hAK4XGOojssoG5BS7SbVyFgeq', null);
INSERT INTO `user` VALUES ('40', 'SANTIAGO', 'PÉREZ', 'sperez', 'sperez', '1', '1', '$2a$08$BrjQygrI7g0fycD19nSdI.3Gp1i/ZJkoFsRe7CvRf/RkVfiuz09x2', null);
INSERT INTO `user` VALUES ('41', 'SANTIAGO', 'REYES', 'sreyes', 'sreyes@cineto.net', '1', '2', '$2a$08$hcUAqSIOBYfNwb5j8USug.VEJtvaG/zLv1i/0r.9JWogYdqjTqEtC', null);
INSERT INTO `user` VALUES ('42', 'CINETO', 'TELECOMUNICACIONES', 'cineto', 'info@cineto.net', '1', '2', '$2a$08$1UiNudJmN4m5qlYLELjzgOOTmXYXKY91sveBPz4f8aF9H8m6tBgGG', null);
INSERT INTO `user` VALUES ('43', 'ALEX', 'CATUCUAMBA', 'acatucuamba', 'acatucuamba@cineto.net', '1', '1', '$2a$08$o135fvwYAbsF/bgSd/Mx4.gsnHIgPJglRaZj.S/1WomuaKSn/2S4i', null);
INSERT INTO `user` VALUES ('44', 'MIGUEL', 'TUPIZA', 'mtupiza', 'acatucuamba@cineto.net', '1', '1', '$2a$08$hzlPAxeoD89Kq7l/TBkOtOdhirmmJBtwryQzy4oKBVfYR0X8y3n5a', null);

-- ----------------------------
-- Table structure for voucher
-- ----------------------------
DROP TABLE IF EXISTS `voucher`;
CREATE TABLE `voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client` int(11) NOT NULL,
  `date` text,
  `reference` text,
  `type` tinyint(4) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `client` (`client`) USING BTREE,
  KEY `user` (`user`),
  CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  CONSTRAINT `voucher_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of voucher
-- ----------------------------
INSERT INTO `voucher` VALUES ('41', '48', '2017-10-13', '12', null, '38', '1');
INSERT INTO `voucher` VALUES ('42', '48', '2017-10-14', '2132', null, '38', '1');

-- ----------------------------
-- View structure for v_bill
-- ----------------------------
DROP VIEW IF EXISTS `v_bill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_bill` AS select `product`.`id` AS `id`,`model`.`id` AS `model`,`product`.`barcode` AS `barcode`,`model`.`code` AS `code`,`model`.`code` AS `Producto`,`model`.`description` AS `description`,`product`.`bill` AS `bill`,`location`.`name` AS `location`,`category`.`name` AS `category`,`brand`.`name` AS `brand`,`product`.`price` AS `price`,`product`.`observation` AS `observation` from ((((`product` join `model` on((`product`.`variant` = `model`.`id`))) left join `location` on((`product`.`location` = `location`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) ;

-- ----------------------------
-- View structure for v_brand
-- ----------------------------
DROP VIEW IF EXISTS `v_brand`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_brand` AS select `brand`.`id` AS `value`,`brand`.`name` AS `text` from `brand` ;

-- ----------------------------
-- View structure for v_category
-- ----------------------------
DROP VIEW IF EXISTS `v_category`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_category` AS select `category`.`id` AS `value`,`category`.`name` AS `text` from `category` ;

-- ----------------------------
-- View structure for v_client
-- ----------------------------
DROP VIEW IF EXISTS `v_client`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_client` AS select `client`.`id` AS `value`,`client`.`name` AS `text`,`client`.`dni` AS `dni`,`client`.`address` AS `address`,`client`.`phone` AS `phone`,`client`.`email` AS `email` from `client` ;

-- ----------------------------
-- View structure for v_createbarcode
-- ----------------------------
DROP VIEW IF EXISTS `v_createbarcode`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_createbarcode` AS select concat('CIN-',year(now()),'-',week(now(),0),'-','00',((select `aux`.`id` from `aux` order by `aux`.`id` desc limit 1) + 1)) AS `barcode` ;

-- ----------------------------
-- View structure for v_detail
-- ----------------------------
DROP VIEW IF EXISTS `v_detail`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_detail` AS select `client`.`name` AS `name`,`product`.`barcode` AS `barcode`,`model`.`description` AS `description`,`model`.`code` AS `code`,`detail`.`voucher` AS `voucher`,`detail`.`id` AS `id`,`product`.`id` AS `idproduct`,(select count(`detail`.`id`) from `detail` where (`model`.`code` = `model`.`code`)) AS `count`,`detail`.`observation` AS `observation`,`client`.`id` AS `idclient`,`detail`.`state` AS `state` from ((((`detail` join `voucher` on((`detail`.`voucher` = `voucher`.`id`))) join `client` on((`voucher`.`client` = `client`.`id`))) join `product` on((`detail`.`product` = `product`.`id`))) join `model` on((`product`.`variant` = `model`.`id`))) ;

-- ----------------------------
-- View structure for v_devolution
-- ----------------------------
DROP VIEW IF EXISTS `v_devolution`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_devolution` AS select `devolution`.`id` AS `id`,`devolution`.`date` AS `date`,`devolution`.`reference` AS `reference`,`devolution`.`type` AS `type`,`devolution`.`state` AS `state`,`client`.`name` AS `name`,`client`.`address` AS `address`,`client`.`phone` AS `phone`,`client`.`email` AS `email`,`user`.`id` AS `iduser`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user` from ((`devolution` join `client` on((`devolution`.`client` = `client`.`id`))) join `user` on((`devolution`.`user` = `user`.`id`))) ;

-- ----------------------------
-- View structure for v_incidence
-- ----------------------------
DROP VIEW IF EXISTS `v_incidence`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_incidence` AS select `incidence`.`id` AS `id`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user`,date_format(`incidence`.`date`,'%Y-%m-%d') AS `date`,cast(`incidence`.`date` as time) AS `time`,`incidence`.`ticket` AS `ticket`,`incidence`.`description` AS `description`,`incidence`.`isClosed` AS `isClosed` from (`incidence` join `user` on((`incidence`.`user` = `user`.`id`))) ;

-- ----------------------------
-- View structure for v_infobill
-- ----------------------------
DROP VIEW IF EXISTS `v_infobill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_infobill` AS select `bill`.`id` AS `id`,`provider`.`name` AS `name`,date_format(`bill`.`date`,'%d-%m-%Y') AS `date`,`bill`.`reference` AS `reference`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user`,`user`.`id` AS `iduser`,`bill`.`state` AS `state`,`provider`.`address` AS `address`,`provider`.`phone` AS `phone`,`provider`.`email` AS `email` from ((`bill` join `provider` on((`bill`.`provider` = `provider`.`id`))) join `user` on((`bill`.`user` = `user`.`id`))) ;

-- ----------------------------
-- View structure for v_model
-- ----------------------------
DROP VIEW IF EXISTS `v_model`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_model` AS select `model`.`id` AS `id`,`model`.`code` AS `code`,`model`.`description` AS `description`,`unit`.`description` AS `unit`,`category`.`name` AS `category`,`brand`.`name` AS `brand` from (((`model` left join `unit` on((`model`.`unit` = `unit`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) ;

-- ----------------------------
-- View structure for v_modelbill
-- ----------------------------
DROP VIEW IF EXISTS `v_modelbill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_modelbill` AS select `model`.`id` AS `id`,concat(`model`.`code`,' - ',`model`.`description`) AS `description` from `model` ;

-- ----------------------------
-- View structure for v_modelview
-- ----------------------------
DROP VIEW IF EXISTS `v_modelview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_modelview` AS select `model`.`id` AS `id`,`model`.`code` AS `code`,`model`.`description` AS `description`,`model`.`price` AS `price`,`model`.`stockmin` AS `stockmin`,`model`.`unit` AS `unit`,`model`.`category` AS `category`,`model`.`brand` AS `brand`,(select count(`product`.`id`) from `product` where ((`product`.`variant` = `model`.`id`) and (`product`.`state` = 0))) AS `count`,(select count(`product`.`id`) from `product` where ((`product`.`variant` = `model`.`id`) and (`product`.`state` = 1))) AS `countE` from `model` ;

-- ----------------------------
-- View structure for v_product
-- ----------------------------
DROP VIEW IF EXISTS `v_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product` AS select `product`.`barcode` AS `barcode`,`model`.`code` AS `code`,`model`.`description` AS `description`,`category`.`name` AS `category`,`brand`.`name` AS `brand`,`bill`.`date` AS `date`,`bill`.`reference` AS `reference`,`location`.`name` AS `location`,`product`.`observation` AS `observation`,`bill`.`state` AS `billstate`,`product`.`id` AS `id`,`state`.`name` AS `state`,`product`.`state` AS `stateid` from ((((((`product` left join `model` on((`product`.`variant` = `model`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) left join `bill` on((`product`.`bill` = `bill`.`id`))) left join `location` on((`product`.`location` = `location`.`id`))) join `state` on((`product`.`state` = `state`.`id`))) order by `bill`.`date` desc,`model`.`code` ;

-- ----------------------------
-- View structure for v_provider
-- ----------------------------
DROP VIEW IF EXISTS `v_provider`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_provider` AS select `provider`.`id` AS `value`,`provider`.`name` AS `text` from `provider` ;

-- ----------------------------
-- View structure for v_ticket
-- ----------------------------
DROP VIEW IF EXISTS `v_ticket`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_ticket` AS select `ticket`.`id` AS `id`,`ticket`.`type` AS `type`,`ticket`.`priority` AS `priority`,`priority`.`name` AS `name`,`ticket`.`user` AS `user`,`ticket`.`description` AS `description`,`ticket`.`state` AS `state`,`client`.`dni` AS `dni`,`client`.`name` AS `client`,date_format(`ticket`.`date`,'%Y-%m-%d') AS `date`,cast(`ticket`.`date` as time) AS `time`,concat(`user`.`name`,' ',`user`.`lastname`) AS `username`,`type`.`name` AS `tipo`,`ticket`.`subject` AS `subject` from ((((`ticket` join `priority` on((`ticket`.`priority` = `priority`.`id`))) join `client` on((`ticket`.`client` = `client`.`id`))) join `user` on((`ticket`.`user` = `user`.`id`))) join `type` on((`ticket`.`type` = `type`.`id`))) ;

-- ----------------------------
-- View structure for v_unit
-- ----------------------------
DROP VIEW IF EXISTS `v_unit`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_unit` AS select `unit`.`id` AS `value`,`unit`.`smallDescription` AS `text` from `unit` ;

-- ----------------------------
-- View structure for v_user
-- ----------------------------
DROP VIEW IF EXISTS `v_user`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_user` AS select `user`.`id` AS `value`,concat(`user`.`name`,' ',`user`.`lastname`) AS `text` from `user` ;

-- ----------------------------
-- View structure for v_voucher
-- ----------------------------
DROP VIEW IF EXISTS `v_voucher`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_voucher` AS select `voucher`.`id` AS `id`,`voucher`.`date` AS `date`,`voucher`.`reference` AS `reference`,`voucher`.`type` AS `type`,`client`.`name` AS `name`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user`,`user`.`id` AS `iduser`,`voucher`.`state` AS `state`,`client`.`address` AS `address`,`client`.`phone` AS `phone`,`client`.`email` AS `email` from ((`voucher` join `client` on((`voucher`.`client` = `client`.`id`))) join `user` on((`voucher`.`user` = `user`.`id`))) ;

-- ----------------------------
-- Procedure structure for barcode
-- ----------------------------
DROP PROCEDURE IF EXISTS `barcode`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `barcode`()
BEGIN
	select concat('CIN',year(now()),'',week(now(),0),'','00',((SELECT COUNT(id) FROM aux) + 1)) AS `barcode`;
INSERT INTO aux VALUES();

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for devolution
-- ----------------------------
DROP PROCEDURE IF EXISTS `devolution`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `devolution`(voucher int)
BEGIN
SET @numero=0;
SELECT
	@numero :=@numero + 1 AS num,
	`client`.`name` AS `name`,
	`product`.`barcode` AS `barcode`,
	`model`.`description` AS `description`,
	`model`.`code` AS `code`,
`model`.`id` AS `prueba`,
(SELECT COUNT(id) FROM detaildevolution WHERE prueba=(SELECT variant FROM product WHERE id = detaildevolution.product) AND detaildevolution.devolution=voucher) as count,
	`detaildevolution`.`devolution` AS `voucher`,
	`detaildevolution`.`id` AS `id`,
	`product`.`id` AS `idproduct`,
	IFNULL(`detaildevolution`.`observation`,' ') AS `observation`
FROM
	(
		(
			(
				(
					`detaildevolution`
					LEFT JOIN `voucher` ON (
						(
							`detaildevolution`.`devolution` = `voucher`.`id`
						)
					)
				)
				LEFT JOIN `client` ON (
					(
						`voucher`.`client` = `client`.`id`
					)
				)
			)
			 LEFT JOIN `product` ON (
				(
					`detaildevolution`.`product` = `product`.`id`
				)
			)
		)
		LEFT JOIN `model` ON (
			(
				`product`.`variant` = `model`.`id`
			)
		)
	) WHERE detaildevolution.devolution=voucher;


END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_bill
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_bill`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_bill`(bill int)
BEGIN
SET @numero=0;
	SELECT
@numero :=@numero + 1 AS num,
	`product`.`id` AS `id`,
	`model`.`id` AS `model`,
	`product`.`barcode` AS `barcode`,
	`model`.`code` AS `code`,
	`model`.`code` AS `Producto`,
`model`.`id` AS `prueba`,
(SELECT COUNT(id) FROM product WHERE variant=prueba AND product.bill=bill LIMIT 1 ) as count,
	`model`.`description` AS `description`,
	`product`.`bill` AS `bill`,
	`location`.`name` AS `location`,
	`category`.`name` AS `category`,
	`brand`.`name` AS `brand`,
	`product`.`price` AS `price`,
IFNULL(`product`.`observation`,' ') AS observation
FROM
	(
		(
			(
				(
					`product`
					JOIN `model` ON (
						(
							`product`.`variant` = `model`.`id`
						)
					)
				)
				LEFT JOIN `location` ON (
					(
						`product`.`location` = `location`.`id`
					)
				)
			)
			LEFT JOIN `category` ON (
				(
					`model`.`category` = `category`.`id`
				)
			)
		)
		LEFT JOIN `brand` ON (
			(
				`model`.`brand` = `brand`.`id`
			)
		)
	) WHERE product.bill=bill;

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for prueba
-- ----------------------------
DROP PROCEDURE IF EXISTS `prueba`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `prueba`(voucher int)
BEGIN
SET @numero=0;
SELECT
	@numero :=@numero + 1 AS num,
	`client`.`name` AS `name`,
	`product`.`barcode` AS `barcode`,
	`model`.`description` AS `description`,
	`model`.`code` AS `code`,
`model`.`id` AS `prueba`,
(SELECT COUNT(id) FROM detail WHERE prueba=(SELECT variant FROM product WHERE id = detail.product) AND detail.voucher=voucher) as count,
	`detail`.`voucher` AS `voucher`,
	`detail`.`id` AS `id`,
	`product`.`id` AS `idproduct`,
	IFNULL(`detail`.`observation`,' ') AS `observation`
FROM
	(
		(
			(
				(
					`detail`
					LEFT JOIN `voucher` ON (
						(
							`detail`.`voucher` = `voucher`.`id`
						)
					)
				)
				LEFT JOIN `client` ON (
					(
						`voucher`.`client` = `client`.`id`
					)
				)
			)
			 LEFT JOIN `product` ON (
				(
					`detail`.`product` = `product`.`id`
				)
			)
		)
		LEFT JOIN `model` ON (
			(
				`product`.`variant` = `model`.`id`
			)
		)
	) WHERE detail.voucher=voucher;


END
;;
DELIMITER ;

-- ----------------------------
-- Function structure for prodasd
-- ----------------------------
DROP FUNCTION IF EXISTS `prodasd`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `prodasd`(`barcode` text) RETURNS text CHARSET utf8
BEGIN
	DECLARE mensaje text;

IF EXISTS(SELECT id FROM product WHERE barcode=barcode) THEN
SET mensaje = 'hola';
ELSE
SET mensaje = 'chau';
END IF;

	RETURN mensaje;
END
;;
DELIMITER ;
