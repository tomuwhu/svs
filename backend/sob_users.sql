/*
 Navicat MySQL Data Transfer

 Source Server         : inf-mysql
 Source Server Type    : MySQL
 Source Server Version : 50562
 Source Host           : mysql:3306
 Source Schema         : sob_backend

 Target Server Type    : MySQL
 Target Server Version : 50562
 File Encoding         : 65001

 Date: 23/08/2023 12:47:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sob_users
-- ----------------------------
DROP TABLE IF EXISTS `sob_users`;
CREATE TABLE `sob_users` (
  `un` varchar(255) NOT NULL,
  `pw` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `web` varchar(255) DEFAULT NULL,
  `git` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`un`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
