import { supabase } from "@/utils/supabase";

export default defineEventHandler(async (event) => {
  const xx = await supabase.schema("public").from("Group").select("*");
  console.log({ xx });
  return xx;
});
