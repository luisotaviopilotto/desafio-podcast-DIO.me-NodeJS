import { repositoryPodcast } from "../repositories/podcastRepository";
import { PodcastTransferModel } from "../models/transferModel";
import { StatusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const querytring = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(querytring);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
