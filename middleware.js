import {  NextResponse } from 'next/server'

export function middleware() {  
  console.log('next js');
  return NextResponse.next()
}

export const config = {
  matcher: ['/about/:path*', '/another/:path*'],
}