const m = require("../dist/hologo.js");

describe("Test Date: 04/18/2018 12:00 PM", () => {
  const testDate = "April 18, 2018 12:00:00";

  it("should return 0 seconds", () => {
    const datestamp = "04-20-2022";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("0 seconds");
  });

  it("should return 45 seconds", () => {
    const datestamp = "April 18, 2018 11:59:15";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("45 seconds");
  });

  it("should return 1 minute", () => {
    const datestamp = "April 18, 2018 11:59:00";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 minute");
  });

  it("should return 15 minutes", () => {
    const datestamp = "April 18, 2018 11:45:00";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("15 minutes");
  });

  it("should return 1 hour", () => {
    const datestamp = "April 18, 2018 11:00:00";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 hour");
  });

  it("should return 2 hours", () => {
    const datestamp = "Wed, 18 April 2018 10:00:00";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("2 hours");
  });

  it("should return 1 day", () => {
    const datestamp = "2018/04/17 12:00:00";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 day");
  });

  it("should return 14 days", () => {
    const millisec = 1522800000000; // 04/04/2018 12:00:00 AM
    const res = m.hologo(millisec, testDate);
    expect(res).toBe("14 days");
  });

  it("should return 1 month", () => {
    const datestamp = "03/14/2018";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 month");
  });

  it("should return 11 months", () => {
    const datestamp = "2017-05-18";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("11 months");
  });

  it("should return 1 year", () => {
    const datestamp = "2017/04/18";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 year");
  });

  it("should return 1 year, 1 month", () => {
    const datestamp = "2017/03/18";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 year, 1 month");
  });

  it("should return 1 year, 2 months", () => {
    const datestamp = "2017/02/18";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("1 year, 2 months");
  });

  it("should return 4 years", () => {
    const datestamp = "04/20/2014";
    const res = m.hologo(datestamp, testDate);
    expect(res).toBe("4 years");
  });

  it("should return 6 year, 3 months", () => {
    const dateStamp = "2012/02/14";
    const res = m.hologo(dateStamp, testDate);
    expect(res).toBe("6 years, 3 months");
  });
});

