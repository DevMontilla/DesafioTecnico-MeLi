import { NavbarDashboard } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDashboard />
      {children}
    </>
  );
}
