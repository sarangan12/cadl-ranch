import { getPackageJson, getCommit } from "../utils/misc-utils.js";
import { ScenariosMetadata } from "@azure-tools/cadl-ranch-coverage-sdk";

export async function getScenarioMetadata(scenariosPath: string): Promise<ScenariosMetadata> {
  const pkg = await getPackageJson(scenariosPath);
  return {
    commit: getCommit(scenariosPath),
    version: pkg?.version ?? "?",
  };
}
