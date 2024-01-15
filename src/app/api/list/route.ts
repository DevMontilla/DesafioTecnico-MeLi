import { NextRequest, NextResponse } from "next/server";

import * as fs from "fs";
import * as path from "path";
import * as Papa from "papaparse";
import { Collection } from "@/list/interfaces/collection";

export async function GET(request: NextRequest) {
  try {
    const csvFilePath = path.resolve(process.cwd(), "data.csv");
    const csvData = fs.readFileSync(csvFilePath, "utf-8");

    const parsedData = Papa.parse(csvData, { header: true });
    const allData: Collection[] = parsedData.data as Collection[];

    const queryParam = request.nextUrl.searchParams.get("type");

    const typesToFilter = queryParam ? queryParam.split(",") : [];
    const data = filterDataByType(allData, typesToFilter);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json('Internal Server Error',{status: 500})
  }
}

const filterDataByType = (data: Collection[], types: string[]) => {
  if (!types || types.length === 0) {
    return data;
  }
  return data.filter((item: Collection) => types.includes(item.type));
};
