import { passOnSuccess, mockapi, json } from "@azure-tools/cadl-ranch-api";
import { ScenarioMockApi } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};

Scenarios.Versioning_ReturnTypeChangedFrom_test = passOnSuccess(
  mockapi.post("/versioning/return-type-changed-from/api-version:v2/test", (req) => {
    req.expect.bodyEquals("test");
    return {
      status: 200,
      body: json("test"),
    };
  }),
);

Scenarios.Versioning_ReturnTypeChangedFrom_API_Version_V2_Test = passOnSuccess({
  uri: `/versioning/return-type-changed-from/api-version:v2/test`,
  mockMethods: [
    {
      method: `post`,
      request: {
        body: "test",
        config: {
          headers: {
            "Content-Type": "text/plain",
          },
        },
      },
      response: {
        status: 200,
        data: "test",
      },
    },
  ],
});
