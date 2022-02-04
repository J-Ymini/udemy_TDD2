import { fn } from "./mock_practice";

test("이라는 이름을 출력하는 함수야", (done) => {
  const callback = (name: string) => {
    expect(name).toBe("yongmin");
    done();
  };

  fn.getName(callback);
});
