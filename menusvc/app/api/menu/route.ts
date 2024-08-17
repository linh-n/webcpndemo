import { NextResponse } from "next/server";
 
type MenuItem = {
  label: string;
  url: string;
  icon: string;
};

const ITEMS: MenuItem[] = [
  { label: 'App 1', url: '/', icon: 'home' },
  { label: 'App 2', url: 'http://localhost:3001', icon: 'info' },
];

export async function GET() {
  return NextResponse.json({ menuItems: ITEMS }, { status: 200 });
}