select "line1",
      "a"."name",
      "district",
      "b"."name"
from "addresses"
join "cities" as "a" using ("cityId")
join "countries" as "b" using ("countryId");
