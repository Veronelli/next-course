import { IncomingMessage, ServerResponse } from "http";
import DB from "@database"
import type { NextApiRequest, NextApiResponse } from "next";

export default async function allAvos(
    request: NextApiRequest,
    response: NextApiRequest){
        const idAvo = request.query.id;

        const db = new DB();
        const entryAvo = await db.getById(idAvo as string);
        response.status(200).json({ entryAvo});
}
