import React from "react";
import { Composition, registerRoot } from "remotion";
import { VideoComposition, CompositionProps } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoWithCaptions"
        component={VideoComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoUrl: "",
          captions: [],
          style: "bottom-centered",
        }}
        schema={{
          videoUrl: { type: "string" },
          captions: { type: "array" },
          style: { type: "string" },
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
