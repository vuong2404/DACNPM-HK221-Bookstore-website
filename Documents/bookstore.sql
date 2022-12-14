

CREATE DATABASE BOOKSTORE;
GO
USE BOOKSTORE


-- Đặt hàng, quản lý đơn hàng
CREATE TABLE CART(
	cartID int NOT NULL IDENTITY(1000,1), 
	userId int NOT NULL, 
	quantity int, 
	total money

	PRIMARY KEY(cartID)
)

CREATE TABLE CART_ITEM(
	cartId int NOT NULL, 
	bookId int NOT NULL, 
	quantity int NOT NULL, 
	total money

	PRIMARY KEY(cartId, bookId)
)

CREATE TABLE Receive_Info (
	id int NOT NULL IDENTITY(1000,1), 
	userID int NOT NULL, 
	city nvarchar(30) NOT NULL, 
	district nvarchar(30) NOT NULL, 
	ward nvarchar(30) NOT NULL, 
	specificAddress nvarchar(100), 
	phoneNumber varchar(15) NOT NULL, 
	receiverName nvarchar(30) NOT NULL, 
	type char(1) default '0'

	PRIMARY KEY(id)
)


CREATE TABLE _ORDER(
	orderID int NOT NULL IDENTITY (10001,1), 
	userID int NOT NULL, 
	addressID int NOT NULL, 
	paymentMethod nvarchar(30) NOT NULL, 
	total_quantity int, 
	totalMoney money, 
	createAt DATETIME NOT NULL, 
	deliveryCode varchar(20), 
	status varchar(30) default 'waiting'

	PRIMARY KEY (orderID)
)

CREATE TABLE ORDER_ITEM(
	orderID int NOT NULL,
	bookID int NOT NULL, 
	quantity int NOT NULL, 
	totalMoney money

	PRIMARY KEY (orderId, bookId)
)


-- Homepage/Book Detail 
CREATE TABLE BOOK(
	bookId int NOT NULL IDENTITY(100000,1),
	title nvarchar(100) NOT NULL, 
	price money NOT NULL,
	author nvarchar(30) NOT NULL,
	publisher nvarchar(30),
	pubYear int,
	description text NOT NULL,
	urlBook char(100) NOT NULL,
	sold_number int,
	amountInStorage int NOT NULL

	PRIMARY KEY(bookId)
)

CREATE TABLE CATEGORY(
	categoryId int NOT NULL IDENTITY (1000,1),
	name nvarchar(50) NOT NULL

	PRIMARY KEY(categoryId)
)


--  Book với category là quan hệ M N nên cần phải tách ra một bảng riêng
--  Dùng cho tính năng lọc theo thể loại
CREATE TABLE Be_long(
	bookID int NOT NULL,
	categoryID int NOT NULL,
	PRIMARY KEY(bookID, categoryID)
)

CREATE TABLE feedback(
	fdId int NOT NULL IDENTITY (3000,1),
	bookId int NOT NULL,
	userId int NOT NULL,
	rateStar int NOT NULL,
	review nvarchar(200)

	PRIMARY KEY(fdId, bookId, userId)
)


-- User/account 
CREATE TABLE _user(
	userId int IDENTITY(1000000,1) PRIMARY KEY,
	fullName nvarchar(30), 
	email varchar(30),
	phoneNum varchar(20),
	gender nvarchar(10),
	birthDate DATE,
	registerDate DATE NOT NULL,
	address nvarchar(100),
)

CREATE TABLE ACCOUNT(
	accountId char(10) PRIMARY KEY,
	username char(30) NOT NULL,
	password char(30) NOT NULL,
	typeAccount char(30) NOT NULL
)


ALTER TABLE cart ADD CONSTRAINT fk_cart 
		FOREIGN KEY (userId) REFERENCES _user(userId) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE cart_item ADD CONSTRAINT fk_cartItem2
		FOREIGN KEY (cartId) REFERENCES cart(cartId)

ALTER TABLE cart_item ADD CONSTRAINT fk_cartTitem3 
		FOREIGN KEY (bookId) REFERENCES book(bookId) ON DELETE CASCADE ON UPDATE CASCADE

--ALTER TABLE _address ADD CONSTRAINT fk_address
--		FOREIGN KEY (userId) REFERENCES _user(userId) ON DELETE CASCADE ON UPDATE CASCADE


ALTER TABLE _order ADD CONSTRAINT fk__order1
		FOREIGN KEY (userID) REFERENCES _user(userID) ON DELETE CASCADE ON UPDATE CASCADE
		
ALTER TABLE _order ADD CONSTRAINT fk__order2
		FOREIGN KEY (addressID) REFERENCES Receive_Info(id) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE order_item ADD CONSTRAINT fk_order_item
		FOREIGN KEY (orderId) REFERENCES _order(orderId) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE order_item ADD CONSTRAINT fk_order_item2 
		FOREIGN KEY (bookId) REFERENCES book(bookId) ON DELETE CASCADE ON UPDATE CASCADE

--ALTER TABLE book ADD CONSTRAINT fk_book
--		FOREIGN KEY (categoryId) REFERENCES category(categoryId) ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE Be_long ADD CONSTRAINT fk_book_be_long_category
		FOREIGN KEY(bookID) REFERENCES book(BookID) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE feedback ADD CONSTRAINT fk_feedback1
		FOREIGN KEY (bookId) REFERENCES book(bookId) ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE feedback ADD CONSTRAINT fk_feedback2
		FOREIGN KEY (userId) REFERENCES _user(userId) ON DELETE CASCADE ON UPDATE CASCADE

--1. Giới tính của khách hàng chỉ có thể: F, M, Male, Female, Nam, Nữ 
GO
CREATE TRIGGER tri_user
ON _user
FOR INSERT, UPDATE
AS
BEGIN
	IF EXISTS(SELECT * FROM INSERTED WHERE gender <> N'F' and gender <> N'M' and gender <> N'Male' and gender <> N'Female' and gender <> N'Nam' and gender <> N'Nữ')
	BEGIN
		raiserror (N'Lỗi: Giới tính chỉ có thể là M/Male hoặc F/Female hoặc Nam/Nữ', 16,1)
		rollback
	END
END
GO

--2. Độ tuổi của khách hàng phải trên 10 tuổi (Dưới 10 tuổi ko phù hợp với một số chức năng thanh toán)
CREATE TRIGGER tri_user2
ON _user
FOR INSERT, UPDATE
AS
BEGIN
	IF EXISTS(SELECT * FROM INSERTED WHERE (YEAR(GETDATE()) - YEAR(birthDate) < 10))
	BEGIN
		raiserror (N'Lỗi: Người dùng phải đủ 10 tuổi trở lên', 16,1)
		rollback
	END
END
GO

--3. Giỏ hàng chỉ có thể chứa tối đa 30 cuốn sách
CREATE TRIGGER tri_cart
ON CART
FOR INSERT, UPDATE
AS
BEGIN
	IF EXISTS(SELECT * FROM INSERTED WHERE quantity > 30)
	BEGIN
		raiserror (N'Lỗi: Giỏ hàng chỉ chứa tối đa 30 cuốn sách', 16,1)
		rollback
	END
END
GO

--4. Mật khẩu và tên người dùng của tài khoản ko thể là dữ liệu null
CREATE TRIGGER tri_account
ON ACCOUNT
FOR INSERT, UPDATE
AS
BEGIN
	IF EXISTS(SELECT * FROM INSERTED WHERE username = '' or password = '')
	BEGIN
		raiserror (N'Lỗi: Mật khẩu và tên người dùng của tài khoản ko thể là dữ liệu null', 16,1)
		rollback
	END
END
GO


CREATE VIEW temp AS SELECT CART.cartId, SUM(CART_ITEM.total) as Totall, SUM(CART_ITEM.quantity) as Quantityy FROM CART_ITEM,CART WHERE CART.cartID = CART_ITEM.cartId GROUP BY CART.cartId
GO

CREATE VIEW temp1 AS SELECT _ORDER.orderId, SUM(ORDER_ITEM.totalMoney) as Totall, SUM(ORDER_ITEM.quantity) as Quantityy FROM ORDER_ITEM,_ORDER WHERE _ORDER.orderID = ORDER_ITEM.orderId GROUP BY _ORDER.orderId
GO


CREATE TRIGGER tri_cartItem
ON CART_ITEM
FOR INSERT, UPDATE, DELETE
AS
BEGIN
	UPDATE CART_ITEM
	SET CART_ITEM.total = CART_ITEM.quantity * BOOK.price FROM BOOK WHERE CART_ITEM.bookId = BOOK.bookId
	UPDATE CART
	SET CART.total = temp.Totall FROM temp WHERE CART.cartID = temp.cartID 
	UPDATE CART
	SET CART.quantity = temp.Quantityy FROM temp WHERE CART.cartID = temp.cartID 

END
GO

CREATE TRIGGER cart_item_duplicate
ON cart_item
INSTEAD OF INSERT
AS
BEGIN
    SET NOCOUNT ON
    IF EXISTS 
    (
        SELECT 1 
        FROM dbo.cart_item T 
        INNER JOIN INSERTED I 
        ON T.cartId = I.cartId 
            AND T.bookId = I.bookId
    )
    BEGIN
       UPDATE CART_ITEM
	   SET CART_ITEM.quantity = CART_ITEM.quantity + inserted.quantity FROM inserted
		WHERE CART_ITEM.bookId = inserted.bookId and CART_ITEM.cartId = inserted.cartId
        return
    END

    ELSE INSERT INTO CART_ITEM 
		SELECT * FROM INSERTED I
END
GO
--UPDATE CART_ITEM
--	SET CART_ITEM.quantity = CART_ITEM.quantity + inserted.quantity FROM inserted
--	WHERE CART_ITEM.bookId = inserted.bookId and CART_ITEM.cartId = inserted.cartId



CREATE TRIGGER tri_orderItem
ON ORDER_ITEM
FOR INSERT, UPDATE
AS
BEGIN
	UPDATE ORDER_ITEM
	SET ORDER_ITEM.totalMoney = ORDER_ITEM.quantity * BOOK.price FROM BOOK WHERE ORDER_ITEM.bookId = BOOK.bookId
	UPDATE _ORDER
	SET _ORDER.totalMoney = temp1.Totall FROM temp1 WHERE _ORDER.orderID = temp1.orderID
	UPDATE _ORDER
	SET _ORDER.total_quantity = temp1.Quantityy FROM temp1 WHERE _ORDER.orderID = temp1.orderID

END
GO



INSERT INTO account VALUES
('ACC001', 'username1', 'password1@', 'user'),
('ACC002', 'username2', 'password2@', 'user'),
('ACC003', 'username3', 'password3@', 'user'),
('ACC004', 'username4', 'password4@', 'user'),
('ACC005', 'username5', 'password5@', 'user'),
('ACC006', 'username6', 'password6@', 'user'),
('ACC007', 'username7', 'password7@', 'user'),
('ACC008', 'username8', 'password8@', 'user'),
('ACC009', 'username9', 'password9@', 'user'),
('ACC010', 'username10', 'password10@', 'user')
GO

INSERT INTO _user VALUES
( N'Nguyễn Văn Anh', 'nguyenvananh@gmail.com','0923236277',N'Nam','20020217','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Nguyễn Huy Quốc', 'nguyenhuyquoc@gmail.com','0923236277',N'Nam','20020327','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
(N'Hà Huy Nam', 'hahuynam@gmail.com','0923236277',N'Nam','20020115','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Châu Ngọc Anh', 'chaungocanh@gmail.com','0923236277',N'Nữ','20021106','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Phan Hà Anh', 'phanhaanh@gmail.com','0923236277',N'Nữ','20020421','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
(N'Nguyễn Hà Phương', 'nguyenhaphuong@gmail.com','0923236277',N'Nữ','20020509','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Nguyễn Đình Phúc', 'nguyendinhphuc@gmail.com','0923236277',N'Nam','20020610','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Nguyễn Hà Giang', 'nguyenhagiang@gmail.com','0923236277',N'Nữ','20020211','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
( N'Dương Đình Bảo', 'duongdinhbao@gmail.com','0923236277',N'Nam','20021206','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
(N'Hà Quốc Tuấn', 'haquoctuan@gmail.com','0923236277',N'Nam','20020126','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM'),
(N'Trần Đình Nam', 'trandinhnam@gmail.com','0923236277',N'Nam','20020322','20221205', N'Phường Linh Trung, Thủ Đức, TPHCM')
GO

INSERT INTO CART(userId) VALUES
(1000000),
(1000001),
(1000002),
(1000003),
(1000004),
(1000005),
(1000006),
(1000007),
(1000008),
(1000009),
(1000010)
GO

INSERT INTO CATEGORY VALUES
(N'Tiểu Thuyết'),
(N'Thiếu Nhi'),
( N'Ngôn Tình'),
( N'Chính Trị'),
(N'Truyện Tranh'),
( N'Viễn Tưởng'),
(N'Khoa Học')
GO

INSERT INTO BOOK VALUES
(N'Người bán hàng vĩ đại nhất thế giới', 150000, N'Jame Json', N'Nhà Xuất Bản 1', 2000, N'Mô tả 1', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 160000, N'Robin Server', N'Nhà Xuất Bản 2', 2000, N'Mô tả 2', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 170000, N'Peter Client', N'Nhà Xuất Bản 3', 2000, N'Mô tả 3', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 280000, N'Enrydo Network', N'Nhà Xuất Bản 4', 2000, N'Mô tả 4', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 60000, N'Karik Berison', N'Nhà Xuất Bản 5', 2000, N'Mô tả 5', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 50000, N'Olaravie Santer', N'Nhà Xuất Bản 6', 2000, N'Mô tả 6', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 60000, N'Bill Mezkender', N'Nhà Xuất Bản 7', 2000, N'Mô tả 7', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 10000, N'Jan Pitersen', N'Nhà Xuất Bản 8', 2000, N'Mô tả 8', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 90000, N'Hariton Butson', N'Nhà Xuất Bản 9', 2000, N'Mô tả 9', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 233000, N'Emily Richars', N'Nhà Xuất Bản 10', 2000, N'Mô tả 10', '', 0, 10),
(N'Người bán hàng vĩ đại nhất thế giới', 230000, N'Algyn Teryy', N'Nhà Xuất Bản 11', 2000, N'Mô tả 11', '', 0, 10)
GO

INSERT INTO CART_ITEM(cartId, bookId, quantity) VALUES
(1000, 100004,2),
(1000, 100001,2),
(1000, 100002,2),
(1001, 100000,2),
(1001, 100008,2),
(1001, 100004,1),
(1002, 100002,3),
(1002, 100003,2),
(1003, 100008,1),
(1004, 100008,1),
(1005, 100008,1),
(1006, 100008,1),
(1007, 100008,3),
(1008, 100008,2),
(1009, 100008,1),
(1010, 100008,1)
go 

INSERT INTO Receive_Info VALUES
(1000000, N'Bắc Giang', N'Huyện Lục Ngạn', N'Xã Nghĩa Hồ', N'Số nhà 1', '0923236277', N'Nguyễn Văn Anh', 1),
(1000000, N'Lâm Đồng', N'Huyện Đạ Tẻh', N'Xã Quốc Oai', N'Số nhà 2', '0923236277', N'Nguyễn Huy Quốc', 0),
(1000001, N'Hồ Chí Minh', N'Quận 3', N'Phường 11', N'Số nhà 3', '0923236277', N'Khưu Vĩnh Toàn', 1),
(1000002, N'Hồ Chí Minh', N'Quận 3', N'Phường 01', N'Số nhà 4', '0923236277', N'Châu Ngọc Anh', 1),
(1000003, N'Hồ Chí Minh', N'Thủ Đức', N'Linh Trung', N'Ký túc xá khu A', '0923236277', N'Liễu Minh Vương', 1),
(1000004, N'Hồ Chí Minh', N'Quận 4', N'Phường 12', N'Số nhà 6', '0923236277', N'Mạnh Gia Khiêm', 1),
(1000005, N'Hồ Chí Minh', N'Quận 11', N'Phường 05', N'Số nhà 7', '0923236277', N'Mâu Công Hậu', 1),
(1000006, N'TPHCM', N'Thủ Đức', N'Linh Trung', N'Số nhà 8', '0923236277', N'Lyly Ðông Dương', 1),
(1000007, N'Sóc Trăng', N'Huyện Long Phú', N'Xã Phú Hữu', N'Số nhà 9', '0923236277', N'Ngọc Quang Hòa', 1),
(1000008, N'Sóc Trăng', N'Thị xã Ngã Năm', N'Xã Mỹ Bình', N'Số nhà 9', '0923236277', N'Mai Ðình Phúc', 1),
(1000009, N'Cần Thơ', N'Quận Cái Răng', N'Phường Phú Thứ', N'Số nhà 9', '0923236277', N'Cống Bảo Hiển', 1),
(1000010, N'Cần Thơ', N'Cần Thơ', N'Huyện Thới Lai', N'Số nhà 9', '0923236277', N'Trần Đình Nam', 1)

go 

INSERT INTO _ORDER VALUES
(1000000, 1000,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123sabcd', N'confirmed'),
(1000001, 1002,  N'momo', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'intrans'),
(1000002,1003,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'intrans'),
(1000003, 1004,  N'momo', 0, 0, '2022-04-22 10:34:23', '', N'cancel'),
(1000004,1005,  N'cash',0, 0, '2022-04-22 10:34:23', 'COD123tyabc', N'confirmed'),
(1000000, 1006,  N'vnpay', 0, 0, '2022-04-22 10:34:23', 'COD123xabc', N'waiting'),
(1000006, 1007, N'zalopay', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'success'),
(1000000,1000,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'success'),
(1000000, 1002,  N'momo', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'intrans'),
(1000002, 1003,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'intrans'),
(1000003, 1004,  N'momo', 0, 0, '2022-04-22 10:34:23', '', N'cancel'),
(1000004, 1005,  N'cash',0, 0, '2022-04-22 10:34:23', 'COD123abc', N'confirmed'),
(1000005, 1006, N'vnpay', 0, 0, '2022-04-22 10:34:23', '', N'waiting'),
(1000000,1007, N'zalopay', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'success'),
(1000000, 1000,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'intrans'),
(1000001, 1002,  N'momo', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'intrans'),
(1000002,1003,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'intrans'),
(1000003, 1004,  N'momo', 0, 0, '2022-04-22 10:34:23', '', N'cancel'),
(1000004,1005,  N'cash',0, 0, '2022-04-22 10:34:23', 'COD123abc', N'confirmed'),
(1000005, 1006,  N'vnpay', 0, 0, '2022-04-22 10:34:23', '', N'waiting'),
(1000006, 1007, N'zalopay', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'success'),
(1000000,1000,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'cancel'),
(1000001, 1002,  N'momo', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'intrans'),
(1000002, 1003,  N'cash', 0, 0, '2022-04-22 10:34:23', 'COD123abc', N'intrans'),
(1000003, 1004,  N'momo', 0, 0, '2022-04-22 10:34:23', '', N'cancel'),
(1000004, 1005,  N'cash',0, 0, '2022-04-22 10:34:23', 'COD123abc', N'confirmed'),
(1000005, 1006, N'vnpay', 0, 0, '2022-04-22 10:34:23', '', N'waiting'),
(1000000,1007, N'zalopay', 0, 0, '2022-04-22 10:34:23', 'COD123abcd', N'success')
GO

INSERT INTO ORDER_ITEM (orderID,bookID, quantity) VALUES
(10001, 100010, 2),
(10001, 100001, 1),
(10001, 100002, 4),
(10001, 100003, 2),
(10001, 100005, 3),
(10002, 100001, 1),
(10003, 100001, 1),
(10004, 100001, 1),
(10005, 100001, 1),
(10006, 100001, 1),
(10006, 100002, 1),
(10006, 100003, 1),
(10007, 100003, 1),
(10008, 100000, 1),
(10009, 100001, 1),
(10010, 100001, 1),
(10011, 100001, 1),
(10012, 100001, 1),
(10013, 100005, 1),
(10013, 100001, 1),
(10013, 100002, 1),
(10014, 100003, 1),
(10014, 100004, 1),
(10015, 100000, 1),
(10016, 100001, 1),
(10017, 100001, 1),
(10018, 100001, 1),
(10019, 100001, 1),
(10020, 100001, 1),
(10021, 100001, 1),
(10022, 100002, 1),
(10022, 100003, 1),
(10022, 100004, 1),
(10023, 100000, 1),
(10024, 100001, 1),
(10025, 100001, 1),
(10026, 100001, 1),
(10027, 100001, 1),
(10028, 100005, 1),
(10028, 100001, 1),
(10028, 100002, 1),
(10028, 100003, 1),
(10028, 100004, 1)

go

INSERT INTO feedback VALUES
(100000, 1000000, 5, N'Sách này rất thú vị'),
(100000, 1000001, 4, N'Sách này hay quá'),
(100000, 1000002, 4, N'Khi nào có chương tiếp theo ạ'),
(100000, 1000003, 4, N'Xin giá với ạ'),
(100000, 1000004, 5, N'Sách này shipp tới TPHCM mất bao lâu ạ'),
(100000, 1000005, 5, N'Sách này rất thú vị'),
(100000, 1000006, 5, N'Sách này rất thú vị'),
(100000, 1000007, 5, N'Sách này rất thú vị'),
(100000, 1000008, 5, N'Sách này rất thú vị')
GO
delete from _ORDER where total_quantity = 0

SELECT * FROM CART
SELECT * FROM CART_ITEM
SELECT * FROM Receive_Info
SELECT * FROM _ORDER
SELECT * FROM ORDER_ITEM
SELECT * FROM BOOK 
SELECT * FROM CATEGORY
SELECT * FROM feedback
SELECT * FROM _user
SELECT * FROM ACCOUNT

SELECT bookID, quantity, totalMoney from  ORDER_ITEM

SELECT * FROM _ORDER WHERE (orderID LIKE '%%' OR status LIKE '%%') AND status = 'undelivered'    




