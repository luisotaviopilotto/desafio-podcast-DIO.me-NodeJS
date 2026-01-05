import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodesServices";
import { serviceFilterEpisodes } from "../services/filterEpisodesServices";
import { ContentType } from "../utils/contentType";
import { PodcastTransferModel } from "../models/transferModel";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, {
    "Content-Type": ContentType.APPLICATION_JSON,
  });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, {
    "Content-Type": ContentType.APPLICATION_JSON,
  });
  res.write(JSON.stringify(content.body));

  res.end();
};
