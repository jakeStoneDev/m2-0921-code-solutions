select count(*),
        "c"."name"
  from "castMembers"
join "filmCategory" using ("filmId")
join "categories" as "c" using ("categoryId")
join "actors" as "a" using ("actorId")
WHERE "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
group by "c"."name";
