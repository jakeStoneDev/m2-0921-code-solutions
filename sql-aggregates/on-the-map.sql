select "a"."name" as "countries",
       count("b".*) as "cities"
  from "countries" as "a"
  join "cities" as "b" using ("countryId")
 group by "a"."countryId";
