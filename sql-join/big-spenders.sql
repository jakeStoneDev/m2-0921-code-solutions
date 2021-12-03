select "firstName",
      "lastName"
  from "customers"
  join "payments" using ("customerId")
  ORDER BY "amount" DESC
  limit 10;
