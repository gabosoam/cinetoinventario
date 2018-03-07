/*
Navicat MariaDB Data Transfer

Source Server         : MariaDB
Source Server Version : 100208
Source Host           : localhost:3307
Source Database       : inventory

Target Server Type    : MariaDB
Target Server Version : 100208
File Encoding         : 65001

Date: 2017-10-12 17:59:13
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
) ENGINE=InnoDB AUTO_INCREMENT=401 DEFAULT CHARSET=latin1;

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
INSERT INTO `aux` VALUES ('10');
INSERT INTO `aux` VALUES ('11');
INSERT INTO `aux` VALUES ('12');
INSERT INTO `aux` VALUES ('13');
INSERT INTO `aux` VALUES ('14');
INSERT INTO `aux` VALUES ('15');
INSERT INTO `aux` VALUES ('16');
INSERT INTO `aux` VALUES ('17');
INSERT INTO `aux` VALUES ('18');
INSERT INTO `aux` VALUES ('19');
INSERT INTO `aux` VALUES ('20');
INSERT INTO `aux` VALUES ('21');
INSERT INTO `aux` VALUES ('22');
INSERT INTO `aux` VALUES ('23');
INSERT INTO `aux` VALUES ('24');
INSERT INTO `aux` VALUES ('25');
INSERT INTO `aux` VALUES ('26');
INSERT INTO `aux` VALUES ('27');
INSERT INTO `aux` VALUES ('28');
INSERT INTO `aux` VALUES ('29');
INSERT INTO `aux` VALUES ('30');
INSERT INTO `aux` VALUES ('31');
INSERT INTO `aux` VALUES ('32');
INSERT INTO `aux` VALUES ('33');
INSERT INTO `aux` VALUES ('34');
INSERT INTO `aux` VALUES ('35');
INSERT INTO `aux` VALUES ('36');
INSERT INTO `aux` VALUES ('37');
INSERT INTO `aux` VALUES ('38');
INSERT INTO `aux` VALUES ('39');
INSERT INTO `aux` VALUES ('40');
INSERT INTO `aux` VALUES ('41');
INSERT INTO `aux` VALUES ('42');
INSERT INTO `aux` VALUES ('43');
INSERT INTO `aux` VALUES ('44');
INSERT INTO `aux` VALUES ('45');
INSERT INTO `aux` VALUES ('46');
INSERT INTO `aux` VALUES ('47');
INSERT INTO `aux` VALUES ('48');
INSERT INTO `aux` VALUES ('49');
INSERT INTO `aux` VALUES ('50');
INSERT INTO `aux` VALUES ('51');
INSERT INTO `aux` VALUES ('52');
INSERT INTO `aux` VALUES ('53');
INSERT INTO `aux` VALUES ('54');
INSERT INTO `aux` VALUES ('55');
INSERT INTO `aux` VALUES ('56');
INSERT INTO `aux` VALUES ('57');
INSERT INTO `aux` VALUES ('58');
INSERT INTO `aux` VALUES ('59');
INSERT INTO `aux` VALUES ('60');
INSERT INTO `aux` VALUES ('61');
INSERT INTO `aux` VALUES ('62');
INSERT INTO `aux` VALUES ('63');
INSERT INTO `aux` VALUES ('64');
INSERT INTO `aux` VALUES ('65');
INSERT INTO `aux` VALUES ('66');
INSERT INTO `aux` VALUES ('67');
INSERT INTO `aux` VALUES ('68');
INSERT INTO `aux` VALUES ('69');
INSERT INTO `aux` VALUES ('70');
INSERT INTO `aux` VALUES ('71');
INSERT INTO `aux` VALUES ('72');
INSERT INTO `aux` VALUES ('73');
INSERT INTO `aux` VALUES ('74');
INSERT INTO `aux` VALUES ('75');
INSERT INTO `aux` VALUES ('76');
INSERT INTO `aux` VALUES ('77');
INSERT INTO `aux` VALUES ('78');
INSERT INTO `aux` VALUES ('79');
INSERT INTO `aux` VALUES ('80');
INSERT INTO `aux` VALUES ('81');
INSERT INTO `aux` VALUES ('82');
INSERT INTO `aux` VALUES ('83');
INSERT INTO `aux` VALUES ('84');
INSERT INTO `aux` VALUES ('85');
INSERT INTO `aux` VALUES ('86');
INSERT INTO `aux` VALUES ('87');
INSERT INTO `aux` VALUES ('88');
INSERT INTO `aux` VALUES ('89');
INSERT INTO `aux` VALUES ('90');
INSERT INTO `aux` VALUES ('91');
INSERT INTO `aux` VALUES ('92');
INSERT INTO `aux` VALUES ('93');
INSERT INTO `aux` VALUES ('94');
INSERT INTO `aux` VALUES ('95');
INSERT INTO `aux` VALUES ('96');
INSERT INTO `aux` VALUES ('97');
INSERT INTO `aux` VALUES ('98');
INSERT INTO `aux` VALUES ('99');
INSERT INTO `aux` VALUES ('100');
INSERT INTO `aux` VALUES ('101');
INSERT INTO `aux` VALUES ('102');
INSERT INTO `aux` VALUES ('103');
INSERT INTO `aux` VALUES ('104');
INSERT INTO `aux` VALUES ('105');
INSERT INTO `aux` VALUES ('106');
INSERT INTO `aux` VALUES ('107');
INSERT INTO `aux` VALUES ('108');
INSERT INTO `aux` VALUES ('109');
INSERT INTO `aux` VALUES ('110');
INSERT INTO `aux` VALUES ('111');
INSERT INTO `aux` VALUES ('112');
INSERT INTO `aux` VALUES ('113');
INSERT INTO `aux` VALUES ('114');
INSERT INTO `aux` VALUES ('115');
INSERT INTO `aux` VALUES ('116');
INSERT INTO `aux` VALUES ('117');
INSERT INTO `aux` VALUES ('118');
INSERT INTO `aux` VALUES ('119');
INSERT INTO `aux` VALUES ('120');
INSERT INTO `aux` VALUES ('121');
INSERT INTO `aux` VALUES ('122');
INSERT INTO `aux` VALUES ('123');
INSERT INTO `aux` VALUES ('124');
INSERT INTO `aux` VALUES ('125');
INSERT INTO `aux` VALUES ('126');
INSERT INTO `aux` VALUES ('127');
INSERT INTO `aux` VALUES ('128');
INSERT INTO `aux` VALUES ('129');
INSERT INTO `aux` VALUES ('130');
INSERT INTO `aux` VALUES ('131');
INSERT INTO `aux` VALUES ('132');
INSERT INTO `aux` VALUES ('133');
INSERT INTO `aux` VALUES ('134');
INSERT INTO `aux` VALUES ('135');
INSERT INTO `aux` VALUES ('136');
INSERT INTO `aux` VALUES ('137');
INSERT INTO `aux` VALUES ('138');
INSERT INTO `aux` VALUES ('139');
INSERT INTO `aux` VALUES ('140');
INSERT INTO `aux` VALUES ('141');
INSERT INTO `aux` VALUES ('142');
INSERT INTO `aux` VALUES ('143');
INSERT INTO `aux` VALUES ('144');
INSERT INTO `aux` VALUES ('145');
INSERT INTO `aux` VALUES ('146');
INSERT INTO `aux` VALUES ('147');
INSERT INTO `aux` VALUES ('148');
INSERT INTO `aux` VALUES ('149');
INSERT INTO `aux` VALUES ('150');
INSERT INTO `aux` VALUES ('151');
INSERT INTO `aux` VALUES ('152');
INSERT INTO `aux` VALUES ('153');
INSERT INTO `aux` VALUES ('154');
INSERT INTO `aux` VALUES ('155');
INSERT INTO `aux` VALUES ('156');
INSERT INTO `aux` VALUES ('157');
INSERT INTO `aux` VALUES ('158');
INSERT INTO `aux` VALUES ('159');
INSERT INTO `aux` VALUES ('160');
INSERT INTO `aux` VALUES ('161');
INSERT INTO `aux` VALUES ('162');
INSERT INTO `aux` VALUES ('163');
INSERT INTO `aux` VALUES ('164');
INSERT INTO `aux` VALUES ('165');
INSERT INTO `aux` VALUES ('166');
INSERT INTO `aux` VALUES ('167');
INSERT INTO `aux` VALUES ('168');
INSERT INTO `aux` VALUES ('169');
INSERT INTO `aux` VALUES ('170');
INSERT INTO `aux` VALUES ('171');
INSERT INTO `aux` VALUES ('172');
INSERT INTO `aux` VALUES ('173');
INSERT INTO `aux` VALUES ('174');
INSERT INTO `aux` VALUES ('175');
INSERT INTO `aux` VALUES ('176');
INSERT INTO `aux` VALUES ('177');
INSERT INTO `aux` VALUES ('178');
INSERT INTO `aux` VALUES ('179');
INSERT INTO `aux` VALUES ('180');
INSERT INTO `aux` VALUES ('181');
INSERT INTO `aux` VALUES ('182');
INSERT INTO `aux` VALUES ('183');
INSERT INTO `aux` VALUES ('184');
INSERT INTO `aux` VALUES ('185');
INSERT INTO `aux` VALUES ('186');
INSERT INTO `aux` VALUES ('187');
INSERT INTO `aux` VALUES ('188');
INSERT INTO `aux` VALUES ('189');
INSERT INTO `aux` VALUES ('190');
INSERT INTO `aux` VALUES ('191');
INSERT INTO `aux` VALUES ('192');
INSERT INTO `aux` VALUES ('193');
INSERT INTO `aux` VALUES ('194');
INSERT INTO `aux` VALUES ('195');
INSERT INTO `aux` VALUES ('196');
INSERT INTO `aux` VALUES ('197');
INSERT INTO `aux` VALUES ('198');
INSERT INTO `aux` VALUES ('199');
INSERT INTO `aux` VALUES ('200');
INSERT INTO `aux` VALUES ('201');
INSERT INTO `aux` VALUES ('202');
INSERT INTO `aux` VALUES ('203');
INSERT INTO `aux` VALUES ('204');
INSERT INTO `aux` VALUES ('205');
INSERT INTO `aux` VALUES ('206');
INSERT INTO `aux` VALUES ('207');
INSERT INTO `aux` VALUES ('208');
INSERT INTO `aux` VALUES ('209');
INSERT INTO `aux` VALUES ('210');
INSERT INTO `aux` VALUES ('211');
INSERT INTO `aux` VALUES ('212');
INSERT INTO `aux` VALUES ('213');
INSERT INTO `aux` VALUES ('214');
INSERT INTO `aux` VALUES ('215');
INSERT INTO `aux` VALUES ('216');
INSERT INTO `aux` VALUES ('217');
INSERT INTO `aux` VALUES ('218');
INSERT INTO `aux` VALUES ('219');
INSERT INTO `aux` VALUES ('220');
INSERT INTO `aux` VALUES ('221');
INSERT INTO `aux` VALUES ('222');
INSERT INTO `aux` VALUES ('223');
INSERT INTO `aux` VALUES ('224');
INSERT INTO `aux` VALUES ('225');
INSERT INTO `aux` VALUES ('226');
INSERT INTO `aux` VALUES ('227');
INSERT INTO `aux` VALUES ('228');
INSERT INTO `aux` VALUES ('229');
INSERT INTO `aux` VALUES ('230');
INSERT INTO `aux` VALUES ('231');
INSERT INTO `aux` VALUES ('232');
INSERT INTO `aux` VALUES ('233');
INSERT INTO `aux` VALUES ('234');
INSERT INTO `aux` VALUES ('235');
INSERT INTO `aux` VALUES ('236');
INSERT INTO `aux` VALUES ('237');
INSERT INTO `aux` VALUES ('238');
INSERT INTO `aux` VALUES ('239');
INSERT INTO `aux` VALUES ('240');
INSERT INTO `aux` VALUES ('241');
INSERT INTO `aux` VALUES ('242');
INSERT INTO `aux` VALUES ('243');
INSERT INTO `aux` VALUES ('244');
INSERT INTO `aux` VALUES ('245');
INSERT INTO `aux` VALUES ('246');
INSERT INTO `aux` VALUES ('247');
INSERT INTO `aux` VALUES ('248');
INSERT INTO `aux` VALUES ('249');
INSERT INTO `aux` VALUES ('250');
INSERT INTO `aux` VALUES ('251');
INSERT INTO `aux` VALUES ('252');
INSERT INTO `aux` VALUES ('253');
INSERT INTO `aux` VALUES ('254');
INSERT INTO `aux` VALUES ('255');
INSERT INTO `aux` VALUES ('256');
INSERT INTO `aux` VALUES ('257');
INSERT INTO `aux` VALUES ('258');
INSERT INTO `aux` VALUES ('259');
INSERT INTO `aux` VALUES ('260');
INSERT INTO `aux` VALUES ('261');
INSERT INTO `aux` VALUES ('262');
INSERT INTO `aux` VALUES ('263');
INSERT INTO `aux` VALUES ('264');
INSERT INTO `aux` VALUES ('265');
INSERT INTO `aux` VALUES ('266');
INSERT INTO `aux` VALUES ('267');
INSERT INTO `aux` VALUES ('268');
INSERT INTO `aux` VALUES ('269');
INSERT INTO `aux` VALUES ('270');
INSERT INTO `aux` VALUES ('271');
INSERT INTO `aux` VALUES ('272');
INSERT INTO `aux` VALUES ('273');
INSERT INTO `aux` VALUES ('274');
INSERT INTO `aux` VALUES ('275');
INSERT INTO `aux` VALUES ('276');
INSERT INTO `aux` VALUES ('277');
INSERT INTO `aux` VALUES ('278');
INSERT INTO `aux` VALUES ('279');
INSERT INTO `aux` VALUES ('280');
INSERT INTO `aux` VALUES ('281');
INSERT INTO `aux` VALUES ('282');
INSERT INTO `aux` VALUES ('283');
INSERT INTO `aux` VALUES ('284');
INSERT INTO `aux` VALUES ('285');
INSERT INTO `aux` VALUES ('286');
INSERT INTO `aux` VALUES ('287');
INSERT INTO `aux` VALUES ('288');
INSERT INTO `aux` VALUES ('289');
INSERT INTO `aux` VALUES ('290');
INSERT INTO `aux` VALUES ('291');
INSERT INTO `aux` VALUES ('292');
INSERT INTO `aux` VALUES ('293');
INSERT INTO `aux` VALUES ('294');
INSERT INTO `aux` VALUES ('295');
INSERT INTO `aux` VALUES ('296');
INSERT INTO `aux` VALUES ('297');
INSERT INTO `aux` VALUES ('298');
INSERT INTO `aux` VALUES ('299');
INSERT INTO `aux` VALUES ('300');
INSERT INTO `aux` VALUES ('301');
INSERT INTO `aux` VALUES ('302');
INSERT INTO `aux` VALUES ('303');
INSERT INTO `aux` VALUES ('304');
INSERT INTO `aux` VALUES ('305');
INSERT INTO `aux` VALUES ('306');
INSERT INTO `aux` VALUES ('307');
INSERT INTO `aux` VALUES ('308');
INSERT INTO `aux` VALUES ('309');
INSERT INTO `aux` VALUES ('310');
INSERT INTO `aux` VALUES ('311');
INSERT INTO `aux` VALUES ('312');
INSERT INTO `aux` VALUES ('313');
INSERT INTO `aux` VALUES ('314');
INSERT INTO `aux` VALUES ('315');
INSERT INTO `aux` VALUES ('316');
INSERT INTO `aux` VALUES ('317');
INSERT INTO `aux` VALUES ('318');
INSERT INTO `aux` VALUES ('319');
INSERT INTO `aux` VALUES ('320');
INSERT INTO `aux` VALUES ('321');
INSERT INTO `aux` VALUES ('322');
INSERT INTO `aux` VALUES ('323');
INSERT INTO `aux` VALUES ('324');
INSERT INTO `aux` VALUES ('325');
INSERT INTO `aux` VALUES ('326');
INSERT INTO `aux` VALUES ('327');
INSERT INTO `aux` VALUES ('328');
INSERT INTO `aux` VALUES ('329');
INSERT INTO `aux` VALUES ('330');
INSERT INTO `aux` VALUES ('331');
INSERT INTO `aux` VALUES ('332');
INSERT INTO `aux` VALUES ('333');
INSERT INTO `aux` VALUES ('334');
INSERT INTO `aux` VALUES ('335');
INSERT INTO `aux` VALUES ('336');
INSERT INTO `aux` VALUES ('337');
INSERT INTO `aux` VALUES ('338');
INSERT INTO `aux` VALUES ('339');
INSERT INTO `aux` VALUES ('340');
INSERT INTO `aux` VALUES ('341');
INSERT INTO `aux` VALUES ('342');
INSERT INTO `aux` VALUES ('343');
INSERT INTO `aux` VALUES ('344');
INSERT INTO `aux` VALUES ('345');
INSERT INTO `aux` VALUES ('346');
INSERT INTO `aux` VALUES ('347');
INSERT INTO `aux` VALUES ('348');
INSERT INTO `aux` VALUES ('349');
INSERT INTO `aux` VALUES ('350');
INSERT INTO `aux` VALUES ('351');
INSERT INTO `aux` VALUES ('352');
INSERT INTO `aux` VALUES ('353');
INSERT INTO `aux` VALUES ('354');
INSERT INTO `aux` VALUES ('355');
INSERT INTO `aux` VALUES ('356');
INSERT INTO `aux` VALUES ('357');
INSERT INTO `aux` VALUES ('358');
INSERT INTO `aux` VALUES ('359');
INSERT INTO `aux` VALUES ('360');
INSERT INTO `aux` VALUES ('361');
INSERT INTO `aux` VALUES ('362');
INSERT INTO `aux` VALUES ('363');
INSERT INTO `aux` VALUES ('364');
INSERT INTO `aux` VALUES ('365');
INSERT INTO `aux` VALUES ('366');
INSERT INTO `aux` VALUES ('367');
INSERT INTO `aux` VALUES ('368');
INSERT INTO `aux` VALUES ('369');
INSERT INTO `aux` VALUES ('370');
INSERT INTO `aux` VALUES ('371');
INSERT INTO `aux` VALUES ('372');
INSERT INTO `aux` VALUES ('373');
INSERT INTO `aux` VALUES ('374');
INSERT INTO `aux` VALUES ('375');
INSERT INTO `aux` VALUES ('376');
INSERT INTO `aux` VALUES ('377');
INSERT INTO `aux` VALUES ('378');
INSERT INTO `aux` VALUES ('379');
INSERT INTO `aux` VALUES ('380');
INSERT INTO `aux` VALUES ('381');
INSERT INTO `aux` VALUES ('382');
INSERT INTO `aux` VALUES ('383');
INSERT INTO `aux` VALUES ('384');
INSERT INTO `aux` VALUES ('385');
INSERT INTO `aux` VALUES ('386');
INSERT INTO `aux` VALUES ('387');
INSERT INTO `aux` VALUES ('388');
INSERT INTO `aux` VALUES ('389');
INSERT INTO `aux` VALUES ('390');
INSERT INTO `aux` VALUES ('391');
INSERT INTO `aux` VALUES ('392');
INSERT INTO `aux` VALUES ('393');
INSERT INTO `aux` VALUES ('394');
INSERT INTO `aux` VALUES ('395');
INSERT INTO `aux` VALUES ('396');
INSERT INTO `aux` VALUES ('397');
INSERT INTO `aux` VALUES ('398');
INSERT INTO `aux` VALUES ('399');
INSERT INTO `aux` VALUES ('400');

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
  `state` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukreference` (`provider`,`reference`) USING BTREE,
  KEY `providerbill` (`provider`) USING BTREE,
  KEY `user` (`user`) USING BTREE,
  CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`provider`) REFERENCES `provider` (`id`),
  CONSTRAINT `bill_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bill
-- ----------------------------
INSERT INTO `bill` VALUES ('61', '6', '3', '2017-10-12', '25', '29', '1');
INSERT INTO `bill` VALUES ('62', '6', '1', '2017-10-12', '45', '28', '0');
INSERT INTO `bill` VALUES ('70', '6', '2', '2017-10-12', '21', '29', '0');
INSERT INTO `bill` VALUES ('71', '5', '2', '2017-10-12', '741', '29', '0');
INSERT INTO `bill` VALUES ('73', '6', '1', '2017-10-12', '456', '28', '0');
INSERT INTO `bill` VALUES ('74', '7', '1', '2017-10-12', '123', '28', '0');
INSERT INTO `bill` VALUES ('76', '6', '1', '2017-10-12', '789', '28', '0');
INSERT INTO `bill` VALUES ('77', '6', '1', '2017-10-12', '12', '28', '0');
INSERT INTO `bill` VALUES ('78', '7', '1', '2017-10-12', '12', '28', '0');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukbrand` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('77', 'DULPIX');
INSERT INTO `brand` VALUES ('76', 'GRANDSTREAM');
INSERT INTO `brand` VALUES ('78', 'INTELBRAS');
INSERT INTO `brand` VALUES ('79', 'PRUEBA');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukcategory` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('225', 'ACCESORIO');
INSERT INTO `category` VALUES ('226', 'ATA');
INSERT INTO `category` VALUES ('227', 'BASE');
INSERT INTO `category` VALUES ('228', 'CAMARA');
INSERT INTO `category` VALUES ('229', 'CETRAL');
INSERT INTO `category` VALUES ('230', 'CONVERSOR');
INSERT INTO `category` VALUES ('231', 'CP');
INSERT INTO `category` VALUES ('232', 'DISTRIBUIDOR');
INSERT INTO `category` VALUES ('233', 'GATEWAY');
INSERT INTO `category` VALUES ('234', 'GRAVADOR');
INSERT INTO `category` VALUES ('236', 'INTERFACE');
INSERT INTO `category` VALUES ('235', 'TELEFONO');
INSERT INTO `category` VALUES ('224', 'TELÉFONO IP');

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES ('46', 'PRUEBA', 'CRISTOBAL ARCINIEGAS', 'AV. NAPO S13-89 Y EPLICACHIMA', '2456788', 'cristobal@arciniegas.com');
INSERT INTO `client` VALUES ('47', '1745698745', 'PAOLRA RAMOS LOOR', 'QUITO NORTE', '2621561', 'paola@gmail.com');

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voucher` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `observation` text DEFAULT NULL,
  `state` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `voucher` (`voucher`) USING BTREE,
  KEY `product` (`product`) USING BTREE,
  CONSTRAINT `detail_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`id`),
  CONSTRAINT `detail_ibfk_2` FOREIGN KEY (`voucher`) REFERENCES `voucher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('69', '32', '18', '', '1');
INSERT INTO `detail` VALUES ('70', '33', '18', '', '1');
INSERT INTO `detail` VALUES ('71', '34', '18', '', '1');

-- ----------------------------
-- Table structure for detaildevolution
-- ----------------------------
DROP TABLE IF EXISTS `detaildevolution`;
CREATE TABLE `detaildevolution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `devolution` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `observation` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `voucher` (`devolution`) USING BTREE,
  KEY `product` (`product`) USING BTREE,
  CONSTRAINT `detaildevolution_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`id`),
  CONSTRAINT `detaildevolution_ibfk_2` FOREIGN KEY (`devolution`) REFERENCES `devolution` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detaildevolution
-- ----------------------------
INSERT INTO `detaildevolution` VALUES ('65', '31', '18', '');
INSERT INTO `detaildevolution` VALUES ('66', '32', '18', '');
INSERT INTO `detaildevolution` VALUES ('67', '34', '18', '');

-- ----------------------------
-- Table structure for devolution
-- ----------------------------
DROP TABLE IF EXISTS `devolution`;
CREATE TABLE `devolution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client` int(11) NOT NULL,
  `date` text DEFAULT NULL,
  `reference` text DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `client` (`client`) USING BTREE,
  KEY `user` (`user`),
  CONSTRAINT `devolution_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  CONSTRAINT `devolution_ibfk_2` FOREIGN KEY (`client`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of devolution
-- ----------------------------
INSERT INTO `devolution` VALUES ('31', '47', '2017-10-12', '123', null, '29', '0');
INSERT INTO `devolution` VALUES ('32', '47', '2017-10-12', '123', null, '29', '1');
INSERT INTO `devolution` VALUES ('33', '47', '2017-10-12', '123', null, '29', '0');
INSERT INTO `devolution` VALUES ('34', '46', '2017-10-12', '12345', null, '29', '1');

-- ----------------------------
-- Table structure for incidence
-- ----------------------------
DROP TABLE IF EXISTS `incidence`;
CREATE TABLE `incidence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `ticket` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `isClosed` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `userinc` (`user`),
  KEY `ticket` (`ticket`),
  CONSTRAINT `ticket` FOREIGN KEY (`ticket`) REFERENCES `ticket` (`id`),
  CONSTRAINT `userinc` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of incidence
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
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of location
-- ----------------------------
INSERT INTO `location` VALUES ('42', 'Q3', 'Q3');
INSERT INTO `location` VALUES ('43', 'OTRO', 'OTRO');
INSERT INTO `location` VALUES ('44', 'ALMACEN 8', 'FSDF');
INSERT INTO `location` VALUES ('45', 'ALMACEN DE ALMOHADILLAS', null);
INSERT INTO `location` VALUES ('46', 'ALMACENITO', null);
INSERT INTO `location` VALUES ('47', 'S2', null);
INSERT INTO `location` VALUES ('48', '', null);
INSERT INTO `location` VALUES ('49', 'Q2', null);
INSERT INTO `location` VALUES ('50', 'S4', null);
INSERT INTO `location` VALUES ('51', 'S3', null);
INSERT INTO `location` VALUES ('52', 'Q4', null);
INSERT INTO `location` VALUES ('53', 'T1', null);
INSERT INTO `location` VALUES ('54', 'R1', null);
INSERT INTO `location` VALUES ('55', 'EXT', null);
INSERT INTO `location` VALUES ('56', 'T4', null);
INSERT INTO `location` VALUES ('57', 'Q1', null);
INSERT INTO `location` VALUES ('58', 'ALMACEN 9', null);

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
  `unit` int(11) DEFAULT 1,
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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES ('68', '123', 'PRODUCTO PRUEBA', null, '25', '1', '228', '77');
INSERT INTO `model` VALUES ('80', 'GXP1610', 'GRANDSTREAM GXP-1610  IP PHONE  NO POE (GXP1610)', null, null, '1', '224', '76');
INSERT INTO `model` VALUES ('81', 'UCM6202', 'GRANDSTREAM IP PBX APLIANCE UCM-6202 2FXS/2FXO (UCM6202)', null, null, '1', '224', '76');
INSERT INTO `model` VALUES ('82', 'UCM6204', 'GRANDSTREAM IP PBX APLIANCE UCM-6204 2FXS/4FXO (UCM6204)', null, null, '1', '224', '76');
INSERT INTO `model` VALUES ('83', 'GXW4104', 'GRANDSTREAM GXW-4104  GATEWAY 4 FXO PORTS 8/MC (GXW4104)', null, null, '1', '224', '76');
INSERT INTO `model` VALUES ('84', 'YEYE', 'NUEBAS', null, null, '1', '225', '79');

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
-- Table structure for priority
-- ----------------------------
DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of priority
-- ----------------------------
INSERT INTO `priority` VALUES ('danger', 'ALTA');
INSERT INTO `priority` VALUES ('primary', 'BAJA');
INSERT INTO `priority` VALUES ('warning', 'MEDIA');

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
  `price` decimal(10,2) DEFAULT 0.00,
  `state` int(11) DEFAULT 0,
  `observation` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `location` (`location`) USING BTREE,
  KEY `variant` (`variant`) USING BTREE,
  KEY `bill` (`bill`) USING BTREE,
  KEY `state` (`state`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`bill`) REFERENCES `bill` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`variant`) REFERENCES `model` (`id`),
  CONSTRAINT `state` FOREIGN KEY (`state`) REFERENCES `state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1133 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('18', '1', '68', null, '61', '0.00', '0', '');
INSERT INTO `product` VALUES ('909', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('910', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('911', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('912', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('913', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('914', '20EZ1QFH30AF42E2', '80', '44', '78', '0.00', '0', '');
INSERT INTO `product` VALUES ('915', '20EZ1QFH30AF42E3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('916', '20EZ1QFH30AF42E4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('917', '20EZ1QFH30AF42E5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('918', '20EZ1QFH30AF42E6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('919', '20EZ1QFH30AF42E7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('920', '20EZ1QFH30AF42E8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('921', '20EZ1QFH30AF42E9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('922', '20EZ1QFH30AF42EA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('923', '20EZ1QFH30AF42EB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('924', '20EZ1QFH30AF42EC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('925', '20EZ1QFH30AF42ED', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('926', '20EZ1QFH30AF42EE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('927', '20EZ1QFH30AF42EF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('928', '20EZ1QFH30AF42F0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('929', '20EZ1QFH30AF42F1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('930', '20EZ1QFH30AF4542', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('931', '20EZ1QFH30AF4543', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('932', '20EZ1QFH30AF4544', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('933', '20EZ1QFH30AF4545', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('934', '20EZ1QFH30AF4546', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('935', '20EZ1QFH30AF4547', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('936', '20EZ1QFH30AF4548', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('937', '20EZ1QFH30AF4549', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('938', '20EZ1QFH30AF454A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('939', '20EZ1QFH30AF454B', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('940', '20EZ1QFH30AF454C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('941', '20EZ1QFH30AF454D', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('942', '20EZ1QFH30AF454E', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('943', '20EZ1QFH30AF454F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('944', '20EZ1QFH30AF4550', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('945', '20EZ1QFH30AF4551', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('946', '20EZ1QFH30AF45A2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('947', '20EZ1QFH30AF45A3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('948', '20EZ1QFH30AF45A4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('949', '20EZ1QFH30AF45A5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('950', '20EZ1QFH30AF45A6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('951', '20EZ1QFH30AF45A7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('952', '20EZ1QFH30AF45A8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('953', '20EZ1QFH30AF45A9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('954', '20EZ1QFH30AF45AA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('955', '20EZ1QFH30AF45AB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('956', '20EZ1QFH30AF45AC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('957', '20EZ1QFH30AF45AD', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('958', '20EZ1QFH30AF45AE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('959', '20EZ1QFH30AF45AF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('960', '20EZ1QFH30AF45B0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('961', '20EZ1QFH30AF45B1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('962', '20EZ1QFH30AF45C2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('963', '20EZ1QFH30AF45C3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('964', '20EZ1QFH30AF45C4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('965', '20EZ1QFH30AF45C5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('966', '20EZ1QFH30AF45C6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('967', '20EZ1QFH30AF45C7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('968', '20EZ1QFH30AF45C8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('969', '20EZ1QFH30AF45C9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('970', '20EZ1QFH30AF45CA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('971', '20EZ1QFH30AF45CB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('972', '20EZ1QFH30AF45CC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('973', '20EZ1QFH30AF45CD', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('974', '20EZ1QFH30AF45CE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('975', '20EZ1QFH30AF45CF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('976', '20EZ1QFH30AF45D0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('977', '20EZ1QFH30AF45D1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('978', '20EZ1QFH30AF45F2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('979', '20EZ1QFH30AF45F3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('980', '20EZ1QFH30AF45F4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('981', '20EZ1QFH30AF45F5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('982', '20EZ1QFH30AF45F6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('983', '20EZ1QFH30AF45F7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('984', '20EZ1QFH30AF45F8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('985', '20EZ1QFH30AF45F9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('986', '20EZ1QFH30AF45FA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('987', '20EZ1QFH30AF45FB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('988', '20EZ1QFH30AF45FC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('989', '20EZ1QFH30AF45FD', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('990', '20EZ1QFH30AF45FE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('991', '20EZ1QFH30AF45FF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('992', '20EZ1QFH30AF4600', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('993', '20EZ1QFH30AF4601', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('994', '20EZ1QFH30AF4688', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('995', '20EZ1QFH30AF46C2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('996', '20EZ1QFH30AF46C3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('997', '20EZ1QFH30AF46C4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('998', '20EZ1QFH30AF46C5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('999', '20EZ1QFH30AF46C6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1000', '20EZ1QFH30AF46C7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1001', '20EZ1QFH30AF46C8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1002', '20EZ1QFH30AF46C9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1003', '20EZ1QFH30AF46CA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1004', '20EZ1QFH30AF46CB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1005', '20EZ1QFH30AF46CC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1006', '20EZ1QFH30AF46CD', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1007', '20EZ1QFH30AF46CE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1008', '20EZ1QFH30AF46CF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1009', '20EZ1QFH30AF46D0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1010', '20EZ1QFH30AF46D1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1011', '20EZ1QFH30AF4D83', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1012', '20EZ1QFH30AF4D85', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1013', '20EZ1QFH30AF4D87', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1014', '20EZ1QFH30AF4D8A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1015', '20EZ1QFH30AF4D8C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1016', '20EZ1QFH30AF4D8F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1017', '20EZ1QFH30AF4D90', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1018', '20EZ1QFH30AF5122', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1019', '20EZ1QFH30AF5123', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1020', '20EZ1QFH30AF5124', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1021', '20EZ1QFH30AF5125', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1022', '20EZ1QFH30AF5126', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1023', '20EZ1QFH30AF5127', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1024', '20EZ1QFH30AF5128', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1025', '20EZ1QFH30AF5129', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1026', '20EZ1QFH30AF512A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1027', '20EZ1QFH30AF512B', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1028', '20EZ1QFH30AF512C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1029', '20EZ1QFH30AF512D', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1030', '20EZ1QFH30AF512E', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1031', '20EZ1QFH30AF512F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1032', '20EZ1QFH30AF5130', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1033', '20EZ1QFH30AF5131', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1034', '20EZ1QFH30AF5132', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1035', '20EZ1QFH30AF5133', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1036', '20EZ1QFH30AF5134', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1037', '20EZ1QFH30AF5135', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1038', '20EZ1QFH30AF5136', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1039', '20EZ1QFH30AF5137', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1040', '20EZ1QFH30AF5138', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1041', '20EZ1QFH30AF5139', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1042', '20EZ1QFH30AF513A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1043', '20EZ1QFH30AF513B', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1044', '20EZ1QFH30AF513C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1045', '20EZ1QFH30AF513D', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1046', '20EZ1QFH30AF513E', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1047', '20EZ1QFH30AF513F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1048', '20EZ1QFH30AF5140', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1049', '20EZ1QFH30AF5141', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1050', '20EZ1QFH30AF51A2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1051', '20EZ1QFH30AF51A3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1052', '20EZ1QFH30AF51A4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1053', '20EZ1QFH30AF51A5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1054', '20EZ1QFH30AF51A6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1055', '20EZ1QFH30AF51A7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1056', '20EZ1QFH30AF51A8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1057', '20EZ1QFH30AF51A9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1058', '20EZ1QFH30AF51AA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1059', '20EZ1QFH30AF51AB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1060', '20EZ1QFH30AF51AC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1061', '20EZ1QFH30AF51AD', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1062', '20EZ1QFH30AF51AE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1063', '20EZ1QFH30AF51AF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1064', '20EZ1QFH30AF51B0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1065', '20EZ1QFH30AF51B1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1066', '20EZ1QFH30AF5202', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1067', '20EZ1QFH30AF5203', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1068', '20EZ1QFH30AF5204', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1069', '20EZ1QFH30AF5205', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1070', '20EZ1QFH30AF5206', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1071', '20EZ1QFH30AF5207', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1072', '20EZ1QFH30AF5208', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1073', '20EZ1QFH30AF5209', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1074', '20EZ1QFH30AF520A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1075', '20EZ1QFH30AF520B', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1076', '20EZ1QFH30AF520C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1077', '20EZ1QFH30AF520D', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1078', '20EZ1QFH30AF520E', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1079', '20EZ1QFH30AF520F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1080', '20EZ1QFH30AF5210', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1081', '20EZ1QFH30AF5211', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1082', '20EZ1QFH30AF5252', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1083', '20EZ1QFH30AF5253', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1084', '20EZ1QFH30AF5254', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1085', '20EZ1QFH30AF5255', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1086', '20EZ1QFH30AF5256', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1087', '20EZ1QFH30AF5257', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1088', '20EZ1QFH30AF5258', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1089', '20EZ1QFH30AF5259', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1090', '20EZ1QFH30AF525A', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1091', '20EZ1QFH30AF525B', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1092', '20EZ1QFH30AF525C', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1093', '20EZ1QFH30AF525D', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1094', '20EZ1QFH30AF525E', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1095', '20EZ1QFH30AF525F', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1096', '20EZ1QFH30AF5260', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1097', '20EZ1QFH30AF5261', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1098', '20EZ1QFH30AFA8EA', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1099', '20EZ1QFH30AFA8EB', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1100', '20EZ1QFH30AFA8EC', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1101', '20EZ1QFH30AFA8ED', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1102', '20EZ1QFH30AFA8EE', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1103', '20EZ1QFH30AFA8EF', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1104', '20EZ1QFH30AFA8F0', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1105', '20EZ1QFH30AFA8F1', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1106', '20EZ1QFH30AFA8F2', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1107', '20EZ1QFH30AFA8F3', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1108', '20EZ1QFH30AFA8F4', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1109', '20EZ1QFH30AFA8F5', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1110', '20EZ1QFH30AFA8F6', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1111', '20EZ1QFH30AFA8F7', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1112', '20EZ1QFH30AFA8F8', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1113', '20EZ1QFH30AFA8F9', '80', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1114', '21AWMJNH50B6E070', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1115', '21AWMJNH50B6E071', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1116', '21AWMJNH50B6E072', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1117', '21AWMJNH50B6E073', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1118', '21AWMJNH50B6E074', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1119', '21AWMJNH50B6E075', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1120', '21AWMJNH50B6E076', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1121', '21AWMJNH50B6E077', '81', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1122', '21AWMFQH20AD2FCA', '82', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1123', '21AWMFQH20AD2FCB', '82', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1124', '21AWKDDH40B438B5', '83', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1125', '21AWKDDH40B438BA', '83', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1126', '21AWKDDH40B43955', '83', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1127', '21AWKDDH40B43956', '83', '44', '78', '250.00', '0', '');
INSERT INTO `product` VALUES ('1128', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('1129', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('1130', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('1131', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');
INSERT INTO `product` VALUES ('1132', 'S/N', '84', '58', '78', '250.00', '0', 'SI SE PUEDE');

-- ----------------------------
-- Table structure for provider
-- ----------------------------
DROP TABLE IF EXISTS `provider`;
CREATE TABLE `provider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(13) DEFAULT '',
  `name` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone` varchar(10) DEFAULT '',
  `email` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of provider
-- ----------------------------
INSERT INTO `provider` VALUES ('5', '0992146818001', 'ZC MAYORISTAS S.A.', 'AV. CARLOS PLAZA DAÑIN S/N FRENTE AL POLICENTRO -C.C. PLAZA QUIL LOCAL', '042-286683', 'zcmayoristas@gmail.com', null, null);
INSERT INTO `provider` VALUES ('6', 'S/R', 'IPDORAL', 'IP DORAL. 3655 NW 115 AVE. DORAL FL, 33178', 'S/T', 'ipdoral@gmail.com', null, null);
INSERT INTO `provider` VALUES ('7', 'PROVEEDOR', 'PRUEBA', '123456', '123456', 'prueba', null, null);

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
-- Table structure for ticket
-- ----------------------------
DROP TABLE IF EXISTS `ticket`;
CREATE TABLE `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client` int(11) DEFAULT NULL,
  `type` varchar(11) DEFAULT NULL,
  `priority` varchar(20) DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `state` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `clientticket` (`client`),
  KEY `userticket` (`user`),
  KEY `priority` (`priority`),
  KEY `type` (`type`),
  CONSTRAINT `clientticket` FOREIGN KEY (`client`) REFERENCES `client` (`id`),
  CONSTRAINT `priority` FOREIGN KEY (`priority`) REFERENCES `priority` (`id`),
  CONSTRAINT `type` FOREIGN KEY (`type`) REFERENCES `type` (`id`),
  CONSTRAINT `userticket` FOREIGN KEY (`user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ticket
-- ----------------------------
INSERT INTO `ticket` VALUES ('53', '46', 'success', 'primary', '', '', '29', '2017-10-10 11:40:17', '0');
INSERT INTO `ticket` VALUES ('54', '46', 'success', 'primary', '', '', '29', '2017-10-10 11:41:43', '0');
INSERT INTO `ticket` VALUES ('55', '46', 'success', 'primary', 'df', '', '29', '2017-10-10 11:42:59', '0');
INSERT INTO `ticket` VALUES ('56', '46', 'success', 'primary', 'SDDDD', '', '29', '2017-10-10 11:49:24', '0');
INSERT INTO `ticket` VALUES ('57', '46', 'success', 'primary', 'PSDO', '', '29', '2017-10-10 11:51:27', '0');
INSERT INTO `ticket` VALUES ('58', '46', 'success', 'primary', 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', '', '29', '2017-10-10 11:53:52', '0');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('success', 'SOPORTE');
INSERT INTO `type` VALUES (null, null);

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
  `password` text DEFAULT NULL,
  `valid` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ukusername` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('28', 'ADMIN', '', 'admin', 'gabrielsalazar@outlook.com', '1', '2', '$2a$08$7NCX3Eu4gV00IvX7ihSLru0Sjjz6NnLLkQAl3YwAANJxOYHOiPplG', '0');
INSERT INTO `user` VALUES ('29', 'GABRIEL', 'SALAZAR', 'gsalazar', 'gabosoam621@gmail.com', '1', '1', '$2a$08$93cTBS7ppWFDU6wzKbg07eN7wZb/6gav75DXMwSO2QxIB3/laQB/6', '1');
INSERT INTO `user` VALUES ('30', 'WILLIAM', 'ROMERO', 'wromero', 'wromero@cineto.net', '1', '1', '$2a$08$mLu.eKMGGs00EWRFw5Gi2uzcCtZNIaZo7ih/vWd4PUJA1IWH9Zu5q', '1');
INSERT INTO `user` VALUES ('31', 'SANTIAGO', 'PÉREZ', 'sperez', 'sperez@cineto.net', '1', '1', '$2a$08$qjVL.TzCngQE.oRUyQO0ZeEgPtxb9CvjSHlcvUZITgepktq6Dz7dq', '1');
INSERT INTO `user` VALUES ('32', 'ALEX', 'CATUCUAMBA', 'acatucuamba', 'acatucuamba@cineto.net', '1', '1', '$2a$08$3RSuy6pKIwMfu6AQMOfjre7PLIWXk3A9Z33.KLwZUcDNShejJ4qHa', '1');
INSERT INTO `user` VALUES ('34', 'MIGUEL', 'TUPIZA', 'mtupiza', 'mtupiza@cineto.net', '1', '1', '$2a$08$MymwL9C3fyI9ZGctB2DN9.xjvGLYaD4mlIn87cdvICmcNb.jQosga', '1');
INSERT INTO `user` VALUES ('35', 'CINETO', 'TELECOMUNICACIONES', 'cineto', 'info@cineto.net', '1', '2', '$2a$08$1l82UNNu7eLaLegejR1OyOGJ4q2VcMQZFf.pMi7zcGcyr8JaODBCm', '0');
INSERT INTO `user` VALUES ('36', 'SANTIAGO', 'REYES', 'sreyes', 'sreyes@cineto.net', '1', '1', '$2a$08$eAGYLnVcs5VY4RtQqOUHaufn6UwDoOmhKEJD3aP.QBxZlF/xKebrC', '0');
INSERT INTO `user` VALUES ('37', 'MARIO', 'PALOMO', 'mpalomo', 'mpalomo@cineto.net', '1', '1', '$2a$08$Wkj.0oY6Anrp3.s8H1BfHOSjrGSdjm94CClyWLEun8fcMxf2IfI.i', '0');

-- ----------------------------
-- Table structure for voucher
-- ----------------------------
DROP TABLE IF EXISTS `voucher`;
CREATE TABLE `voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client` int(11) NOT NULL,
  `date` text DEFAULT NULL,
  `reference` text DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `client` (`client`) USING BTREE,
  KEY `user` (`user`),
  CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  CONSTRAINT `voucher_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of voucher
-- ----------------------------
INSERT INTO `voucher` VALUES ('32', '47', '2017-10-12', '12', null, '29', '1');
INSERT INTO `voucher` VALUES ('33', '47', '2017-10-12', '213', null, '29', '1');
INSERT INTO `voucher` VALUES ('34', '46', '2017-10-12', '12', null, '29', '1');

-- ----------------------------
-- View structure for v_bill
-- ----------------------------
DROP VIEW IF EXISTS `v_bill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_bill` AS select `product`.`id` AS `id`,`model`.`id` AS `model`,`product`.`barcode` AS `barcode`,`model`.`code` AS `code`,`model`.`code` AS `Producto`,`model`.`description` AS `description`,`product`.`bill` AS `bill`,`location`.`name` AS `location`,`category`.`name` AS `category`,`brand`.`name` AS `brand`,`product`.`price` AS `price`,`product`.`observation` AS `observation` from ((((`product` join `model` on((`product`.`variant` = `model`.`id`))) left join `location` on((`product`.`location` = `location`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) ; ;

-- ----------------------------
-- View structure for v_brand
-- ----------------------------
DROP VIEW IF EXISTS `v_brand`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_brand` AS select `brand`.`id` AS `value`,`brand`.`name` AS `text` from `brand` ; ;

-- ----------------------------
-- View structure for v_category
-- ----------------------------
DROP VIEW IF EXISTS `v_category`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_category` AS select `category`.`id` AS `value`,`category`.`name` AS `text` from `category` ; ;

-- ----------------------------
-- View structure for v_client
-- ----------------------------
DROP VIEW IF EXISTS `v_client`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_client` AS select `client`.`id` AS `value`,`client`.`name` AS `text`,`client`.`dni` AS `dni`,`client`.`address` AS `address`,`client`.`phone` AS `phone`,`client`.`email` AS `email` from `client` ; ;

-- ----------------------------
-- View structure for v_createbarcode
-- ----------------------------
DROP VIEW IF EXISTS `v_createbarcode`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_createbarcode` AS select concat('CIN-',year(now()),'-',week(now(),0),'-','00',((select `aux`.`id` from `aux` order by `aux`.`id` desc limit 1) + 1)) AS `barcode` ; ;

-- ----------------------------
-- View structure for v_detail
-- ----------------------------
DROP VIEW IF EXISTS `v_detail`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_detail` AS SELECT
client.`name` AS `name`,
product.barcode AS barcode,
model.description AS description,
model.`code` AS `code`,
detail.voucher AS voucher,
detail.id AS id,
product.id AS idproduct,
(select count(`detail`.`id`) from `detail` where (`model`.`code` = `model`.`code`)) AS count,
detail.observation AS observation,
client.id AS idclient,
detail.state
from ((((`detail` join `voucher` on((`detail`.`voucher` = `voucher`.`id`))) join `client` on((`voucher`.`client` = `client`.`id`))) join `product` on((`detail`.`product` = `product`.`id`))) join `model` on((`product`.`variant` = `model`.`id`))) ;

-- ----------------------------
-- View structure for v_devolution
-- ----------------------------
DROP VIEW IF EXISTS `v_devolution`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_devolution` AS SELECT
devolution.id,
devolution.date,
devolution.reference,
devolution.type,
devolution.state,
client.`name`,
client.address,
client.phone,
client.email,
`user`.id as iduser,
CONCAT(`user`.`name`,' ',`user`.lastname) as user
FROM
devolution
INNER JOIN client ON devolution.client = client.id
INNER JOIN `user` ON devolution.`user` = `user`.id ;

-- ----------------------------
-- View structure for v_incidence
-- ----------------------------
DROP VIEW IF EXISTS `v_incidence`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_incidence` AS select `incidence`.`id` AS `id`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user`,date_format(`incidence`.`date`,'%Y-%m-%d') AS `date`,cast(`incidence`.`date` as time) AS `time`,`incidence`.`ticket` AS `ticket`,`incidence`.`description` AS `description`,`incidence`.`isClosed` AS `isClosed` from (`incidence` join `user` on((`incidence`.`user` = `user`.`id`))) ; ;

-- ----------------------------
-- View structure for v_infobill
-- ----------------------------
DROP VIEW IF EXISTS `v_infobill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_infobill` AS select `bill`.`id` AS `id`,`provider`.`name` AS `name`,date_format(`bill`.`date`,'%d-%m-%Y') AS `date`,`bill`.`reference` AS `reference`,concat(`user`.`name`,' ',`user`.`lastname`) AS `user`,`user`.`id` AS `iduser`,`bill`.`state` AS `state`,`provider`.`address` AS `address`,`provider`.`phone` AS `phone`,`provider`.`email` AS `email` from ((`bill` join `provider` on((`bill`.`provider` = `provider`.`id`))) join `user` on((`bill`.`user` = `user`.`id`))) ; ;

-- ----------------------------
-- View structure for v_model
-- ----------------------------
DROP VIEW IF EXISTS `v_model`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_model` AS select `model`.`id` AS `id`,`model`.`code` AS `code`,`model`.`description` AS `description`,`unit`.`description` AS `unit`,`category`.`name` AS `category`,`brand`.`name` AS `brand` from (((`model` left join `unit` on((`model`.`unit` = `unit`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) ; ;

-- ----------------------------
-- View structure for v_modelbill
-- ----------------------------
DROP VIEW IF EXISTS `v_modelbill`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_modelbill` AS select `model`.`id` AS `id`,concat(`model`.`code`,' - ',`model`.`description`) AS `description` from `model` ; ;

-- ----------------------------
-- View structure for v_modelview
-- ----------------------------
DROP VIEW IF EXISTS `v_modelview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_modelview` AS select `model`.`id` AS `id`,`model`.`code` AS `code`,`model`.`description` AS `description`,`model`.`price` AS `price`,`model`.`stockmin` AS `stockmin`,`model`.`unit` AS `unit`,`model`.`category` AS `category`,`model`.`brand` AS `brand`,(select count(`product`.`id`) from `product` where ((`product`.`variant` = `model`.`id`) and (`product`.`state` = 0))) AS `count`,(select count(`product`.`id`) from `product` where ((`product`.`variant` = `model`.`id`) and (`product`.`state` = 1))) AS `countE` from `model` ; ;

-- ----------------------------
-- View structure for v_product
-- ----------------------------
DROP VIEW IF EXISTS `v_product`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_product` AS select `product`.`barcode` AS `barcode`,`model`.`code` AS `code`,`model`.`description` AS `description`,`category`.`name` AS `category`,`brand`.`name` AS `brand`,`bill`.`date` AS `date`,`bill`.`reference` AS `reference`,`location`.`name` AS `location`,`product`.`observation` AS `observation`,`bill`.`state` AS `billstate`,`product`.`id` AS `id`,`state`.`name` AS `state`,`product`.`state` AS `stateid` from ((((((`product` left join `model` on((`product`.`variant` = `model`.`id`))) left join `category` on((`model`.`category` = `category`.`id`))) left join `brand` on((`model`.`brand` = `brand`.`id`))) left join `bill` on((`product`.`bill` = `bill`.`id`))) left join `location` on((`product`.`location` = `location`.`id`))) join `state` on((`product`.`state` = `state`.`id`))) order by `bill`.`date` desc,`model`.`code` ; ;

-- ----------------------------
-- View structure for v_provider
-- ----------------------------
DROP VIEW IF EXISTS `v_provider`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_provider` AS select `provider`.`id` AS `value`,`provider`.`name` AS `text` from `provider` ; ;

-- ----------------------------
-- View structure for v_ticket
-- ----------------------------
DROP VIEW IF EXISTS `v_ticket`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_ticket` AS select `ticket`.`id` AS `id`,`ticket`.`type` AS `type`,`ticket`.`priority` AS `priority`,`priority`.`name` AS `name`,`ticket`.`user` AS `user`,`ticket`.`description` AS `description`,`ticket`.`state` AS `state`,`client`.`dni` AS `dni`,`client`.`name` AS `client`,date_format(`ticket`.`date`,'%Y-%m-%d') AS `date`,cast(`ticket`.`date` as time) AS `time`,concat(`user`.`name`,' ',`user`.`lastname`) AS `username`,`type`.`name` AS `tipo`,`ticket`.`subject` AS `subject` from ((((`ticket` join `priority` on((`ticket`.`priority` = `priority`.`id`))) join `client` on((`ticket`.`client` = `client`.`id`))) join `user` on((`ticket`.`user` = `user`.`id`))) join `type` on((`ticket`.`type` = `type`.`id`))) ; ;

-- ----------------------------
-- View structure for v_unit
-- ----------------------------
DROP VIEW IF EXISTS `v_unit`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_unit` AS select `unit`.`id` AS `value`,`unit`.`smallDescription` AS `text` from `unit` ; ;

-- ----------------------------
-- View structure for v_user
-- ----------------------------
DROP VIEW IF EXISTS `v_user`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_user` AS select `user`.`id` AS `value`,concat(`user`.`name`,' ',`user`.`lastname`) AS `text` from `user` ; ;

-- ----------------------------
-- View structure for v_voucher
-- ----------------------------
DROP VIEW IF EXISTS `v_voucher`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_voucher` AS SELECT
	`voucher`.`id` AS `id`,
	`voucher`.`date` AS `date`,
	`voucher`.`reference` AS `reference`,
	`voucher`.`type` AS `type`,
	`client`.`name` AS `name`,
	concat(
		`user`.`name`,
		' ',
		`user`.`lastname`
	) AS `user`,
	`user`.`id` AS `iduser`,
	`voucher`.`state` AS `state`,
	`client`.`address` AS `address`,
	`client`.`phone` AS `phone`,
	`client`.`email` AS `email`
FROM
	(
		(
			`voucher`
			JOIN `client` ON (
				(
					`voucher`.`client` = `client`.`id`
				)
			)
		)
		JOIN `user` ON (
			(
				`voucher`.`user` = `user`.`id`
			)
		)
	) ;

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
