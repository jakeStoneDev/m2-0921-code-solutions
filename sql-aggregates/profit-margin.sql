SELECT "f"."title",
      count("rentalId") AS "timesRented",
      sum("f"."rentalRate") AS "Profit"
FROM "rentals"
JOIN "inventory" AS "i" USING ("inventoryId")
JOIN "films" AS "f" USING ("filmId")
GROUP BY "f"."title"
ORDER BY "Profit" DESC
LIMIT 5;
