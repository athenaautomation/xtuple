select xt.create_view('xt.aropeninfo', $$

  select aropen.*, 0 as balance, 0 as tax_total from aropen;

$$,false);

create or replace rule "_INSERT" as on insert to xt.aropeninfo do instead nothing;
--create or replace rule "_UPDATE" as on delete to xt.aropeninfo do instead nothing;
create or replace rule "_DELETE" as on delete to xt.aropeninfo do instead nothing;

