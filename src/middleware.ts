import { NextRequest, NextResponse } from 'next/server'
import { publicRoutes } from './configs/routes'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // userIsAuthenticated = true até ser definido rota privda
  const userIsAuthenticated = true

  if (!userIsAuthenticated && publicRoutes.includes(req.nextUrl.pathname)) {
    const servicesHealth = new URL('/services-health', req.url)
    return NextResponse.redirect(servicesHealth)
  }

  return res
}

export const config = {
  matcher: ['/services-health/:path*'],
}
