import { PlayProvider, withSharedState } from "@playhtml/react";
// @ts-expect-error - no types
import Switch from "react-ios-switch";

export function TogglesWrapper() {
  return (
    <PlayProvider
      initOptions={{
        room: "toggles",
      }}
    >
      <Toggles />
    </PlayProvider>
  );
}

interface TogglesProps {}

export const Toggles = withSharedState(
  { defaultData: { lastOn: -1 } },
  ({ data, setData }, props: TogglesProps) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>
            <Switch
              checked={i <= data.lastOn}
              disabled={i > data.lastOn + 1}
              onChange={(checked: boolean) => {
                setData({ lastOn: checked ? i : i - 1 });
              }}
              onColor="#0078d4"
            />
          </div>
        ))}
      </div>
    );
  }
);
