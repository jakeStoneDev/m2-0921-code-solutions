select "title",
      "c"."firstName",
      "c"."lastName"
from "films"
join "inventory" as "i" using ("filmId")
join "rentals" as "r" using ("inventoryId")
join "customers" as "c" using ("customerId")
where "title" = 'Magic Mallrats';
