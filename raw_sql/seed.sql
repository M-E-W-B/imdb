USE imdb_v2;

-- movie: 1-40, tv_series: 41-50, aired: 1-6, genre: 1-20,
-- season: 51-58, language: 1-2 episode: 59-75, person: 1-50,
-- award: 1-27

-- user
-- Owner of a user is the user itself
-- Owner group of a user is the `Aliens` group
INSERT INTO entity(id) VALUES (NULL), (NULL), (NULL);
INSERT INTO user
  (id, first_name, last_name, email, password, reset_password_token, reset_password_expires_at, is_active, owned_by_id, owned_by_group_id, created_by_id, updated_by_id)
VALUES
  (1, 'Evan', 'Austin', 'evan@yahoo.com', '$2a$08$3BxHbhf0LX..5gMuzhP9nehnbeeKKTQ7qzu5byemoeJFD6blEtLWa', NULL, NULL, 1, 1, 4, 1, NULL),
  (2, 'Rhonda', 'Newman', 'rhonda@google.com', '$2a$08$KiUwuxgoVm6TGVdnn4Lm1e9IWsasRdjKlR.d.axMRgTkbQSAVZ5OW', NULL, NULL, 1, 2, 4, 1, NULL),
  (3, 'Nellie', 'Lambert', 'nellie@msn.com', '$2a$08$d6PFQe9YlK7X23erfiKg2uGlAP96IA9ea9obc./7AUNco6rCv73QS', NULL, NULL, 1, 3, 4, 1, NULL);

INSERT INTO action
  (id, name, description, applies_to_object, created_by_id, updated_by_id)
VALUES
  (1, 'create', 'Create rows in table', 0, 1, NULL),
  (2, 'read', 'Read a specific object', 1, 1, NULL),
  (3, 'modify', 'Modify a specific object', 1, 1, NULL),
  (4, 'delete', 'Delete a specific object', 1, 1, NULL),
  (5, 'list_users', 'List users', 1, 1, NULL);

INSERT INTO implemented_action
  (action_id, table_name, description, created_by_id, updated_by_id)
VALUES
  (1, 'user', 'Create a row in user table', 1, NULL),
  (2, 'user', 'Read a row in user table', 1, NULL),
  (3, 'user', 'Modify a row in user table', 1, NULL),
  (4, 'user', 'Delete a row in user table', 1, NULL),
  (5, 'user', 'List all rows in user table', 1, NULL);

INSERT INTO entity(id) VALUES (NULL), (NULL);
INSERT INTO groups
  (id, name, description, created_by_id, updated_by_id)
VALUES
  (4, 'Aliens', 'A set of users who are from another planet.', 1, NULL),
  (5, 'Avengers', 'A set of users who are from Earth.', 1, NULL);

INSERT INTO group_membership
  (group_id, user_id, created_by_id, updated_by_id)
VALUES
  -- Add Rhonda to `Aliens` group
  (4, 2, 1, NULL),
  -- Add Nellie to `Avengers` group
  (5, 3, 1, NULL);

-- Create privileges on `user`
-- Owner of a user is the user itself
-- Owner group of a user is the `Aliens` group
INSERT INTO privilege
  (action_id, description, role, who, type, related_table, created_by_id, updated_by_id)
VALUES
  (2, 'Owner of a user can read user', 'owner', NULL, 'global', 'user', 1, NULL),
  (3, 'Owner of a user can modify user', 'owner', NULL, 'global', 'user', 1, NULL),
  (4, 'Owner of a user can delete user', 'owner', NULL, 'global', 'user', 1, NULL),

  (2, 'Owner Group of a user can read user', 'owner_group', NULL, 'global', 'user', 1, NULL),
  (3, 'Owner Group of a user can modify user', 'owner_group', NULL, 'global', 'user', 1, NULL),
  (4, 'Owner Group of a user can delete user', 'owner_group', NULL, 'global', 'user', 1, NULL),

  (1, 'Avengers can create user', 'group', 5, 'table', 'user', 1, NULL),
  (2, 'Avengers can read user', 'group', 5, 'global', 'user', 1, NULL),
  (3, 'Avengers can modify user', 'group', 5, 'global', 'user', 1, NULL),
  (4, 'Avengers can delete user', 'group', 5, 'global', 'user', 1, NULL),
  (5, 'Avengers can list users', 'group', 5, 'global', 'user', 1, NULL);

-- language
INSERT INTO language
  (id, name, created_by_id, updated_by_id)
VALUES
  (1, 'English', 1, NULL),
  (2, 'French', 1, NULL);

-- genre
INSERT INTO genre
  (id, name, created_by_id, updated_by_id)
VALUES
  (1, 'Drama', 1, NULL),
  (2, 'French', 1, NULL),
  (3, 'Action', 1, NULL),
  (4, 'Adventure', 1, NULL),
  (5, 'Animation', 1, NULL),
  (6, 'Biography', 1, NULL),
  (7, 'Comedy', 1, NULL),
  (8, 'Crime', 1, NULL),
  (9, 'Documentary', 1, NULL),
  (10, 'Western', 1, NULL),
  (11, 'Family', 1, NULL),
  (12, 'Fantasy', 1, NULL),
  (13, 'History', 1, NULL),
  (14, 'Horror', 1, NULL),
  (15, 'Music', 1, NULL),
  (16, 'Mystery', 1, NULL),
  (17, 'Romance', 1, NULL),
  (18, 'Sci-Fi', 1, NULL),
  (19, 'Thriller', 1, NULL),
  (20, 'War', 1, NULL);

-- aired
INSERT INTO aired
  (id, country, venue, created_by_id, updated_by_id)
VALUES
  (1, 'India', 'MAMI Festival', 1, NULL),
  (2, 'USA', 'Internet', 1, NULL),
  (3, 'France', 'Cannes Film Festival', 1, NULL),
  (4, 'UK', 'MAMI Festival', 1, NULL),
  (5, 'Australia', 'Internet', 1, NULL),
  (6, 'India', 'Internet', 1, NULL);

-- person
INSERT INTO person
  (id, first_name, last_name, bio, born_at, gender, image_url, created_by_id, updated_by_id)
VALUES
  (1, 'Chris', 'Hemsworth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1983-08-11', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/lrhth7yK9p3vy6p7AabDUM1THKl.jpg', 1, NULL),
  (2, 'Jennifer', 'Lawrence', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1990-08-15', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/hLzgl1dS8O2IAn1PIwHYhxR0Lkm.jpg', 1, NULL),
  (3, 'Henry', 'Cavill', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1983-05-05', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg', 1, NULL),
  (4, 'Rose', 'Byrne', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1979-07-24', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/laJdQNmsuR2iblYUggEqr49LvwJ.jpg', 1, NULL),
  (5, 'Samuel', 'L.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1948-12-21', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/jyFUkDAP0XXHQDsDhufZWZG25y.jpg', 1, NULL),
  (6, 'Bill', 'Skarsgård', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1990-08-09', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/xt2h7nOUe8q6hUjzgQ8LdVmFy8H.jpg', 1, NULL),
  (7, 'Travis', 'Fimmel', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1979-07-15', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/v8gLLGqFOHMtftmhg6148zKvBPU.jpg', 1, NULL),
  (8, 'Katheryn', 'Winnick', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1977-12-17', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/k5bAyHknFqwRoFGc1Pmh7JAffWj.jpg', 1, NULL),
  (9, 'Kaya', 'Scodelario', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1992-02-13', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/iTrPnn7oS96k0iWPzNxaKCNutB6.jpg', 1, NULL),
  (10, 'Beyoncé', 'Knowles', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1981-09-04', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/cOFQlPKAmo2DlnZwMCYo3b7sI2K.jpg', 1, NULL),
  (11, 'Olga', 'Kurylenko', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1979-11-14', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/v9HmONHtTZM4Sl9QSNpxDYvuMCk.jpg', 1, NULL),
  (12, 'Keanu', 'Reeves', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1964-09-02', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg', 1, NULL),
  (13, 'Johnny', 'Depp', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1963-06-09', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/ea4fTp9T8Zy2KWxyFsqDIBgHZmb.jpg', 1, NULL),
  (14, 'Dwayne', 'Johnson', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1972-05-02', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/akweMz59qsSoPUJYe7QpjAc2rQp.jpg', 1, NULL),
  (15, 'Charlize', 'Theron', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1975-08-08', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/k5Xt2mNlraX7yHYaPy9gvayCaKV.jpg', 1, NULL),
  (16, 'Scarlett', 'Johansson', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1984-11-22', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/8EueDe6rPF0jQU4LSpsH2Rmrqac.jpg', 1, NULL),
  (17, 'Emilia', 'Clarke', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1986-10-23', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg', 1, NULL),
  (18, 'Liam', 'Neeson', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1952-06-07', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/9mdAohLsDu36WaXV2N3SQ388bvz.jpg', 1, NULL),
  (19, 'Carla', 'Gugino', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1971-08-29', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/xddYLCp8zWLgYcQRck7REEgCUWl.jpg', 1, NULL),
  (20, 'Ana', 'de', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1988-04-30', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/xPYOkcMaAEdoTWp6pme056WqhFW.jpg', 1, NULL),
  (21, 'Cate', 'Blanchett', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1969-05-14', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/5HikVWKfkkUa8aLdCMHtREBECIn.jpg', 1, NULL),
  (22, 'Jason', 'Statham', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1967-07-26', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/PhWiWgasncGWD9LdbsGcmxkV4r.jpg', 1, NULL),
  (23, 'Idris', 'Elba', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1972-09-06', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/d9NkfCwczP0TjgrjpF94jF67SK8.jpg', 1, NULL),
  (24, 'Emma', 'Watson', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1990-04-15', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/s77hUycSJ4x8RJWHDC9WPgotgxE.jpg', 1, NULL),
  (25, 'Jeremy', 'Renner', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1971-01-07', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/l6CxIOFCjF65298teEJd5mCnPDO.jpg', 1, NULL),
  (26, 'Hugh', 'Jackman', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1968-10-12', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/2VFrKpHGSKNUfq3TI6zUSU5AIdt.jpg', 1, NULL),
  (27, 'Robert', 'Downey', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1965-04-04', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg', 1, NULL),
  (28, 'Dylan', 'O Brien', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1991-08-26', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/gmU3f4aR6Bd8zkk6AiLm0dvWPaE.jpg', 1, NULL),
  (29, 'Linda', 'Fiorentino', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1958-03-09', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/aKadq5uC9CjCKtkMYPYECNcGz3s.jpg', 1, NULL),
  (30, 'Pierce', 'Brosnan', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1953-05-16', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/1JXL0zrA26JjdoX8sqf57fJRDVM.jpg', 1, NULL),
  (31, 'Natalie', 'Portman', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1981-06-09', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/yBvFSPtUOtuJZWQBkwReTdAD0LU.jpg', 1, NULL),
  (32, 'Amanda', 'Seyfried', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1985-12-03', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/dxMX9K2KiHObxeHOmT8eDNCrKfC.jpg', 1, NULL),
  (33, 'Margot', 'Robbie', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1990-07-02', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/fVkq9Ky6JbZN4h3TWgaHZzh2MNU.jpg', 1, NULL),
  (34, 'Vin', 'Diesel', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1967-07-18', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/7rwSXluNWZAluYMOEWBxkPmckES.jpg', 1, NULL),
  (35, 'Jessica', 'Chastain', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1977-03-24', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg', 1, NULL),
  (36, 'Stellan', 'Skarsgård', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1951-06-13', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/zSCU2agleLtJEvzj98jEesVhBxa.jpg', 1, NULL),
  (37, 'Tom', 'Hardy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1977-09-15', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/4CR1D9VLWZcmGgh4b6kKuY2NOel.jpg', 1, NULL),
  (38, 'Tom', 'Cruise', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1962-07-03', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg', 1, NULL),
  (39, 'Gal', 'Gadot', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1985-04-30', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/yV2nljqQa3MjrrIK4AllDjmJIcs.jpg', 1, NULL),
  (40, 'Gary', 'Oldman', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1958-03-21', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/tofLS5A6lBXNjeROGvgpfe2JwaT.jpg', 1, NULL),
  (41, 'Jaeden', 'Lieberher', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2003-01-04', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/rCPRfOUdTBdDDAC12mqEv74d7M6.jpg', 1, NULL),
  (42, 'Dakota', 'Johnson', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1989-10-04', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/razONK0A0UUZUCtxLryQwodNzWO.jpg', 1, NULL),
  (43, 'Al', 'Pacino', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1940-04-25', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/ks7Ba8x9fJUlP9decBr6Dh5mThX.jpg', 1, NULL),
  (44, 'Lee', 'Chae-dam', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1940-11-25', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/lJ2ryu3XGVyP7WESkL3pTigeg8j.jpg', 1, NULL),
  (45, 'Ben', 'Affleck', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1972-08-15', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/7Zy12dUasr43oF8hyU5iBz5iOpO.jpg', 1, NULL),
  (46, 'Elle', 'Fanning', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1998-04-09', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/mRTEfRMHjfVUdNjfmV8WHjKiEI6.jpg', 1, NULL),
  (47, 'Lorina', 'Kamburova', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1980-04-25', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/6CvsofN6xEZOOxTeGLfj5kzZaV5.jpg', 1, NULL),
  (48, 'Harrison', 'Ford', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1942-07-13', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/7LOTdRfHU1H1qHBxpUv3jT04eWB.jpg', 1, NULL),
  (49, 'Anthony', 'Hopkins', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1937-12-31', 'M', 'https://image.tmdb.org/t/p/w235_and_h235_face/jdoBTIru71FbPuHGEgox5RVmIO0.jpg', 1, NULL),
  (50, 'Marion', 'Cotillard', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1975-09-30', 'F', 'https://image.tmdb.org/t/p/w235_and_h235_face/eSRyCYy2qiGIRodOV5eZJJRZIyP.jpg', 1, NULL);

-- award
INSERT INTO award
  (id, name, year, category, created_by_id, updated_by_id)
VALUES
  (1, 'British Academy Film Awards', 2017, 'Best Director', 1, NULL),
  (2, 'British Academy Film Awards', 2017, 'Best Original Score', 1, NULL),
  (3, 'British Academy Film Awards', 2017, 'Best Cinematography', 1, NULL),
  (4, 'British Academy Film Awards', 2017, 'Best Adapted Screenplay', 1, NULL),
  (5, 'British Academy Film Awards', 2017, 'Best Original Screenplay', 1, NULL),
  (6, 'British Academy Film Awards', 2017, 'Best Female Supporting Actor', 1, NULL),
  (7, 'British Academy Film Awards', 2017, 'Best Male Supporting Actor', 1, NULL),
  (8, 'British Academy Film Awards', 2017, 'Best Female Actor', 1, NULL),
  (9, 'British Academy Film Awards', 2017, 'Best Male Actor', 1, NULL),
  (10, 'Palme d\'Or', 2017, 'Best Director', 1, NULL),
  (11, 'Palme d\'Or', 2017, 'Best Original Score', 1, NULL),
  (12, 'Palme d\'Or', 2017, 'Best Cinematography', 1, NULL),
  (13, 'Palme d\'Or', 2017, 'Best Adapted Screenplay', 1, NULL),
  (14, 'Palme d\'Or', 2017, 'Best Original Screenplay', 1, NULL),
  (15, 'Palme d\'Or', 2017, 'Best Female Supporting Actor', 1, NULL),
  (16, 'Palme d\'Or', 2017, 'Best Male Supporting Actor', 1, NULL),
  (17, 'Palme d\'Or', 2017, 'Best Female Actor', 1, NULL),
  (18, 'Palme d\'Or', 2017, 'Best Male Actor', 1, NULL),
  (19, 'Academy Awards', 2017, 'Best Director', 1, NULL),
  (20, 'Academy Awards', 2017, 'Best Original Score', 1, NULL),
  (21, 'Academy Awards', 2017, 'Best Cinematography', 1, NULL),
  (22, 'Academy Awards', 2017, 'Best Adapted Screenplay', 1, NULL),
  (23, 'Academy Awards', 2017, 'Best Original Screenplay', 1, NULL),
  (24, 'Academy Awards', 2017, 'Best Female Supporting Actor', 1, NULL),
  (25, 'Academy Awards', 2017, 'Best Male Supporting Actor', 1, NULL),
  (26, 'Academy Awards', 2017, 'Best Female Actor', 1, NULL),
  (27, 'Academy Awards', 2017, 'Best Male Actor', 1, NULL);

-- base_entertainment
INSERT INTO base_entertainment
  (id, title, plot, image_url, rating, created_by_id, updated_by_id)
VALUES
  -- movie
  (1, 'Into the Wild', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (2, 'Wild Wild West', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 4.8, 1, NULL),
  (3, 'Wild Tales', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (4, 'Wild Hogs', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.9, 1, NULL),
  (5, 'Wild', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.1, 1, NULL),
  (6, 'Wild Things', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.5, 1, NULL),
  (7, 'Where the Wild Things Are', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.8, 1, NULL),
  (8, 'Beasts of the Southern Wild', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.3, 1, NULL),
  (9, 'Wild Strawberries', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.2, 1, NULL),
  (10, 'Wild at Heart', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.2, 1, NULL),
  (11, 'Fight Club', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.8, 1, NULL),
  (12, 'Fist Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.6, 1, NULL),
  (13, 'Why We Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (14, 'Winter on Fire: Ukraine\'s Fight for Freedom', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.4, 1, NULL),
  (15, 'Ip Man: The Final Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.2, 1, NULL),
  (16, 'Bring It On: Fight to the Finish', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.4, 1, NULL),
  (17, 'Asterix and the Big Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (18, 'Fight for Your Right Revisited', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (19, 'Love at First Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.6, 1, NULL),
  (20, 'Day of the Fight', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (21, 'In Time', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.7, 1, NULL),
  (22, 'Once Upon a Time in America', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.4, 1, NULL),
  (23, 'Once Upon a Time in the West', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.5, 1, NULL),
  (24, 'Prince of Persia: The Sands of Time', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.6, 1, NULL),
  (25, 'About Time', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.8, 1, NULL),
  (26, 'Hot Tub Time Machine', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (27, 'Once Upon a Time in Mexico', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (28, 'The Time Traveler\'s Wife', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.1, 1, NULL),
  (29, 'A Time to Kill', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.4, 1, NULL),
  (30, 'The Time Machine', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.9, 1, NULL),
  (31, 'Blood Diamond', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8, 1, NULL),
  (32, 'There Will Be Blood', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (33, 'Harry Potter and the Half-Blood Prince', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.6, 1, NULL),
  (34, 'First Blood', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.7, 1, NULL),
  (35, 'Rambo: First Blood Part II', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (36, 'Blood Simple.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.7, 1, NULL),
  (37, 'Underworld: Blood Wars', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.8, 1, NULL),
  (38, 'Blood Father', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (39, 'Blood Work', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (40, 'Throne of Blood', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  -- tv series
  (41, 'Breaking Bad', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8, 1, NULL),
  (42, 'The Killings', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (43, 'Game of Thrones', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.6, 1, NULL),
  (44, 'True Detective', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.7, 1, NULL),
  (45, 'West World', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (46, 'Dexter', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.7, 1, NULL),
  (47, 'Decalogue', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.8, 1, NULL),
  (48, 'Mr. Robot', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (49, 'Silicon Valley', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.4, 1, NULL),
  (50, 'Big Bang Theory', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  -- season
  (51, 'Season 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 5.7, 1, NULL),
  (52, 'Season 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.6, 1, NULL),
  (53, 'Season 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 9.3, 1, NULL),
  (54, 'Season 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.3, 1, NULL),
  (55, 'Season 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 3.7, 1, NULL),
  (56, 'Season 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.7, 1, NULL),
  (57, 'Season 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.4, 1, NULL),
  (58, 'Season 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.1, 1, NULL),
  -- episode
  (59, 'eps3.0_power-saver-mode.h', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (60, 'eps3.1_undo.gz', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.2, 1, NULL),
  (61, 'eps3.2_legacy.so', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.3, 1, NULL),
  (62, 'eps3.3_m3tadata.par2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.4, 1, NULL),
  (63, 'eps3.4_runtime-err0r.r00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.1, 1, NULL),
  (64, 'eps3.5_kill-pr0cess.inc', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.4, 1, NULL),
  (65, 'eps3.6_fredrick+tanya.chk', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.8, 1, NULL),
  (66, 'eps3.7_dont-delete-me.ko', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.9, 1, NULL),
  (67, 'eps3.8_stage3.torrent', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.4, 1, NULL),
  (68, 'shutdown -r', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.0, 1, NULL),
  (69, 'Pilot', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 9.0, 1, NULL),
  (70, 'Cat\'s in the Bag...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 8.0, 1, NULL),
  (71, '...And the Bag\'s in the River', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 6.8, 1, NULL),
  (72, 'Cancer Man', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.5, 1, NULL),
  (73, 'Gray Matter', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.8, 1, NULL),
  (74, 'Crazy Handful of Nothin\'', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.9, 1, NULL),
  (75, 'A No-Rough-Stuff-Type Deal', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://placehold.it/300X400', 7.2, 1, NULL);

-- movie
INSERT INTO movie
  (id, runtime, keywords, official_sites, created_by_id, updated_by_id)
VALUES
  (1, 178, '[]', '{}', 1, NULL),
  (2, 206, '[]', '{}', 1, NULL),
  (3, 221, '[]', '{}', 1, NULL),
  (4, 168, '[]', '{}', 1, NULL),
  (5, 163, '[]', '{}', 1, NULL),
  (6, 100, '[]', '{}', 1, NULL),
  (7, 123, '[]', '{}', 1, NULL),
  (8, 239, '[]', '{}', 1, NULL),
  (9, 197, '[]', '{}', 1, NULL),
  (10, 221, '[]', '{}', 1, NULL),
  (11, 219, '[]', '{}', 1, NULL),
  (12, 114, '[]', '{}', 1, NULL),
  (13, 131, '[]', '{}', 1, NULL),
  (14, 185, '[]', '{}', 1, NULL),
  (15, 222, '[]', '{}', 1, NULL),
  (16, 150, '[]', '{}', 1, NULL),
  (17, 239, '[]', '{}', 1, NULL),
  (18, 134, '[]', '{}', 1, NULL),
  (19, 103, '[]', '{}', 1, NULL),
  (20, 128, '[]', '{}', 1, NULL),
  (21, 232, '[]', '{}', 1, NULL),
  (22, 191, '[]', '{}', 1, NULL),
  (23, 233, '[]', '{}', 1, NULL),
  (24, 101, '[]', '{}', 1, NULL),
  (25, 242, '[]', '{}', 1, NULL),
  (26, 129, '[]', '{}', 1, NULL),
  (27, 159, '[]', '{}', 1, NULL),
  (28, 211, '[]', '{}', 1, NULL),
  (29, 168, '[]', '{}', 1, NULL),
  (30, 132, '[]', '{}', 1, NULL),
  (31, 135, '[]', '{}', 1, NULL),
  (32, 182, '[]', '{}', 1, NULL),
  (33, 177, '[]', '{}', 1, NULL),
  (34, 166, '[]', '{}', 1, NULL),
  (35, 216, '[]', '{}', 1, NULL),
  (36, 138, '[]', '{}', 1, NULL),
  (37, 196, '[]', '{}', 1, NULL),
  (38, 245, '[]', '{}', 1, NULL),
  (39, 238, '[]', '{}', 1, NULL),
  (40, 216, '[]', '{}', 1, NULL);

-- tv_series
INSERT INTO tv_series
  (id, official_sites, created_by_id, updated_by_id)
VALUES
  (41, '[]', 1, NULL),
  (42, '[]', 1, NULL),
  (43, '[]', 1, NULL),
  (44, '[]', 1, NULL),
  (45, '[]', 1, NULL),
  (46, '[]', 1, NULL),
  (47, '[]', 1, NULL),
  (48, '[]', 1, NULL),
  (49, '[]', 1, NULL),
  (50, '[]', 1, NULL);

-- season
INSERT INTO season
  (id, tv_series_id, sequence, created_by_id, updated_by_id)
VALUES
  (51, 41, 1, 1, NULL),
  (52, 41, 2, 1, NULL),
  (53, 41, 3, 1, NULL),
  (54, 41, 4, 1, NULL),
  (55, 41, 5, 1, NULL),
  (56, 48, 1, 1, NULL),
  (57, 48, 2, 1, NULL),
  (58, 48, 3, 1, NULL);

-- episode
INSERT INTO episode
  (id, season_id, sequence, runtime, keywords, created_by_id, updated_by_id)
VALUES
  (59, 58, 1, 120, '[]', 1, NULL),
  (60, 58, 2, 130, '[]', 1, NULL),
  (61, 58, 3, 111, '[]', 1, NULL),
  (62, 58, 4, 119, '[]', 1, NULL),
  (63, 58, 5, 120, '[]', 1, NULL),
  (64, 58, 6, 170, '[]', 1, NULL),
  (65, 58, 7, 110, '[]', 1, NULL),
  (66, 58, 8, 80, '[]', 1, NULL),
  (67, 58, 9, 190, '[]', 1, NULL),
  (68, 58, 10, 130, '[]', 1, NULL),
  (69, 51, 1, 127, '[]', 1, NULL),
  (70, 51, 2, 129, '[]', 1, NULL),
  (71, 51, 3, 127, '[]', 1, NULL),
  (72, 51, 4, 120, '[]', 1, NULL),
  (73, 51, 5, 123, '[]', 1, NULL),
  (74, 51, 6, 122, '[]', 1, NULL),
  (75, 51, 7, 111, '[]', 1, NULL);

-- crew_member
INSERT INTO crew_member
  (movie_id, episode_id, person_id, role, character_name, created_by_id, updated_by_id)
VALUES
  (3, NULL, 7, 'Producer', 'Paper', 1, NULL),
  (33, NULL, 31, 'Make-up Artist', 'Paper', 1, NULL),
  (20, NULL, 47, 'Director', 'Scissors', 1, NULL),
  (36, NULL, 23, 'Writer', 'Scissors', 1, NULL),
  (37, NULL, 31, 'Make-up Artist', 'Rock', 1, NULL),
  (23, NULL, 6, 'Actor', 'Scissors', 1, NULL),
  (3, NULL, 39, 'Producer', 'Scissors', 1, NULL),
  (40, NULL, 15, 'Soundtrack', 'Paper', 1, NULL),
  (1, NULL, 42, 'Producer', 'Paper', 1, NULL),
  (18, NULL, 32, 'Make-up Artist', 'Rock', 1, NULL),
  (2, NULL, 16, 'Actor', 'Paper', 1, NULL),
  (36, NULL, 5, 'Director', 'Scissors', 1, NULL),
  (35, NULL, 31, 'Director', 'Scissors', 1, NULL),
  (36, NULL, 15, 'Make-up Artist', 'Scissors', 1, NULL),
  (1, NULL, 21, 'Producer', 'Paper', 1, NULL),
  (37, NULL, 46, 'Make-up Artist', 'Rock', 1, NULL),
  (11, NULL, 6, 'Producer', 'Paper', 1, NULL),
  (15, NULL, 40, 'Stunt Coordinator', 'Scissors', 1, NULL),
  (28, NULL, 42, 'Director', 'Rock', 1, NULL),
  (28, NULL, 19, 'Make-up Artist', 'Scissors', 1, NULL),
  (40, NULL, 5, 'Actor', 'Paper', 1, NULL),
  (26, NULL, 28, 'Actor', 'Paper', 1, NULL),
  (1, NULL, 41, 'Writer', 'Rock', 1, NULL),
  (17, NULL, 6, 'Producer', 'Paper', 1, NULL),
  (3, NULL, 34, 'Actor', 'Rock', 1, NULL),
  (NULL, 68, 1, 'Director', 'Rock', 1, NULL),
  (NULL, 67, 32, 'Make-up Artist', 'Scissors', 1, NULL),
  (NULL, 72, 14, 'Producer', 'Paper', 1, NULL),
  (NULL, 70, 1, 'Stunt Coordinator', 'Rock', 1, NULL),
  (NULL, 75, 35, 'Director', 'Paper', 1, NULL),
  (NULL, 68, 9, 'Producer', 'Rock', 1, NULL),
  (NULL, 62, 30, 'Producer', 'Scissors', 1, NULL),
  (NULL, 68, 49, 'Writer', 'Rock', 1, NULL),
  (NULL, 63, 3, 'Stunt Coordinator', 'Rock', 1, NULL),
  (NULL, 74, 49, 'Cinematographer', 'Scissors', 1, NULL),
  (NULL, 64, 50, 'Actor', 'Paper', 1, NULL),
  (NULL, 61, 25, 'Make-up Artist', 'Paper', 1, NULL),
  (NULL, 72, 42, 'Actor', 'Rock', 1, NULL),
  (NULL, 69, 39, 'Actor', 'Scissors', 1, NULL),
  (NULL, 70, 31, 'Director', 'Scissors', 1, NULL),
  (NULL, 73, 44, 'Stunt Coordinator', 'Rock', 1, NULL),
  (NULL, 65, 1, 'Make-up Artist', 'Paper', 1, NULL),
  (NULL, 63, 24, 'Actor', 'Scissors', 1, NULL),
  (NULL, 73, 40, 'Soundtrack', 'Paper', 1, NULL),
  (NULL, 68, 27, 'Make-up Artist', 'Rock', 1, NULL),
  (NULL, 62, 19, 'Director', 'Rock', 1, NULL),
  (NULL, 65, 8, 'Stunt Coordinator', 'Scissors', 1, NULL),
  (NULL, 64, 47, 'Make-up Artist', 'Paper', 1, NULL),
  (NULL, 65, 11, 'Make-up Artist', 'Paper', 1, NULL),
  (NULL, 75, 26, 'Producer', 'Scissors', 1, NULL);

-- entertainment_award
INSERT INTO entertainment_award
  (movie_id, tv_series_id, award_id, person_id, status, created_by_id, updated_by_id)
VALUES
  (30, NULL, 19, 49, 'nominated', 1, NULL),
  (4, NULL, 25, 7, 'won', 1, NULL),
  (35, NULL, 20, 25, 'nominated', 1, NULL),
  (38, NULL, 9, 15, 'nominated', 1, NULL),
  (7, NULL, 19, 34, 'won', 1, NULL),
  (14, NULL, 7, 13, 'nominated', 1, NULL),
  (32, NULL, 6, 25, 'won', 1, NULL),
  (19, NULL, 20, 11, 'nominated', 1, NULL),
  (8, NULL, 18, 22, 'nominated', 1, NULL),
  (21, NULL, 5, 43, 'nominated', 1, NULL),
  (7, NULL, 20, 20, 'won', 1, NULL),
  (11, NULL, 23, 17, 'nominated', 1, NULL),
  (23, NULL, 17, 19, 'nominated', 1, NULL),
  (35, NULL, 26, 46, 'nominated', 1, NULL),
  (32, NULL, 16, 40, 'won', 1, NULL),
  (33, NULL, 14, 23, 'nominated', 1, NULL),
  (34, NULL, 19, 21, 'won', 1, NULL),
  (15, NULL, 3, 30, 'nominated', 1, NULL),
  (5, NULL, 16, 16, 'nominated', 1, NULL),
  (10, NULL, 14, 31, 'nominated', 1, NULL),
  (13, NULL, 4, 36, 'nominated', 1, NULL),
  (29, NULL, 6, 38, 'won', 1, NULL),
  (6, NULL, 5, 44, 'nominated', 1, NULL),
  (22, NULL, 3, 33, 'nominated', 1, NULL),
  (28, NULL, 19, 46, 'won', 1, NULL),
  (NULL, 43, 15, 38, 'nominated', 1, NULL),
  (NULL, 46, 15, 22, 'nominated', 1, NULL),
  (NULL, 48, 19, 43, 'nominated', 1, NULL),
  (NULL, 44, 16, 5, 'won', 1, NULL),
  (NULL, 41, 18, 9, 'nominated', 1, NULL),
  (NULL, 47, 1, 34, 'nominated', 1, NULL),
  (NULL, 45, 22, 10, 'nominated', 1, NULL),
  (NULL, 42, 7, 10, 'nominated', 1, NULL),
  (NULL, 44, 22, 3, 'won', 1, NULL),
  (NULL, 48, 10, 2, 'nominated', 1, NULL),
  (NULL, 46, 8, 27, 'nominated', 1, NULL),
  (NULL, 49, 13, 11, 'nominated', 1, NULL),
  (NULL, 46, 15, 11, 'nominated', 1, NULL),
  (NULL, 49, 9, 14, 'won', 1, NULL),
  (NULL, 43, 2, 50, 'nominated', 1, NULL),
  (NULL, 42, 24, 31, 'won', 1, NULL),
  (NULL, 41, 14, 29, 'nominated', 1, NULL),
  (NULL, 46, 24, 48, 'nominated', 1, NULL),
  (NULL, 46, 23, 41, 'nominated', 1, NULL),
  (NULL, 46, 24, 11, 'won', 1, NULL),
  (NULL, 41, 15, 3, 'nominated', 1, NULL),
  (NULL, 48, 23, 18, 'won', 1, NULL),
  (NULL, 49, 11, 36, 'won', 1, NULL),
  (NULL, 47, 10, 18, 'won', 1, NULL),
  (NULL, 42, 25, 3, 'nominated', 1, NULL);

-- entertainment_genre
INSERT INTO entertainment_genre
  (movie_id, episode_id, genre_id, created_by_id, updated_by_id)
VALUES
  (NULL, 71, 5, 1, NULL),
  (NULL, 72, 4, 1, NULL),
  (NULL, 64, 8, 1, NULL),
  (NULL, 61, 7, 1, NULL),
  (NULL, 72, 18, 1, NULL),
  (NULL, 62, 15, 1, NULL),
  (NULL, 64, 14, 1, NULL),
  (NULL, 64, 7, 1, NULL),
  (NULL, 74, 7, 1, NULL),
  (NULL, 75, 9, 1, NULL),
  (NULL, 61, 17, 1, NULL),
  (NULL, 71, 3, 1, NULL),
  (NULL, 71, 9, 1, NULL),
  (NULL, 74, 11, 1, NULL),
  (NULL, 63, 20, 1, NULL),
  (NULL, 59, 4, 1, NULL),
  (NULL, 61, 15, 1, NULL),
  (NULL, 66, 17, 1, NULL),
  (NULL, 64, 18, 1, NULL),
  (NULL, 60, 1, 1, NULL),
  (NULL, 71, 18, 1, NULL),
  (NULL, 69, 16, 1, NULL),
  (NULL, 65, 12, 1, NULL),
  (NULL, 75, 15, 1, NULL),
  (NULL, 72, 9, 1, NULL),
  (39, NULL, 10, 1, NULL),
  (10, NULL, 8, 1, NULL),
  (25, NULL, 18, 1, NULL),
  (31, NULL, 9, 1, NULL),
  (31, NULL, 5, 1, NULL),
  (27, NULL, 10, 1, NULL),
  (18, NULL, 19, 1, NULL),
  (27, NULL, 5, 1, NULL),
  (18, NULL, 18, 1, NULL),
  (8, NULL, 10, 1, NULL),
  (3, NULL, 12, 1, NULL),
  (9, NULL, 11, 1, NULL),
  (37, NULL, 20, 1, NULL),
  (13, NULL, 14, 1, NULL),
  (29, NULL, 2, 1, NULL),
  (20, NULL, 2, 1, NULL),
  (24, NULL, 1, 1, NULL),
  (33, NULL, 9, 1, NULL),
  (33, NULL, 15, 1, NULL),
  (18, NULL, 1, 1, NULL),
  (17, NULL, 15, 1, NULL),
  (7, NULL, 16, 1, NULL),
  (23, NULL, 16, 1, NULL),
  (27, NULL, 4, 1, NULL),
  (38, NULL, 13, 1, NULL);

-- entertainment_language
INSERT INTO entertainment_language
  (movie_id, episode_id, language_id, created_by_id, updated_by_id)
VALUES
  (30, NULL, 1, 1, NULL),
  (19, NULL, 2, 1, NULL),
  (37, NULL, 1, 1, NULL),
  (12, NULL, 1, 1, NULL),
  (7, NULL, 1, 1, NULL),
  (38, NULL, 2, 1, NULL),
  (14, NULL, 1, 1, NULL),
  (26, NULL, 2, 1, NULL),
  (7, NULL, 2, 1, NULL),
  (28, NULL, 1, 1, NULL),
  (28, NULL, 2, 1, NULL),
  (27, NULL, 2, 1, NULL),
  (15, NULL, 1, 1, NULL),
  (24, NULL, 1, 1, NULL),
  (30, NULL, 2, 1, NULL),
  (17, NULL, 1, 1, NULL),
  (39, NULL, 2, 1, NULL),
  (2, NULL, 1, 1, NULL),
  (1, NULL, 1, 1, NULL),
  (22, NULL, 1, 1, NULL),
  (23, NULL, 1, 1, NULL),
  (25, NULL, 2, 1, NULL),
  (10, NULL, 2, 1, NULL),
  (24, NULL, 2, 1, NULL),
  (25, NULL, 1, 1, NULL),
  (NULL, 75, 2, 1, NULL),
  (NULL, 72, 1, 1, NULL),
  (NULL, 73, 1, 1, NULL),
  (NULL, 67, 1, 1, NULL),
  (NULL, 72, 2, 1, NULL),
  (NULL, 62, 2, 1, NULL),
  (NULL, 61, 1, 1, NULL),
  (NULL, 66, 2, 1, NULL),
  (NULL, 71, 2, 1, NULL),
  (NULL, 74, 1, 1, NULL),
  (NULL, 64, 1, 1, NULL),
  (NULL, 61, 2, 1, NULL),
  (NULL, 65, 2, 1, NULL),
  (NULL, 66, 1, 1, NULL),
  (NULL, 68, 2, 1, NULL),
  (NULL, 65, 1, 1, NULL),
  (NULL, 69, 2, 1, NULL),
  (NULL, 63, 2, 1, NULL),
  (NULL, 73, 2, 1, NULL),
  (NULL, 69, 1, 1, NULL),
  (NULL, 63, 1, 1, NULL),
  (NULL, 68, 1, 1, NULL),
  (NULL, 70, 2, 1, NULL),
  (NULL, 71, 1, 1, NULL),
  (NULL, 60, 2, 1, NULL);

-- entertainment_aired
INSERT INTO entertainment_aired
  (movie_id, episode_id, aired_id, aired_date, created_by_id, updated_by_id)
VALUES
  (NULL, 68, 1, '2000-5-20', 1, NULL),
  (NULL, 70, 1, '2009-3-20', 1, NULL),
  (NULL, 75, 2, '1997-10-12', 1, NULL),
  (NULL, 59, 6, '2016-6-24', 1, NULL),
  (NULL, 72, 5, '2013-10-24', 1, NULL),
  (NULL, 62, 6, '2003-10-19', 1, NULL),
  (NULL, 71, 3, '2013-6-22', 1, NULL),
  (NULL, 66, 3, '1994-11-18', 1, NULL),
  (NULL, 75, 2, '2010-9-3', 1, NULL),
  (NULL, 75, 4, '2008-4-13', 1, NULL),
  (NULL, 70, 1, '2007-4-25', 1, NULL),
  (NULL, 64, 5, '2001-12-9', 1, NULL),
  (NULL, 71, 1, '2018-10-21', 1, NULL),
  (NULL, 68, 6, '1997-6-1', 1, NULL),
  (NULL, 67, 1, '2016-7-25', 1, NULL),
  (NULL, 61, 6, '1995-7-8', 1, NULL),
  (NULL, 70, 5, '2016-12-4', 1, NULL),
  (NULL, 70, 1, '2009-3-28', 1, NULL),
  (NULL, 70, 4, '2002-5-3', 1, NULL),
  (NULL, 65, 3, '1999-6-18', 1, NULL),
  (NULL, 74, 5, '1992-7-1', 1, NULL),
  (NULL, 60, 6, '1996-3-1', 1, NULL),
  (NULL, 75, 4, '2012-12-6', 1, NULL),
  (NULL, 70, 2, '1997-6-22', 1, NULL),
  (NULL, 69, 2, '2018-8-16', 1, NULL),
  (21, NULL, 3, '2016-6-11', 1, NULL),
  (40, NULL, 3, '2001-10-4', 1, NULL),
  (17, NULL, 6, '2015-4-19', 1, NULL),
  (5, NULL, 3, '2000-3-9', 1, NULL),
  (16, NULL, 2, '2017-1-23', 1, NULL),
  (25, NULL, 3, '1992-1-16', 1, NULL),
  (28, NULL, 3, '2008-5-13', 1, NULL),
  (9, NULL, 3, '1999-3-25', 1, NULL),
  (9, NULL, 1, '1995-4-28', 1, NULL),
  (34, NULL, 2, '2007-9-26', 1, NULL),
  (16, NULL, 5, '2002-10-3', 1, NULL),
  (8, NULL, 4, '2005-9-9', 1, NULL),
  (36, NULL, 5, '2014-11-28', 1, NULL),
  (21, NULL, 1, '2014-1-6', 1, NULL),
  (24, NULL, 5, '2012-8-27', 1, NULL),
  (15, NULL, 4, '2015-3-6', 1, NULL),
  (17, NULL, 5, '2010-12-24', 1, NULL),
  (33, NULL, 4, '1999-2-4', 1, NULL),
  (18, NULL, 6, '2000-1-1', 1, NULL),
  (24, NULL, 6, '2017-10-6', 1, NULL),
  (23, NULL, 1, '2017-11-1', 1, NULL),
  (40, NULL, 2, '2012-5-23', 1, NULL),
  (40, NULL, 6, '2008-5-16', 1, NULL),
  (11, NULL, 5, '2001-1-15', 1, NULL),
  (24, NULL, 3, '2003-11-20', 1, NULL);
