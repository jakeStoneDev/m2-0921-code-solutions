select count(*),
        "c"."name"
  from "castMembers"
join "filmCategory" using ("filmId")
join "categories" as "c" using ("categoryId")
where "actorId" = '178'
group by "c"."name";
