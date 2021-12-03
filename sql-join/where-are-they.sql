select "line1",
      "c"."name",
      "district",
      "C"."name"
from "addresses"
join "cities" as "c" using ("cityId")
join "countries" as "C" using ("countryId");
