import { Command } from "./deps.ts";
import { GetGhStarCount } from "./src/getRepo.ts";
async function main() {
  const { args } = await new Command()
    .arguments("<repoName>")
    .description("get repo url adn star count")
    .parse(Deno.args);
  console.log("star count = " + (await GetGhStarCount(args[0])));
}

main();
