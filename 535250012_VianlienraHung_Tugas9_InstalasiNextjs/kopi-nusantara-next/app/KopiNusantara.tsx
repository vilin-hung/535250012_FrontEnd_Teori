"use client";

import { useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function KopiNusantara({ children }: Props) {
  useEffect(() => {
    // Mobile navigation
    const menuButton = document.querySelector("#menu-btn");
    const navBar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => navBar?.classList.toggle("active");
    const closeMenu = () => navBar?.classList.remove("active");

    menuButton?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question");

    const handleFaqClick = (event: Event) => {
      const question = event.currentTarget as HTMLElement;
      const item = question.closest(".faq-item");
      const answer = question.nextElementSibling as HTMLElement | null;

      if (!item || !answer) return;

      const wasActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("active");
      });

      document.querySelectorAll<HTMLElement>(".faq-answer").forEach((faq) => {
        faq.style.display = "none";
      });

      if (!wasActive) {
        item.classList.add("active");
        answer.style.display = "block";
      }
    };

    faqQuestions.forEach((question) =>
      question.addEventListener("click", handleFaqClick)
    );

    // Back to top
    const backToTop = document.querySelector<HTMLElement>("#backToTop");

    const handleScroll = () => {
      if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
      }

      // Sticky category navigation
      const categoryNav = document.querySelector<HTMLElement>(".kategori-nav");

      if (categoryNav) {
        const stickyTop = parseFloat(getComputedStyle(categoryNav).top) || 0;
        const navTop = categoryNav.getBoundingClientRect().top;

        categoryNav.classList.toggle("stuck", navTop <= stickyTop + 1);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTop?.addEventListener("click", scrollToTop);
    handleScroll();

    // Menu search
    const searchInput = document.querySelector<HTMLInputElement>("#searchMenu");

    const handleSearch = () => {
      const keyword = searchInput?.value.toLowerCase().trim() ?? "";

      document.querySelectorAll(".kategori-menu").forEach((category) => {
        let visibleCount = 0;

        category.querySelectorAll<HTMLElement>(".card-produk").forEach((card) => {
          const name =
            card.querySelector("h4")?.textContent?.toLowerCase() ?? "";
          const matches = name.includes(keyword);

          card.style.display = matches ? "" : "none";

          if (matches) visibleCount++;
        });

        const title = category.querySelector<HTMLElement>(".judul-kategori");

        if (title) {
          title.style.display = visibleCount > 0 ? "" : "none";
        }
      });
    };

    const resetSearch = () => {
      if (searchInput) searchInput.value = "";

      document.querySelectorAll<HTMLElement>(".card-produk").forEach((card) => {
        card.style.display = "";
      });

      document.querySelectorAll<HTMLElement>(".judul-kategori").forEach((title) => {
        title.style.display = "";
      });
    };

    searchInput?.addEventListener("input", handleSearch);

    const categoryButtons = document.querySelectorAll(".kategori-btn");
    categoryButtons.forEach((button) =>
      button.addEventListener("click", resetSearch)
    );

    // Cleanup listeners when the component unmounts
    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      faqQuestions.forEach((question) =>
        question.removeEventListener("click", handleFaqClick)
      );
      window.removeEventListener("scroll", handleScroll);
      backToTop?.removeEventListener("click", scrollToTop);
      searchInput?.removeEventListener("input", handleSearch);
      categoryButtons.forEach((button) =>
        button.removeEventListener("click", resetSearch)
      );
    };
  }, []);

  return <>{children}</>;
}
