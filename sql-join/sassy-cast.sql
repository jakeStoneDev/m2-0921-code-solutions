select "title",
      "c"."filmId",
      "c"."actorId",
      "a"."firstName",
      "a"."lastName"
from "films"
join "castMembers" as "c" using ("filmId")
join "actors" as "a" using ("actorId")
where "title" = 'Jersey Sassy';
