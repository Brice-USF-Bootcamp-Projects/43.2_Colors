// src/app/page.js


import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/colors"); // Redirect from `/` to `/colors`
}
