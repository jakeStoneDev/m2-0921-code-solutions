select "firstName",
      "lastName"
  from "customers"
  join "payments" using ("customerId")
  limit 10;
