const supabase = require("./config/supabase");

async function test() {
  const { data, error } = await supabase
    .from("projects")
    .select("*");

  console.log("ERROR =", error);
  console.log("DATA =", data);
}

test();