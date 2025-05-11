import { redirect } from "next/navigation";

export default function NonExistingPage() {
  redirect("/not-found");
}