import { createClient } from "@/lib/server";

export async function getUserData() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }

  return data?.user || null;
}
