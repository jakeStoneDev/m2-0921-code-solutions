SELECT "c"."firstName",
      "c"."lastName",
      SUM("amount")
FROM "payments"
JOIN "customers" as "c" using ("customerId")
GROUP BY "customerId"
ORDER BY "sum" DESC
