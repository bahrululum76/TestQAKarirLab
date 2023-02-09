describe("Verify Language on Wikipedia", () => {
  it("Verifies language with text value", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.contains("日本語").click();
    cy.request(
      "GET",
      "https://ja.wikipedia.org/api/rest_v1/page/summary/1995%E5%B9%B4"
    )
      .its("status")
      .should("equal", 200);
    cy.visit("https://www.wikipedia.org/");
    cy.contains("Français").click();
    cy.request(
      "GET",
      "https://fr.wikipedia.org/api/rest_v1/page/summary/France"
    )
      .its("status")
      .should("equal", 200);

    cy.visit("https://www.wikipedia.org/");
    cy.contains("Italiano").click();
    cy.request(
      "GET",
      "https://it.wikipedia.org/api/rest_v1/page/summary/Repubblica_Ceca"
    )
      .its("status")
      .should("equal", 200);

    cy.visit("https://www.wikipedia.org/");
    cy.contains("فارسی").click();
    cy.request(
      "GET",
      "https://fa.wikipedia.org/api/rest_v1/page/summary/%D9%88%DB%8C%DA%A9%DB%8C%E2%80%8C%D8%B3%D9%81%D8%B1"
    );

    cy.visit("https://www.wikipedia.org/");
    cy.contains("Polski").click();
    cy.request(
      "GET",
      "https://pl.wikipedia.org/api/rest_v1/page/summary/Wolna_tre%C5%9B%C4%87"
    );
    cy.visit("https://www.wikipedia.org/");
    cy.contains("中文").click();
    cy.wait(5000);
    cy.request(
      "GET",
      "https://zh.wikipedia.org/w/api.php?action=parse&format=json&page=Template%3AAdvancedSiteNotices%2Fajax&variant=zh&prop=text&maxage=3600&smaxage=3600"
    );
    cy.visit("https://www.wikipedia.org/");
    cy.contains("Español").click();
    cy.request(
      "GET",
      "https://es.wikipedia.org/api/rest_v1/page/summary/Un_mago_de_Terramar"
    );
    cy.visit("https://www.wikipedia.org/");
    cy.contains("Deutsch").click();
    cy.request(
      "GET",
      "https://de.wikipedia.org/api/rest_v1/page/summary/Charles_City_County"
    );
    cy.visit("https://www.wikipedia.org/");
    cy.contains("Русский").click();
    cy.request(
      "GET",
      "https://ru.wikipedia.org/api/rest_v1/page/summary/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F"
    );
  });
});
