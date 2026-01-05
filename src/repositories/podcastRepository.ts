import { readFile } from "fs/promises";
import path from "path";
import { PodcastModel } from "../models/podcastModel";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = await readFile(pathData, language);
  let jsonFile: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
