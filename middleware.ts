import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
  // const token = req.cookies.get("token");
  // const test = req.credentials;
  // console.log("test", test);
  // const test1 = req.url;
  // console.log("test", test1);
  // if (!token) {
  //   return NextResponse.redirect("/login");
  // }
  return NextResponse.next();
}
