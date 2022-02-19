import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from ".";
import { rest } from "msw";
import { server } from "src/mocks/server";

// 여러 테스트케이스를 갖고 있으며, 하나의 테스트만 재시작하고 싶을 경우 'only' 키워드를 사용한다.
test("handles error for scoops and toppings routes", async () => {
  // reset handlers: 런타임 환경에서 추가될 수 있는 모든 요청 핸들러들을 제거한다.(현재는 error를 테스트하기 위해서임)
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});

//테스트를 건너뛰는 또다른 방법은  skip하고 싶은 테스트 뒤에 'skip' 키워드를 붙인다.

// test.skip("not activate this text", () => {
//   console.log("aa");
// });
