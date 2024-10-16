import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import path from "path";

export default function render(url, opts) {
  const statsFile = path.resolve(
    __dirname,
    "./dist/client/loadable-stats.json",
  );
  const extractor = new ChunkExtractor({ statsFile });

  const stream = renderToPipeableStream(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>,
    opts,
  );

  return stream;
}
