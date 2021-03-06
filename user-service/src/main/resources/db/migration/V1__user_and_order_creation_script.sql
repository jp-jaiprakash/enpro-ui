CREATE TABLE USER (
  ID bigint(20) NOT NULL AUTO_INCREMENT,
  USER_ID varchar(100) NOT NULL,
  FIRST_NAME varchar(50) NOT NULL,
  LAST_NAME varchar(50) DEFAULT NULL,
  PASSWORD VARCHAR(50) NOT NULL,
  PRIMARY KEY (ID),
  UNIQUE KEY UK_username (USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE ORDERS (
  ORDER_ID bigint(20) NOT NULL AUTO_INCREMENT,
  ORDER_DETAIL VARCHAR(500) NOT NULL,
  QUANTITY VARCHAR(10) NOT NULL,
  QUANTITY_UNIT VARCHAR(20) NOT NULL,
  USER_ID VARCHAR(100) NOT NULL,
  ORDER_DATE DATE NOT NULL DEFAULT CURRENT_DATE(),
  PRIMARY KEY(ORDER_ID),
  --FOREIGN KEY (USER_ID) REFERENCES USER(USER_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




