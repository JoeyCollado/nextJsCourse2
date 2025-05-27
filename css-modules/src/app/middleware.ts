import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){ //take request as perimeter
    return NextResponse.redirect(new URL("/register", request.url)); //redirect to register page
}

export const config = {
    matchers: "/dashboard", //use the middleware function to dashboard page
};