-- Up
CREATE TABLE microphone (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    price INTEGER
);

/*
    18 wpisów
 */
INSERT INTO Microphone (brand, model, price) values('Blue', 'Amber', 99.99);
INSERT INTO Microphone (brand, model, price) values('Blue', 'Bluebird SL', 299.99);
INSERT INTO Microphone (brand, model, price) values('Blue', 'Kiwi', 2000);
INSERT INTO Microphone (brand, model, price) values('Blue', 'Spark', 399);
INSERT INTO Microphone (brand, model, price) values('Blue', 'Yeti', 130);
INSERT INTO Microphone (brand, model, price) values('Rode', 'NT-USB Mini', 100.00);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Broadcaster', 350.00);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Podcaster', 145);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Nt1', 230);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Nt1a', 220);
INSERT INTO Microphone (brand, model, price) values('Rode', 'NT-USB', 135);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Podmic', 105);
INSERT INTO Microphone (brand, model, price) values('Rode', 'Procaster', 130);
INSERT INTO Microphone (brand, model, price) values('Samson', 'USB', 179);
INSERT INTO Microphone (brand, model, price) values('Shure', 'Beta 58a', 139);
INSERT INTO Microphone (brand, model, price) values('Shure', 'Beta 87a', 280);
INSERT INTO Microphone (brand, model, price) values('Shure', 'sm7b', 399);
INSERT INTO Microphone (brand, model, price) values('Shure', 'Super-55', 200);

-- Down
DROP TABLE Microphone;
