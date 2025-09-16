import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    debugger;
    const token = request.cookies.get('next-auth.session-token')?.value || request.cookies.get('__Secure-next-auth.session-token')?.value
    if(!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
  matcher: [ '/', '/brands', '/cat', '/products', '/cart', '/checkout', '/orders', '/orderdetails/:path*'  ],
}