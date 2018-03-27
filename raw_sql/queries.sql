-- Create a crew_member
INSERT INTO crew_member
  (id, movie_id, episode_id, person_id, role, character_name, created_by_id, updated_by_id)
VALUES
  (51, 4, NULL, 7, 'Actor', 'Rock', NULL, 1, NULL),

-- Get a crew_member by id
SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE id = 51 AND deleted_at IS NULL;

-- Update a crew_member
UPDATE crew_member
SET character_name = 'Scissors'
WHERE id = 51 AND deleted_at IS NULL;

-- Delete a crew_member
UPDATE crew_member
SET deleted_at = NOW()
WHERE id = 51;

-- List all crew_members
SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE deleted_at IS NULL;

-- List all crew_members along with filters
SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE
  role LIKE '%or%' AND character_name LIKE '%er%' AND deleted_at IS NULL;

-- List all crew_members along with search
SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE
  LOWER(CONCAT(role, character_name)) LIKE '%or%' AND deleted_at IS NULL;

-- Pagination (Seek Method) e.g. with movie_id
-- last row's movie_id = 17 and id = 24
-- (c1, c2, c3, c4 ...) > (lr1, lr2, lr3, lr4 ...)
-- (id, movie_id) > (24, 17)

SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE movie_id >= 17 AND (movie_id > 17 OR id > 24) AND movie_id IS NOT NULL
ORDER BY movie_id, id
LIMIT 5;

-- Pagination (Seek Method) e.g. with role
-- last row's role = 'Actor' and id = 25
-- (c1, c2, c3, c4 ...) > (lr1, lr2, lr3, lr4 ...)
-- (id, role) > (25, 'Actor')

SELECT
  id, movie_id, episode_id, person_id, role, character_name
FROM crew_member
WHERE role >= 'Actor' AND (role > 'Actor' OR id > 25)
ORDER BY role, id
LIMIT 5;

-- Get a movie by id
SELECT
  m.id, b.title, b.rating, m.runtime, m.keywords, m.official_sites
FROM movie AS m
INNER JOIN base_entertainment AS b
ON b.id = m.id
WHERE b.id = 33 AND m.deleted_at IS NULL;

-- List all movies
SELECT
  m.id, b.title, b.rating, m.runtime, m.keywords, m.official_sites
FROM movie AS m
INNER JOIN base_entertainment AS b
ON b.id = m.id
WHERE m.deleted_at IS NULL;

-- Get a tv_series by id
SELECT
  t.id, b.title, b.rating, t.official_sites
FROM tv_series AS t
INNER JOIN base_entertainment AS b
ON b.id = t.id
WHERE b.id = 44 AND t.deleted_at IS NULL;

-- List all tv series
SELECT
  t.id, b.title, b.rating, t.official_sites
FROM tv_series AS t
INNER JOIN base_entertainment AS b
ON b.id = t.id
WHERE t.deleted_at IS NULL;

-- Get a season by id
SELECT
  s.id, s.tv_series_id, s.sequence, b.title, b.rating
FROM season AS s
INNER JOIN base_entertainment AS b
ON b.id = s.id
WHERE b.id = 55 AND s.deleted_at IS NULL;

-- List all seasons
SELECT
  s.id, s.tv_series_id, s.sequence, b.title, b.rating
FROM season AS s
INNER JOIN base_entertainment AS b
ON b.id = s.id
WHERE s.deleted_at IS NULL;

-- Get an episode by id
SELECT
  e.id, e.season_id, e.sequence, b.title, b.rating, e.runtime, e.keywords
FROM episode AS e
INNER JOIN base_entertainment AS b
ON b.id = e.id
WHERE b.id = 66 AND e.deleted_at IS NULL;

-- List all episodes
SELECT
  e.id, e.season_id, e.sequence, b.title, b.rating, e.runtime, e.keywords
FROM episode AS e
INNER JOIN base_entertainment AS b
ON b.id = e.id
WHERE e.deleted_at IS NULL;

-- List all persons given a language_id

-- List all movies given a language_id
SELECT
  movie_id, language_id
FROM entertainment_language
WHERE
  language_id = 1 AND movie_id IS NOT NULL AND entertainment_language.deleted_at IS NULL;

-- List all episodes given a language_id
SELECT
  episode_id, language_id
FROM entertainment_language
WHERE
  language_id = 1 AND episode_id IS NOT NULL AND entertainment_language.deleted_at IS NULL
ORDER BY episode_id;

-- List all seasons given a language_id
SELECT
  e.season_id, el.episode_id, el.language_id
FROM entertainment_language AS el
INNER JOIN episode AS e
ON e.id = el.episode_id
WHERE
  el.language_id = 1 AND el.episode_id IS NOT NULL AND el.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.id;

-- List all tv_series given a language_id
SELECT
  s.tv_series_id AS `tv series`, e.season_id AS season, el.episode_id AS episode, el.language_id AS language
FROM entertainment_language AS el
INNER JOIN episode AS e
ON e.id = el.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  el.language_id = 1 AND el.episode_id IS NOT NULL AND el.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.id;


-- List all persons given a set of language_ids

-- List all movies given a set of language_ids
SELECT
  movie_id, language_id
FROM entertainment_language
WHERE
  language_id IN (1, 2) AND movie_id IS NOT NULL AND entertainment_language.deleted_at IS NULL;

-- List all episodes given a set of language_ids
SELECT
  episode_id, language_id
FROM entertainment_language
WHERE
  language_id IN (1, 2) AND episode_id IS NOT NULL AND entertainment_language.deleted_at IS NULL;

-- List all seasons given a set of language_ids
SELECT
  e.season_id, el.episode_id, el.language_id
FROM entertainment_language AS el
INNER JOIN episode AS e
ON e.id = el.episode_id
WHERE
  el.language_id IN (1, 2) AND el.episode_id IS NOT NULL AND el.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all tv_series given a set of language_ids
SELECT
  s.tv_series_id AS `tv series`, e.season_id AS season, el.episode_id AS episode, el.language_id AS language
FROM entertainment_language AS el
INNER JOIN episode AS e
ON e.id = el.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  el.language_id IN (1, 2) AND el.episode_id IS NOT NULL AND el.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.id;

-- List all persons in the database given a role i.e. actor, director
SELECT
  person_id, character_name
FROM crew_member
WHERE role = 'Actor' AND crew_member.deleted_at IS NULL;

-- List all persons given a genre_id

-- List all movies given a genre_id
SELECT
  movie_id, genre_id
FROM entertainment_genre
WHERE
  genre_id = 1 AND movie_id IS NOT NULL AND entertainment_genre.deleted_at IS NULL;

-- List all episodes given a genre_id
SELECT
  episode_id, genre_id
FROM entertainment_genre
WHERE
  genre_id = 1 AND episode_id IS NOT NULL AND entertainment_genre.deleted_at IS NULL;

-- List all seasons given a genre_id
SELECT
  e.season_id, eg.episode_id, eg.genre_id
FROM entertainment_genre AS eg
INNER JOIN episode AS e
ON e.id = eg.episode_id
WHERE
  eg.genre_id = 7 AND eg.episode_id IS NOT NULL AND eg.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.id;

-- List all tv_series given a genre_id
SELECT
  s.tv_series_id AS `tv series`, e.season_id AS season, eg.episode_id AS episode, eg.genre_id AS genre
FROM entertainment_genre AS eg
INNER JOIN episode AS e
ON e.id = eg.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  eg.genre_id = 7 AND eg.episode_id IS NOT NULL AND eg.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.id;

-- List all crew_members of a movie
SELECT
  person_id, character_name
FROM crew_member
WHERE movie_id = 1 AND deleted_at IS NULL;

-- List all crew_members of an episode
SELECT
  person_id, character_name
FROM crew_member
WHERE episode_id = 1 AND deleted_at IS NULL;

-- List all crew_members of a season
SELECT
  e.id, e.season_id, e.sequence, e.runtime, c.person_id, c.role, c.character_name
FROM crew_member AS c
INNER JOIN episode AS e
ON e.id = c.episode_id
WHERE
  e.season_id = 51 AND c.episode_id IS NOT NULL AND c.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all crew_members of a tv_series
SELECT
  s.tv_series_id AS `tv series`, e.season_id AS season, e.id AS episode, c.person_id, c.role, c.character_name
FROM crew_member AS c
INNER JOIN episode AS e
ON e.id = c.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  s.tv_series_id = 48 AND c.episode_id IS NOT NULL AND c.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all movies given a person_id
SELECT
  movie_id
FROM crew_member
WHERE
  crew_member.person_id = 6 AND crew_member.deleted_at IS NULL AND crew_member.movie_id IS NOT NULL;

-- List all episodes given a person_id
SELECT
  episode_id
FROM crew_member
WHERE
  crew_member.person_id = 1 AND crew_member.deleted_at IS NULL AND crew_member.episode_id IS NULL;

-- List all seasons given a person_id
SELECT
  e.id, e.season_id, e.sequence, e.runtime, c.person_id, c.role, c.character_name
FROM crew_member AS c
INNER JOIN episode AS e
ON e.id = c.episode_id
WHERE
  c.person_id = 1 AND c.episode_id IS NOT NULL AND c.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all tv_series given a person_id
SELECT
  s.tv_series_id AS `tv series`, e.season_id AS season, e.id AS episode, c.person_id, c.role, c.character_name
FROM crew_member AS c
INNER JOIN episode AS e
ON e.id = c.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  c.person_id = 1 AND c.episode_id IS NOT NULL AND c.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all awards (won, nominated) given a person_id
SELECT
  award_id, status
FROM entertainment_award
WHERE person_id = 16 AND entertainment_award.deleted_at IS NULL;

-- List all awards (won, nominated) given a movie_id
SELECT
  award_id, status
FROM entertainment_award
WHERE movie_id = 7 AND entertainment_award.deleted_at IS NULL;

-- List all awards (won, nominated) given a tv_series_id
SELECT
  award_id, status
FROM entertainment_award
WHERE tv_series_id = 42 AND entertainment_award.deleted_at IS NULL;

-- List the person with the most wins given an award_id
SELECT
  person_id, COUNT(person_id) AS times
FROM entertainment_award
GROUP BY person_id
HAVING COUNT(person_id) = (
  SELECT MAX(times)
  FROM (
    SELECT
      person_id, count(person_id) AS times
    FROM entertainment_award AND entertainment_award.deleted_at IS NULL
    WHERE status = 'won'
    GROUP BY person_id
  ) AS temp
);

-- List the person with the most nominations given an award_id
SELECT person_id, COUNT(person_id) AS times
FROM entertainment_award
GROUP BY person_id
HAVING COUNT(person_id) = (
  SELECT MAX(times)
  FROM (
    SELECT
    person_id, count(person_id) AS times
    FROM entertainment_award
    WHERE status = 'nominated' AND entertainment_award.deleted_at IS NULL
    GROUP BY person_id
  ) AS temp
);

-- List all persons along with no. of times they won
SELECT
  person_id, count(person_id) AS times
FROM entertainment_award
WHERE status = 'won' AND entertainment_award.deleted_at IS NULL
GROUP BY person_id;

-- List all persons along with no. of times they got nominated
SELECT
  person_id, count(person_id) AS times
FROM entertainment_award
WHERE status = 'nominated' AND entertainment_award.deleted_at IS NULL
GROUP BY person_id;

-- List all persons who received an award a particular year
SELECT
  DISTINCT e.person_id
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.year = 2017 AND e.deleted_at IS NULL AND a.deleted_at IS NULL
ORDER BY e.person_id;

-- List all movies who received an award a particular year
SELECT
  DISTINCT e.movie_id
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.year = 2017 AND e.deleted_at IS NULL AND a.deleted_at IS NULL AND e.movie_id IS NOT NULL
ORDER BY e.movie_id;

-- List all tv_series who received an award a particular year
SELECT
  DISTINCT e.tv_series_id
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.year = 2017 AND e.deleted_at IS NULL AND a.deleted_at IS NULL AND e.tv_series_id IS NOT NULL
ORDER BY e.tv_series_id;

-- List all persons who were nominated in a particular award category
SELECT
  e.person_id, a.name, a.year, a.category
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.category = 'Best Director' AND e.status = 'nominated' AND e.deleted_at IS NULL AND a.deleted_at IS NULL
ORDER BY e.person_id;

-- List all movies who were nominated in a particular award category
SELECT
  e.movie_id, a.name, a.year, a.category
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.category = 'Best Director' AND e.status = 'nominated' AND e.deleted_at IS NULL AND a.deleted_at IS NULL AND e.movie_id IS NOT NULL
ORDER BY e.movie_id;

-- List all tv_series who were nominated in a particular award category
SELECT
  e.tv_series_id, a.name, a.year, a.category
FROM entertainment_award AS e
INNER JOIN award AS a
ON a.id = e.id
WHERE
  a.category = 'Best Director' AND e.status = 'nominated' AND e.deleted_at IS NULL AND a.deleted_at IS NULL AND e.tv_series_id IS NOT NULL
ORDER BY e.tv_series_id;

-- List all genres given a person_id
-- List all genres given a tv_series_id
SELECT
  s.tv_series_id AS `tv series`, s.id AS season, e.id AS episode, eg.genre_id AS genre
FROM entertainment_genre AS eg
INNER JOIN episode AS e
ON e.id = eg.episode_id
INNER JOIN season AS s
ON s.id = e.season_id
WHERE
  s.tv_series_id = 41 AND eg.episode_id IS NOT NULL AND eg.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY eg.genre_id;

-- List all genres given a season_id
SELECT
  DISTINCT eg.genre_id
FROM entertainment_genre AS eg
INNER JOIN episode AS e
ON e.id = eg.episode_id
WHERE
  e.season_id = 51 AND eg.episode_id IS NOT NULL AND eg.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY eg.genre_id;

-- List all genres given an episode_id
SELECT
  genre_id
FROM entertainment_genre
WHERE episode_id = 71 AND deleted_at IS NULL;

-- List all genres given a movie_id
SELECT
  genre_id
FROM entertainment_genre
WHERE movie_id = 31 AND deleted_at IS NULL;

-- List all languages given a person_id

-- List all movies [sort by ratings]
SELECT
  m.id, b.title, m.runtime, b.rating
FROM movie AS m
INNER JOIN base_entertainment AS b
ON b.id = m.id
WHERE m.deleted_at IS NULL
ORDER BY rating;

-- List all episodes [sort by ratings]
SELECT
  e.id, b.title, e.sequence, e.runtime, b.rating
FROM episode AS e
INNER JOIN base_entertainment AS b
ON b.id = e.id
WHERE e.deleted_at IS NULL
ORDER BY rating;

-- List all seasons [sort by ratings]
SELECT
  s.id, b.title, s.sequence, b.rating
FROM season AS s
INNER JOIN base_entertainment AS b
ON b.id = s.id
WHERE s.deleted_at IS NULL
ORDER BY rating;

-- List all tv_series [sort by ratings]
SELECT
  t.id, b.title, t.official_sites, b.rating
FROM tv_series AS t
INNER JOIN base_entertainment AS b
ON b.id = t.id
WHERE t.deleted_at IS NULL
ORDER BY rating;

-- List all movies given a range of ratings(min, max)
SELECT
  m.id, b.title, m.runtime, b.rating
FROM movie AS m
INNER JOIN base_entertainment AS b
ON b.id = m.id
WHERE m.deleted_at IS NULL AND rating BETWEEN 6.5 AND 8.0
ORDER BY rating;

-- List all episodes given a range of ratings(min, max)
SELECT
  e.id, b.title, e.sequence, e.runtime, b.rating
FROM episode AS e
INNER JOIN base_entertainment AS b
ON b.id = e.id
WHERE e.deleted_at IS NULL AND rating BETWEEN 6.5 AND 8.0
ORDER BY rating;

-- List all seasons given a range of ratings(min, max)
SELECT
  s.id, b.title, s.sequence, b.rating
FROM season AS s
INNER JOIN base_entertainment AS b
ON b.id = s.id
WHERE s.deleted_at IS NULL AND rating BETWEEN 6.5 AND 8.0
ORDER BY rating;

-- List all tv_series given a range of ratings(min, max)
SELECT
  t.id, b.title, t.official_sites, b.rating
FROM tv_series AS t
INNER JOIN base_entertainment AS b
ON b.id = t.id
WHERE t.deleted_at IS NULL AND rating BETWEEN 6.5 AND 8.0
ORDER BY rating;

-- List all episodes of a season [sort by sequence]
SELECT
  id, sequence, runtime
FROM episode
WHERE season_id = 51
ORDER BY sequence;

-- List all seasons of a tv_series [sort by sequence]
SELECT
  id, sequence
FROM season
WHERE tv_series_id = 41
ORDER BY sequence;

-- List all movies that have aired on internet
SELECT
  e.movie_id, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  a.venue = 'Internet' AND e.movie_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all episodes that have aired on internet
SELECT
  e.episode_id, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  a.venue = 'Internet' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all seasons that have aired on internet
SELECT
  DISTINCT ep.season_id AS season, e.episode_id AS episode
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
WHERE
  a.venue = 'Internet' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY season;

-- List all tv_series that have aired on internet

-- List all movies that have aired on festival
SELECT
  DISTINCT e.movie_id
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  venue LIKE '%Festival%' AND e.movie_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.movie_id;

-- List all episodes that have aired on festival
SELECT
  DISTINCT e.episode_id
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  a.venue LIKE '%Festival%' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.episode_id;

-- List all seasons that have aired on festival
SELECT
  DISTINCT ep.season_id AS season, e.episode_id AS episode
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
WHERE
  a.venue LIKE '%Festival%' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY season;

-- List all tv_series that have aired on festival
SELECT
  s.tv_series_id AS `tv series`, ep.season_id AS season, e.episode_id AS episode, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
INNER JOIN season AS s
ON s.id = ep.season_id
WHERE
  a.venue LIKE '%Festival%' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY ep.season_id;

-- List all movies that have aired in a particular country
SELECT
  e.movie_id, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  a.country = 'India' AND e.movie_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all episodes that have aired in a particular country
SELECT
  e.episode_id, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  a.country = 'India' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL;

-- List all seasons that have aired in a particular country
SELECT
  ep.season_id AS season, e.episode_id AS episode, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
WHERE
  a.country = 'India' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY ep.season_id;

-- List all tv_series that have aired in a particular country
SELECT
  s.tv_series_id AS `tv series`, ep.season_id AS season, e.episode_id AS episode, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
INNER JOIN season AS s
ON s.id = ep.season_id
WHERE
  a.country = 'India' AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY ep.season_id;

-- List all movies that have aired in a particular year
SELECT
  DISTINCT e.movie_id
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  year(e.aired_date) = 2017 AND e.movie_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.movie_id;

-- List all episodes that have aired in a particular year
SELECT
  DISTINCT e.episode_id
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
WHERE
  year(e.aired_date) = 2016 AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY e.episode_id;

-- List all seasons that have aired in a particular year
SELECT
  ep.season_id AS season, e.episode_id AS episode, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
WHERE
  year(e.aired_date) = 2016 AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY ep.season_id;

-- List all tv_series that have aired in a particular year
SELECT
  s.tv_series_id AS `tv series`, ep.season_id AS season, e.episode_id AS episode, e.aired_date, a.country, a.venue
FROM entertainment_aired AS e
INNER JOIN aired AS a
ON a.id = e.aired_id
INNER JOIN episode AS ep
ON ep.id = e.episode_id
INNER JOIN season AS s
ON s.id = ep.season_id
WHERE
  year(e.aired_date) = 2016 AND e.episode_id IS NOT NULL AND a.deleted_at IS NULL AND e.deleted_at IS NULL
ORDER BY ep.season_id;

-- List all the episodes along with correspoding seasons of given a tv_series_id
SELECT
  s.tv_series_id AS `tv series`, s.id AS season, e.id AS episode,
  s.sequence AS `season no.` , e.sequence AS `episode no.`, e.runtime
FROM season AS s
INNER JOIN episode AS e
ON s.id = e.season_id
WHERE s.tv_series_id = 41 AND s.deleted_at IS NULL AND e.deleted_at IS NULL;


-- accessorId = 1, accessorGroupIds = [4, 5]
--
-- Trick lies in
--
-- role              who                 remark
-- =======           =======             =======
-- owner             -                   [accessorId]
-- owner_group       -                   [accessorGroupIds]
-- group             groupId
-- user              userId


-- For Objects
SELECT
  DISTINCT action.id, action.name
FROM action
INNER JOIN user
ON user.id = 1
INNER JOIN implemented_action
ON implemented_action.action_id = action.id and implemented_action.table_name = 'user'
LEFT JOIN privilege
ON
  privilege.related_table = 'user' AND
  privilege.action_id = action.id AND
  privilege.type = 'global'
WHERE
  action.applies_to_object = 1 AND
  privilege.deleted_at IS NULL AND
  (
    (
      privilege.role = 'owner' AND
      user.owned_by_id = 1
    )
    OR
    (
      privilege.role = "owner_group" AND
      user.owned_by_group_id IN (4, 5)
    )
    OR
    (
      privilege.role = "group" AND
      privilege.who IN (4, 5)
    )
    OR
    (
      privilege.role = "user" AND
      privilege.who = 1
    )
  );

-- For Tables

SELECT
  DISTINCT action.id, action.name
FROM action
LEFT JOIN privilege
ON
  privilege.action_id = action.id AND
  privilege.related_table = 'user' AND
  privilege.type = 'table'
WHERE
  action.applies_to_object = 0 AND
  privilege.deleted_at IS NULL AND
  (
    (
      privilege.role = "user" AND
      privilege.who = 1
    )
    OR
    (
      privilege.role = "group" AND
      privilege.who IN (4, 5)
    )
  );
