-- Do not check foreign key constraints
-- https://www.xaprb.com/blog/2006/08/16/how-to-build-role-based-access-control-in-sql/
-- https://www.xaprb.com/blog/2006/08/18/role-based-access-control-in-sql-part-2/
-- @TODO: add parent guides for a movie, episode

SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS imdb_v2;
CREATE DATABASE imdb_v2;
USE imdb_v2;

DROP TABLE IF EXISTS entity;
CREATE TABLE entity (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS action;
CREATE TABLE action (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  description VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  applies_to_object TINYINT NOT NULL DEFAULT 1,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(name),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS implemented_action;
CREATE TABLE implemented_action (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  action_id INT UNSIGNED NOT NULL,
  table_name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  description VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (action_id) REFERENCES action(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS privilege;
CREATE TABLE privilege (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  description VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  role VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  who INT UNSIGNED NULL,
  action_id INT UNSIGNED NOT NULL,
  type ENUM('object', 'table', 'global'),
  related_table VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (who) REFERENCES entity(id),
  FOREIGN KEY (action_id) REFERENCES action(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS groups;
CREATE TABLE groups (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  description VARCHAR(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES entity(id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS group_membership;
CREATE TABLE group_membership (
  id INT NOT NULL AUTO_INCREMENT,
  group_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (group_id) REFERENCES groups(id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT UNSIGNED NOT NULL,
  first_name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  last_name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  email VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  password BINARY(60) NULL,
  reset_password_token VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  reset_password_expires_at TIMESTAMP NULL,
  is_active BOOLEAN NOT NULL DEFAULT 1,

  owned_by_id INT UNSIGNED NULL,
  owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(email),
  FOREIGN KEY (id) REFERENCES entity(id),
  FOREIGN KEY (owned_by_id) REFERENCES user(id),
  FOREIGN KEY (owned_by_group_id) REFERENCES groups(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS base_entertainment;
CREATE TABLE base_entertainment (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  plot VARCHAR(800) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  image_url VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  rating DOUBLE PRECISION(3, 1) DEFAULT NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS movie;
CREATE TABLE movie (
  id INT UNSIGNED NOT NULL,
  runtime INT UNSIGNED NULL,
  keywords JSON NULL,
  official_sites JSON NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES base_entertainment(id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS tv_series;
CREATE TABLE tv_series (
  id INT UNSIGNED NOT NULL,
  official_sites JSON NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES base_entertainment(id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS season;
CREATE TABLE season (
  id INT UNSIGNED NOT NULL,
  tv_series_id INT UNSIGNED NULL,
  sequence INT UNSIGNED NOT NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES base_entertainment(id),
  FOREIGN KEY (tv_series_id) REFERENCES tv_series(id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS episode;
CREATE TABLE episode (
  id INT UNSIGNED NOT NULL,
  season_id INT UNSIGNED NOT NULL,
  sequence INT UNSIGNED NOT NULL,
  runtime INT UNSIGNED NULL,
  keywords JSON NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(season_id, sequence),
  FOREIGN KEY (id) REFERENCES base_entertainment(id),
  FOREIGN KEY (season_id) REFERENCES season(id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS language;
CREATE TABLE language (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(name),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS genre;
CREATE TABLE genre (
  id INT UNSIGNED NOT NULL,
  name VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(name),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS aired;
CREATE TABLE aired (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  country ENUM('India', 'USA', 'UK', 'Poland', 'Australia', 'Germany', 'France', 'Norway', 'Canada') NOT NULL,
  -- festival, internet
  venue VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(country, venue),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS person;
CREATE TABLE person (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  last_name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  bio VARCHAR(800) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  born_at DATE NULL,
  gender ENUM('M','F'),
  image_url VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS award;
CREATE TABLE award (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  year YEAR NOT NULL,
  category ENUM(
    'Best Film',
    'Best Director',
    'Best Male Actor',
    'Best Female Actor',
    'Best Male Supporting Actor',
    'Best Female Supporting Actor',
    'Best Original Screenplay',
    'Best Adapted Screenplay',
    'Best Production Design',
    'Best Cinematography',
    'Best Costume Design',
    'Best Film Editing',
    'Best Visual Effects',
    'Best Original Score'
  ),

  -- owned_by_id INT UNSIGNED NULL,
  -- owned_by_group_id INT UNSIGNED NULL,
  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(name, year, category),
  -- FOREIGN KEY (owned_by_id) REFERENCES user(id),
  -- FOREIGN KEY (owned_by_group_id) REFERENCES group(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS crew_member;
CREATE TABLE crew_member (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- episode and movie
  movie_id INT UNSIGNED NULL,
  episode_id INT UNSIGNED NULL,
  person_id INT UNSIGNED NOT NULL,
  role ENUM(
    'Actor',
    'Director',
    'Producer',
    'Writer',
    'Soundtrack',
    'Cinematographer',
    'Make-up Artist',
    'Stunt Coordinator'
  ) NOT NULL,
  -- only valid when role is an actor
  character_name VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (episode_id) REFERENCES episode(id),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS entertainment_award;
CREATE TABLE entertainment_award(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- tv series and movie
  movie_id INT UNSIGNED NULL,
  tv_series_id INT UNSIGNED NULL,
  person_id INT UNSIGNED NOT NULL,
  award_id INT UNSIGNED NULL,
  status ENUM('won', 'nominated') NOT NULL DEFAULT 'nominated',

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(person_id, award_id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (tv_series_id) REFERENCES tv_series(id),
  FOREIGN KEY (award_id) REFERENCES award(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS entertainment_aired;
CREATE TABLE entertainment_aired (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- episode and movie
  movie_id INT UNSIGNED NULL,
  episode_id INT UNSIGNED NULL,
  aired_id INT UNSIGNED NULL,
  aired_date DATE NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (episode_id) REFERENCES episode(id),
  FOREIGN KEY (aired_id) REFERENCES aired(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS entertainment_genre;
CREATE TABLE entertainment_genre (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- episode and movie
  movie_id INT UNSIGNED NULL,
  episode_id INT UNSIGNED NULL,
  genre_id INT UNSIGNED NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(movie_id, genre_id),
  UNIQUE(episode_id, genre_id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (episode_id) REFERENCES episode(id),
  FOREIGN KEY (genre_id) REFERENCES genre(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS entertainment_language;
CREATE TABLE entertainment_language (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- episode and movie
  movie_id INT UNSIGNED NULL,
  episode_id INT UNSIGNED NULL,
  language_id INT UNSIGNED NULL,

  created_by_id INT UNSIGNED NOT NULL,
  updated_by_id INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  deleted_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE(movie_id, language_id),
  UNIQUE(episode_id, language_id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (episode_id) REFERENCES episode(id),
  FOREIGN KEY (language_id) REFERENCES language(id),
  FOREIGN KEY (created_by_id) REFERENCES user(id),
  FOREIGN KEY (updated_by_id) REFERENCES user(id)
);
