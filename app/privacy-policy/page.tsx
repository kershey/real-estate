import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PaulEtheRealtor.com handles the information you share.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" />;
}
