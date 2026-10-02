import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using PaulEtheRealtor.com.",
};

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" />;
}
