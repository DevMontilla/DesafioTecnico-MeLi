import { NextResponse, NextRequest } from "next/server";

import * as fs from "fs";
import * as path from "path";
import * as Papa from "papaparse";
import { Collection } from "@/list/interfaces/collection";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  try {
    const itemId = params.id;

    if (!itemId) throw new Response("ID is missing", { status: 404 });

    const csvFilePath = path.resolve(process.cwd(), "data.csv");
    const csvData = fs.readFileSync(csvFilePath, "utf-8");
    
    const parsedData = Papa.parse(csvData, { header: true });
    const data: Collection[] = parsedData.data as Collection[];

    const foundItem = data.find((item: Collection) => item.id === itemId);

    if (!foundItem) return new Response("Internal Server Error", { status: 500 });

    return NextResponse.json({ foundItem });
  } catch (error) {
    throw new Error('Internal Server Error')
  }
}
