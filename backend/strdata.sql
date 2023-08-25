/*
 Navicat MySQL Data Transfer

 Source Server         : local-xampp
 Source Server Type    : MySQL
 Source Server Version : 100428
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 100428
 File Encoding         : 65001

 Date: 25/08/2023 20:20:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for strdata
-- ----------------------------
DROP TABLE IF EXISTS `strdata`;
CREATE TABLE `strdata` (
  `id` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user` varchar(255) DEFAULT NULL,
  `msg` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of strdata
-- ----------------------------
BEGIN;
INSERT INTO `strdata` VALUES ('2023-08-25 19:13:37', 'Dr. Németh Tamás', 'Math Rulez: $\\sqrt{3x-1}+(1+x)^2$');
INSERT INTO `strdata` VALUES ('2023-08-25 20:04:19', 'Németh-Szabados Abigél', '```css\n.menu {\n    text-align: right;\n    background-color: black;\n    a {\n      background-color: rgb(54, 30, 30);\n      display: inline-block;\n      padding: 2px;\n      font-size: 13px;\n      color: white;\n    }\n  }\n```');
INSERT INTO `strdata` VALUES ('2023-08-25 20:04:22', 'Németh-Szabados Abigél', '# Mai kérdés:\n# Mi a kérdés?\n- Cica\n- Csacsi\n$$x_{1,2}=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$\n```javascript\n	var a = 5\n	f = () => {\n		a = 5\n	}\n```');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
