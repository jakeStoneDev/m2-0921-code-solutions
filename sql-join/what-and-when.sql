select "releaseYear",
      "C"."name",
      "title"
from "films"
join "filmCategory" as "c" using ("filmId")
join "categories" as "C" using ("categoryId")
where "title" = 'Boogie Amelie';
