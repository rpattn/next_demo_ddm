"use server"

import { NextRequest } from "next/server";
import path from "path";
import fs from 'fs'


export async function GET(request: NextRequest) {
    // For example, fetch data from your DB here
    const resourcePath = request.nextUrl.searchParams.get('url')
    console.log(resourcePath)

    if(resourcePath) {
        const filePath = path.join(__dirname, '../../../../../_next/server/data', resourcePath)
        console.log("CUrrent dir: ", __dirname)
        console.log("Reading: ", filePath)
        const buffer = fs.readFileSync(filePath)
        //console.log(buffer.toString())
        return new Response(buffer.toString());
    }
  }