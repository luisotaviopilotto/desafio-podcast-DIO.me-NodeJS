import { PodcastTransferModel } from "../models/transferModel";
import { repositoryPodcast } from "../repositories/podcastRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast();

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
