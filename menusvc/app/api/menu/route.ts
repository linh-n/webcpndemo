import { NextResponse } from "next/server";
 
type MenuItem = {
  app: string;
  label: string;
  href: string;
  icon: string;
};

const ITEMS: MenuItem[] = [
  { app: "app1", label: 'App 1', href: '/', icon: 'home' },
  { app: "app2", label: 'App 2', href: 'http://localhost:3001', icon: 'info' },
];

export async function GET() {
  return NextResponse.json({ menuItems: ITEMS }, { status: 200 });
}