begin;

drop table if exists cities cascade;

create table cities (
    id serial ,
     name varchar(100) not null,
     country varchar(100)
);
insert into cities(name ,country) values 
('hebron','palestine'),
('cairo','egypt'),
('amman','jordan');


commit;

