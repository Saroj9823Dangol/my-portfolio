import type { Metadata } from "next";
import RegexTesterClient from "./regex-tester-client";

export const metadata: Metadata = {
  title: "Regex Tester Online - Free Regular Expression Tester",
  description: "Free online regex tester. Test regular expressions with live match highlighting, capture groups, and flags. 100% client-side.",
  keywords: ["regex tester", "regular expression tester", "regex online", "test regex"],
};

export default function RegexTesterPage() {
  return <RegexTesterClient />;
}