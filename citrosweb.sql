CREATE DATABASE CITROSWEB CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
USE CITROSWEB;
SET SQL_SAFE_UPDATES = 0;

-- **************************************************************************************************************
-- create table --
CREATE TABLE ACCOUNT (
    accountID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40),
    password TEXT,
    permission VARCHAR(10),	
    userID INT,
    verificationCode INT,
    isVerified BOOL
) ENGINE=INNODB;

CREATE TABLE USER (
    userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    surname VARCHAR(40),
    forename VARCHAR(40),
    gender VARCHAR(10),
    dateOfBirth DATE,
    email VARCHAR(40),
    phoneNumber VARCHAR(10),
    idNumber VARCHAR(15),
    address VARCHAR(50),
    job VARCHAR(40),
    degree VARCHAR(15),
    experience INT,
    majorID INT,
    avatar TEXT,
    CV TEXT,
    description TEXT
) ENGINE=INNODB;

CREATE TABLE PROJECT (
    projectID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    projectName VARCHAR(40),
    projectOwner INT,
    description TEXT,
    startTime DATE,
    endTime DATE,
    maxParticipantAmount INT,
    gitHubLink TEXT,
    majorID INT,
    projectStatus VARCHAR(20)
) ENGINE=INNODB;

CREATE TABLE PARTICIPATE (
    userID INT,
    projectID INT,
    rate INT
) ENGINE=INNODB;

CREATE TABLE PROGRESS (
    progressID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    projectID INT,
    userID INT,
    task VARCHAR(40),
    startTime DATE,
    endTime DATE,
    taskStatus VARCHAR(40),
    notice TEXT
) ENGINE=INNODB;

CREATE TABLE MAJOR (
    majorID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    majorName VARCHAR(40),
    description TEXT
) ENGINE=INNODB;

-- CREATE TABLE CONTACT_INFO (
--     contactInfoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     userID INT,
--     platform VARCHAR(10),
--     link TEXT
-- ) ENGINE=INNODB;

CREATE TABLE REGISTRANT (
    registrantID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    projectID INT,
    projectName VARCHAR(40)
) ENGINE=INNODB;

CREATE TABLE STARREDPROJECT (
    userID INT,
    projectID INT
) ENGINE=INNODB;

-- CREATE TABLE REPORT (
-- 	reportID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     userID INT,
-- 	projectID INT,
--     reason TEXT
-- ) ENGINE=INNODB;

CREATE TABLE PROJECTFILE (
    fileID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    projectID INT,
    file TEXT
) ENGINE=INNODB;

-- foreign key --
-- PARTICIPATE
ALTER TABLE PARTICIPATE ADD CONSTRAINT PARTICIPATE_PROJECT_FK FOREIGN KEY(projectID) REFERENCES PROJECT(projectID);

-- PROGRESS
ALTER TABLE PROGRESS ADD CONSTRAINT PROGRESS_PROJECT_FK FOREIGN KEY(projectID) REFERENCES PROJECT(projectID);

-- REGISTRANT
ALTER TABLE REGISTRANT ADD CONSTRAINT REGISTRANTS_USER_FK FOREIGN KEY(userID) REFERENCES USER(userID);
ALTER TABLE REGISTRANT ADD CONSTRAINT REGISTRANTS_PROJECT_FK FOREIGN KEY(projectID) REFERENCES PROJECT(projectID);

-- STARREDPROJECT
ALTER TABLE STARREDPROJECT ADD CONSTRAINT STARREDPROJECT_PROJECT_FK FOREIGN KEY(projectID) REFERENCES PROJECT(projectID);

-- PROJECTFILE
ALTER TABLE PROJECTFILE ADD CONSTRAINT PROJECTFILE_PROJECT_FK FOREIGN KEY(projectID) REFERENCES PROJECT(projectID);

-- insert MAJOR
INSERT INTO MAJOR (majorName, description) VALUES ('Web', 'Lập trình web');
INSERT INTO MAJOR (majorName, description) VALUES ('Mobile', 'Lập trình mobile');
INSERT INTO MAJOR (majorName, description) VALUES ('Desktop app', 'Lập trình desktop app');
INSERT INTO MAJOR (majorName, description) VALUES ('Game', 'Lập trình game');
INSERT INTO MAJOR (majorName, description) VALUES ('Đa nền tảng', 'Lập trình ứng dụng đa nền tảng');

-- insert USER
INSERT INTO USER (surname, forename, email, avatar, majorID)
VALUES('admin', '', 'admin', '..\\citrosBackend\\src\\images\\122185457_680013959289115_8768610557013545493_n.jpg', '1');

INSERT INTO USER (surname, forename, gender, dateOfBirth, email, phoneNumber, idNumber, address, job, degree, experience, avatar, majorID, description)
VALUES('Nguyễn Gia', 'Bảo', 'Nam', '2002-11-05', '20520406@gm.uit.edu.vn', '0967904069', '123456789123','BD, VN', 'Back-end developer', 'Đại học', '1', '..\\citrosBackend\\src\\images\\877a9bc40150f7785e3eacfec9860af4.jpg', '1', 'j4rvis');	

INSERT INTO USER (surname, forename, gender, dateOfBirth, email, phoneNumber, idNumber, address, job, degree, experience, avatar, majorID, description)
VALUES('Nguyễn Huỳnh Gia', 'Huy', 'Nam', '2002-11-08', '20520514@gm.uit.edu.vn', '0987654321', '321123456789','BD, VN', 'Front-end developer', 'Đại học', '1', '..\\citrosBackend\\src\\images\\122185457_680013959289115_8768610557013545493_n.jpg', '2', '');

-- insert ACCOUNT
INSERT INTO ACCOUNT (email, password, userID, permission, isVerified) VALUES ('admin1', '$2b$10$ncl/zaJSdrPPzK9mM6upoe/EZL5jibOHYVYwN59QQgW9MqXzH9Qt2', '1', 'admin', 1);
INSERT INTO ACCOUNT (email, password, userID, permission, isVerified) VALUES ('admin2', '$2b$10$ncl/zaJSdrPPzK9mM6upoe/EZL5jibOHYVYwN59QQgW9MqXzH9Qt2', '1', 'admin', 1);
INSERT INTO ACCOUNT (email, password, userID, permission, isVerified) VALUES ('user1@gmail.com', '$2b$10$ncl/zaJSdrPPzK9mM6upoe/EZL5jibOHYVYwN59QQgW9MqXzH9Qt2', '2', 'user', 1);
INSERT INTO ACCOUNT (email, password, userID, permission, isVerified) VALUES ('user2@gmail.com', '$2b$10$ncl/zaJSdrPPzK9mM6upoe/EZL5jibOHYVYwN59QQgW9MqXzH9Qt2', '3', 'user', 1);

-- insert PROJECT
INSERT INTO PROJECT (projectName, projectOwner, description, startTime, endTime, maxParticipantAmount, projectStatus, majorID, gitHubLink)
VALUES('Web tìm kiếm thành viên dự án', '3', 'Web viết bằng ReactJS NodeJS Express MySQL', '2023-02-27', '2023-07-10', '2', 'Chưa hoàn thành', '1', 'https://github.com/ngb0511/SE121.N21-DoAn1-HE_THONG_HO_TRO_TIM_KIEM_DOI_NHOM_DU_AN');

INSERT INTO PROJECT (projectName, projectOwner, description, startTime, endTime, maxParticipantAmount, projectStatus, majorID, gitHubLink)
VALUES('Bảo trì web bán đồ điện tử', '2', 'Web viết bằng ReactJS NodeJS Express MySQL', '2023-05-20', '2023-07-10', '4', 'Chưa hoàn thành', '1', '');

INSERT INTO PROJECT (projectName, projectOwner, description, startTime, endTime, maxParticipantAmount, projectStatus, majorID, gitHubLink)
VALUES('Game metal slug', '2', 'Game metal slug bản super fake', '2022-02-21', '2022-06-04', '4', 'Đã hoàn thành', '4', '');

INSERT INTO PROJECT (projectName, projectOwner, description, startTime, endTime, maxParticipantAmount, projectStatus, majorID, gitHubLink)
VALUES('App quản lý khách sạn', '3', 'App quản lý khách sạn viết bằng C#', '2022-02-21', '2022-06-11', '4', 'Đã hoàn thành', '3', '');

-- insert PARTICIPATE
INSERT INTO PARTICIPATE (userID, projectID)
VALUES('3', '1');

INSERT INTO PARTICIPATE (userID, projectID)
VALUES('2', '1');

INSERT INTO PARTICIPATE (userID, projectID)
VALUES('2', '2');

INSERT INTO PARTICIPATE (userID, projectID)
VALUES('2', '3');

INSERT INTO PARTICIPATE (userID, projectID)
VALUES('3', '4');

-- insert PROGRESS
INSERT INTO PROGRESS (projectID, userID, task, startTime, endTime, taskStatus, notice)
VALUES('1', '2', 'Xây dựng database', '2023-05-20', '2023-05-20', 'Chưa hoàn thành', '');

INSERT INTO PROGRESS (projectID, userID, task, startTime, endTime, taskStatus, notice)
VALUES('1', '2', 'Xây dựng base code', '2023-05-21', '2023-05-30', 'Chưa hoàn thành', '');

INSERT INTO PROGRESS (projectID, userID, task, startTime, endTime, taskStatus, notice)
VALUES('1', '3', 'Thiết kế giao diện', '2023-05-21', '2023-05-30', 'Chưa hoàn thành', '');

-- insert REGISTRANT
INSERT INTO REGISTRANT (userID, projectID, projectName)
VALUES('3', '2', 'Bảo trì web bán đồ điện tử');

-- insert CONTACT_INFO
-- INSERT INTO CONTACT_INFO (userID, platform, link)
-- VALUES('2', 'facebook', 'https://www.facebook.com/JBugg.NGB/');

-- INSERT INTO CONTACT_INFO (userID, platform, link)
-- VALUES('3', 'facebook', 'https://www.facebook.com/ghostdragonhuy');

-- insert STARREDPROJECT
INSERT INTO STARREDPROJECT (userID, projectID)
VALUES('3', '1');

INSERT INTO STARREDPROJECT (userID, projectID)
VALUES('2', '1');

INSERT INTO STARREDPROJECT (userID, projectID)
VALUES('2', '2');

-- insert PROJECTFILE
INSERT INTO PROJECTFILE (projectID, file)
VALUES('2', '..\\citrosBackend\\src\\files\\Quy_che_dao_tao_theo_tin_chi_UIT_p1.pdf');

INSERT INTO PROJECTFILE (projectID, file)
VALUES('2', '..\\citrosBackend\\src\\files\\Quy_che_dao_tao_theo_tin_chi_UIT_p2.pdf');
