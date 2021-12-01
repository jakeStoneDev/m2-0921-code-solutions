insert into "actors" ("firstName", "lastName")
values ('Keanu', 'Reeves'),
        ('Bryan', 'Cranston')
returning *;
