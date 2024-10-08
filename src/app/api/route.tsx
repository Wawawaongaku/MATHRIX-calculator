import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";


const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
    const input = await req.json();
    
    if (req.method === "POST") {
        if (input) {
            try {
                const command = `python assets/calc.py ${input.formular}`;
                const { stdout, stderr } = await execPromise(command);

                if (stderr) {
                    console.error(`Error: ${stderr}`);
                    return NextResponse.json({ error: stderr }, { status: 500 });
                }
                return NextResponse.json({ body: stdout }, { status: 200 });
            } catch (error) {
                console.error("Execution failed:", error);
                return NextResponse.json({ error: "Execution failed" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ error: "No input provided" }, { status: 400 });
        }
    }
}
