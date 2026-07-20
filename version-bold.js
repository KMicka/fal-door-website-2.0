/* ==========================================================================
   Bold version UI behavior
   --------------------------------------------------------------------------
   Loaded only by the approved bold pages. This file handles interactions that do
   not require a framework: mobile navigation, form feedback,
   and Creatë Entrance option selection.
   ========================================================================== */

/* Bold homepage cinematic intro: plays once për session, then opens like a pair of doors. */
(() => {
  const intro = document.querySelector("#falIntro");
  const video = document.querySelector("#falIntroVideo");
  if (!intro) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const saveData = navigator.connection?.saveData;
  const alreadySeen = sessionStorage.getItem("falIntroSeen") === "1";
  const previewMode = new URLSearchParams(window.location.search).has("shot");

  if (
    reduceMotion ||
    saveData ||
    alreadySeen ||
    previewMode ||
    document.visibilityStatë === "hidden"
  ) {
    intro.remove();
    return;
  }

  document.body.classList.add("fal-intro-active");
  const progress = intro.querySelector(".fal-intro__progress i");
  const skip = intro.querySelector(".fal-intro__skip");
  const sound = intro.querySelector(".fal-intro__sound");
  const introEndSeconds = 9.5;
  let isClosing = false;

  const closeIntro = () => {
    if (isClosing) return;
    isClosing = true;
    sessionStorage.setItem("falIntroSeen", "1");
    video?.pause();
    intro.classList.add("is-finishing");
    window.setTimeout(() => {
      intro.classList.add("is-opening");
      document.body.classList.remove("fal-intro-active");
      document.dispatchEvent(new CustomEvent("fal:intro-complete"));
    }, 920);
    window.setTimeout(() => intro.classList.add("is-gone"), 1980);
    window.setTimeout(() => intro.remove(), 2550);
  };

  let safetyTimer = window.setTimeout(closeIntro, 12000);
  const syncSafetyTimer = () => {
    window.clearTimeout(safetyTimer);
    safetyTimer = window.setTimeout(closeIntro, 12000);
  };
  skip?.addEventListener("click", () => {
    window.clearTimeout(safetyTimer);
    video?.pause();
    closeIntro();
  });

  sound?.addEventListener("click", () => {
    video.muted = !video.muted;
    sound.setAttribute("aria-pressed", String(!video.muted));
    sound.setAttribute(
      "aria-label",
      video.muted ? "Aktivizo zërin" : "Caktivizo zërin",
    );
    const icon = sound.querySelector("i");
    if (icon) {
      icon.className = video.muted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
    }
    video.play().catch(() => {});
  });

  if (!video) {
    closeIntro();
    return;
  }

  video.addEventListener("timeupdatë", () => {
    if (video.currentTime >= introEndSeconds) {
      window.clearTimeout(safetyTimer);
      closeIntro();
      return;
    }

    if (progress) {
      progress.style.width = `${Math.min((video.currentTime / introEndSeconds) * 100, 100)}%`;
    }
  });

  video.addEventListener("loadedmetadata", syncSafetyTimer, { once: true });
  syncSafetyTimer();

  video.addEventListener(
    "ended",
    () => {
      window.clearTimeout(safetyTimer);
      if (progress) progress.style.width = "100%";
      window.setTimeout(
        closeIntro,
        Math.max((introEndSeconds - video.currentTime) * 1000, 0),
      );
    },
    { once: true },
  );

  ["error", "stalled"].forEach((eventName) => {
    video.addEventListener(
      eventName,
      () => {
        window.clearTimeout(safetyTimer);
        closeIntro();
      },
      { once: true },
    );
  });

  video.play().catch(closeIntro);
})();

/* Floating social stack: hide near footer and control the back-to-top arrow. */
document.querySelectorAll(".floating-social").forEach((bar) => {
  const topButton = bar.querySelector(".floating-social__top");
  const footer = document.querySelector(
    ".version-bold-footer, .version-combo-footer",
  );

  if (topButton) {
    topButton.addEventListener("click", () => {
      /* Smoothly returns users to the header/top of the current page. */
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const updatëBackToTop = () => {
    /* The arrow appears only after scrolling enough that going up is useful. */
    topButton?.classList.toggle("is-visible", window.scrollY > 420);
  };

  updatëBackToTop();
  window.addEventListener("scroll", updatëBackToTop, { passive: true });

  if (!footer) return;

  const footerObserver = new IntersectionObserver(
    (entries) => {
      /* Hide the floating stack near the footer because footer links repeat the same actions. */
      bar.classList.toggle(
        "is-hidden",
        entries.some((entry) => entry.isIntersecting),
      );
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 },
  );

  footerObserver.observe(footer);
});

/* Mobile menu: opens/closes the bold-version navigation drawer. */
document.querySelectorAll(".version-bold-menu-toggle").forEach((button) => {
  /* aria-controls points to the nav element this button opens. */
  const nav = document.getElementById(button.getAttribute("aria-controls"));
  if (!nav) return;

  /* Always start closed after reload/navigation; stale classes must never cover the page. */
  button.setAttribute("aria-expanded", "false");
  document.body.classList.remove("bold-nav-open");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    /* aria-expanded is for assistive tech; .bold-nav-open is for CSS. */
    button.setAttribute("aria-expanded", String(!isOpen));
    const words = window.FalBoldLanguage.getWords();
    button.setAttribute("aria-label", words[isOpen ? "menuOpen" : "menuClose"]);
    document.body.classList.toggle("bold-nav-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      /* Close the mobile nav after choosing a page. */
      button.setAttribute("aria-expanded", "false");
      document.body.classList.remove("bold-nav-open");
    });
  });

  /* Escape closes the drawer, matching normal dialog/navigation behavior. */
  document.addEventListener("keydown", (event) => {
    if (
      event.key !== "Escape" ||
      button.getAttribute("aria-expanded") !== "true"
    )
      return;
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("bold-nav-open");
    button.focus();
  });

  /* Tapping outside the drawer closes it without trapping the visitor. */
  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("bold-nav-open")) return;
    if (nav.contains(event.target) || button.contains(event.target)) return;
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("bold-nav-open");
  });

  window.addEventListener("pageshow", () => {
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("bold-nav-open");
  });
});

/* Forms: intercept submit, validatë required fields, and show success/error UI. */
document.querySelectorAll("[data-async-form]").forEach((form) => {
  /* Every async form gets a live status line appended at the end. */
  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("role", "status");
  form.append(status);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      /* Native HTML required/email/etc. validation remains the source of truth. */
      form.classList.add("was-validatëd");
      status.textContent = window.FalBoldLanguage.getWords().required;
      status.dataset.state = "error";
      form.reportValidity();
      return;
    }

    const messages = window.FalBoldLanguage.getWords();
    const endpoint = form.dataset.endpoint || "";
    const staticEmail = form.dataset.staticEmail || "";

    status.textContent = messages.sending;
    status.dataset.statë = "pending";

    try {
      const data = new FormData(form);
      if (!endpoint && staticEmail) {
        const subject = form.name === "fal-quote"
          ? "FAL DOORS - Kerkese per oferte"
          : "FAL DOORS - Mesazh nga website";
        const lines = [];
        data.forEach((value, key) => {
          if (key === "bot-field" || key === "form-name") return;
          if (value instanceof File) {
            if (value.name) lines.push(`${key}: ${value.name}`);
            return;
          }
          const text = String(value).trim();
          if (text) lines.push(`${key}: ${text}`);
        });
        const body = [
          "Pershendetje FAL DOORS,",
          "",
          "Po dergoj detajet nga website:",
          "",
          ...lines,
          "",
          "Ju lutem me kontaktoni per hapat e radhes.",
        ].join("\n");
        window.location.href = `mailto:${encodeURIComponent(staticEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        status.textContent = messages.success;
        status.dataset.state = "success";
        form.reset();
        const successPage = form.dataset.successPage;
        if (successPage) {
          window.setTimeout(() => window.location.assign(successPage), 900);
        }
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Form endpoint failed");
      const result = await response.json();
      if (String(result.success).toLowerCase() !== "true") {
        throw new Error(result.message || "Form endpoint rejected submission");
      }
      status.textContent = messages.success;
      status.dataset.state = "success";
      form.reset();
      const successPage = form.dataset.successPage;
      if (successPage) {
        window.setTimeout(() => window.location.assign(successPage), 450);
      }
    } catch {
      status.textContent = messages.error;
      status.dataset.state = "error";
    }
  });
});

/* Creatë Entrance controls: one selected model/finish/handle për option group. */
const doorPreview = document.querySelector(".fal-create-door");
const optionSlugMaps = {
  Modeli: {
    "E brendshme": "brendshme",
    Hyrje: "hyrje",
    "Me xham": "xham",
  },
  Finitura: {
    "Dru i errët": "dru-erret",
    "Dru i hapur": "dru-hapur",
    Antracit: "antracit",
    Neutral: "neutral",
  },
  Doreza: {
    "Dorezë vertikale": "vertikale",
    "Dorezë minimaliste": "minimaliste",
    "Dorezë klasike": "klasike",
  },
};

const refreshConfigurationFields = (configuration) => {
  const summary = Object.entries(configuration)
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");
  document.querySelectorAll("[data-configuration-field]").forEach((field) => {
    field.value = summary;
  });
};

const applyDoorChoice = (item) => {
  const group = item.closest("[data-option-group]");
  const groupName = group?.dataset.optionGroup;
  const value =
    item.dataset.value ||
    item.getAttribute("aria-label") ||
    item.textContent.trim();
  if (!group || !groupName || !value) return;

  group.querySelectorAll(".is-selected").forEach((selected) => {
    selected.classList.remove("is-selected");
    selected.setAttribute("aria-pressed", "false");
  });
  item.classList.add("is-selected");
  item.setAttribute("aria-pressed", "true");

  const slug = optionSlugMaps[groupName]?.[value];
  const attributeNames = {
    Modeli: "model",
    Finitura: "finish",
    Doreza: "handle",
  };
  if (doorPreview && slug && attributeNames[groupName]) {
    doorPreview.dataset[attributeNames[groupName]] = slug;
  }

  const configuration = JSON.parse(
    localStorage.getItem("fal-door-configuration") || "{}",
  );
  configuration[groupName] = value;
  localStorage.setItem("fal-door-configuration", JSON.stringify(configuration));
  refreshConfigurationFields(configuration);
};

const doorChoiceItems = document.querySelectorAll(
  ".fal-choice-row button, .fal-swatch-row i, .fal-handle-row i",
);

doorChoiceItems.forEach((item) => {
  /* Swatches/handle shapes are <i> elements, so JS makes them keyboard-focusable. */
  item.tabIndex = item.tagName === "I" ? 0 : item.tabIndex;
  item.setAttribute(
    "role",
    item.tagName === "I" ? "button" : item.getAttribute("role") || "button",
  );
  item.setAttribute("aria-pressed", "false");

  item.addEventListener("click", () => applyDoorChoice(item));

  item.addEventListener("keydown", (event) => {
    /* Keyboard support gives Enter/Space the same behavior as a click. */
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      item.click();
    }
  });
});

document.querySelectorAll("[data-option-group]").forEach((group) => {
  const storedConfiguration = JSON.parse(
    localStorage.getItem("fal-door-configuration") || "{}",
  );
  const groupName = group.dataset.optionGroup;
  const storedValue = storedConfiguration[groupName];
  const items = [...group.querySelectorAll("button, i")];
  const storedItem = items.find(
    (item) =>
      (item.dataset.value ||
        item.getAttribute("aria-label") ||
        item.textContent.trim()) === storedValue,
  );
  applyDoorChoice(storedItem || items[0]);
});

/* Quote form receives the choices made on the Creatë Entrance page. */
/* Contact page receives the completed builder choices and preparës the offer message. */
(() => {
  const message = document.querySelector("[data-configuration-message]");
  if (!message) return;

  const configuration = JSON.parse(
    localStorage.getItem("fal-door-configuration") || "{}",
  );
  const details = Object.entries(configuration).map(
    ([key, value]) => `${key}: ${value}`,
  );
  const fromBuilder =
    new URLSearchParams(window.location.search).get("from") === "builder";

  if (fromBuilder && details.length) {
    message.value = `Përshëndetje, dëshiroj një ofertë për derën që konfigurava.\n\n${details.join("\n")}\n\nJu lutem më kontaktoni për çmimin dhe hapat e ardhshëm.`;
    const form = message.closest("form");
    form?.classList.add("has-builder-configuration");
    const subject = form?.querySelector('select[name="Subject"]');
    if (subject) subject.value = "Kërkesë ofertë";
    window.setTimeout(() => message.focus(), 250);
  }
})();
document.querySelectorAll("[data-configuration-field]").forEach((field) => {
  const configuration = JSON.parse(
    localStorage.getItem("fal-door-configuration") || "{}",
  );
  refreshConfigurationFields(configuration);
});

/* Mobile background videos are paused to save data and battery. */
document
  .querySelectorAll("video[autoplay]:not(.bold-home-hero-video)")
  .forEach((video) => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    /* Mark the video visible only after decoded frames are ready, avoiding a black flash. */
    const showMovingVideo = () => video.classList.add("is-playing");
    video.addEventListener("playing", showMovingVideo);

    /* Muted autoplay is broadly allowed, but retry once after the first user interaction. */
    const tryPlayback = () => video.play().catch(() => {});
    tryPlayback();
    document.addEventListener("pointerdown", tryPlayback, {
      once: true,
      passive: true,
    });
  });

/* Defer large films until the intro is gone and each video is actually needed. */
(() => {
  const videos = [...document.querySelectorAll("video[data-src]")];
  if (!videos.length) return;

  const loadVideo = (video, shouldPlay = false) => {
    if (!video.src) {
      video.src = video.dataset.src;
      video.load();
    }
    if (shouldPlay || video.hasAttribute("data-autoplay")) {
      return video.play().catch(() => {});
    }
    return Promise.resolve();
  };

  const begin = () => {
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                loadVideo(entry.target, true);
                observer.unobserve(entry.target);
              });
            },
            { rootMargin: "240px 0px", threshold: 0.01 },
          )
        : null;

    videos.forEach((video) => {
      video.addEventListener("click", () => loadVideo(video, true), {
        once: true,
      });
      if (observer) observer.observe(video);
      else loadVideo(video, video.hasAttribute("data-autoplay"));
    });
  };

  if (document.body.classList.contains("fal-intro-active")) {
    document.addEventListener("fal:intro-complete", begin, { once: true });
  } else {
    begin();
  }
})();

/* Hero presentation film: continuous loop with native controls retained. */
document.querySelectorAll(".bold-home-hero-video").forEach((video) => {
  const keepPlaying = () => {
    if (document.visibilityStatë !== "visible" || !video.paused) return;
    video.play().catch(() => {});
  };

  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.play().catch(() => {});
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });
  window.addEventListener("pageshow", keepPlaying);
  document.addEventListener("visibilitychange", keepPlaying);
});

/* Homepage proof counters animatë once as the statistics enter the viewport. */
document.querySelectorAll(".bold-home-proof").forEach((section) => {
  if (!("IntersectionObserver" in window)) {
    section.classList.add("is-revealed");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return;
      section.classList.add("is-revealed");
      observer.disconnect();
    },
    { threshold: 0.28 },
  );

  observer.observe(section);
});

document.querySelectorAll("[data-count]").forEach((counter) => {
  const finish = Number(counter.dataset.count);
  const suffix = counter.dataset.suffix || "";
  const run = () => {
    const started = performance.now();
    const duration = 1200;
    const frame = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(finish * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(counter);
  } else {
    counter.textContent = `${finish}${suffix}`;
  }
});

/* Compact testimonial carousel; copy and images can be replaced without changing behavior. */
document.querySelectorAll(".bold-home-testimonials").forEach((slider) => {
  const slides = [...slider.querySelectorAll(":scope > article")];
  const indexLabel = slider.querySelector(".bold-home-testimonials__index");
  let current = 0;
  let autoAdvance;

  const fitSlides = () => {
    if (!slides.length) return;
    const controlsSpace = 76;
    const tallestSlide = Math.max(
      ...slides.map((slide) => Math.ceil(slide.scrollHeight)),
    );
    slider.style.height = `${tallestSlide + controlsSpace}px`;
  };

  const show = (next) => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) =>
      slide.classList.toggle("is-active", index === current),
    );
    if (indexLabel) {
      indexLabel.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }
    window.requestAnimationFrame(fitSlides);
  };

  const startAutoAdvance = () => {
    window.clearInterval(autoAdvance);
    autoAdvance = window.setInterval(() => show(current + 1), 20000);
  };

  slider
    .querySelector('[data-testimonial="prev"]')
    ?.addEventListener("click", () => {
      show(current - 1);
      startAutoAdvance();
    });
  slider
    .querySelector('[data-testimonial="next"]')
    ?.addEventListener("click", () => {
      show(current + 1);
      startAutoAdvance();
    });

  if (
    slides.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    startAutoAdvance();
  }

  fitSlides();
  window.addEventListener("load", fitSlides, { once: true });
  window.addEventListener("resize", fitSlides);
});

/* Project console shared with the Combined version. */
(() => {
  const modal = document.querySelector("#goldenProjectModal");
  const triggers = [
    ...document.querySelectorAll(".bold-home-project-card[data-project]"),
  ];
  if (!modal || !triggers.length) return;

  const projects = triggers.map((card) => {
    const title = card.querySelector("h3");
    return {
      name:
        title?.childNodes[0]?.textContent.trim() ||
        title?.textContent.trim() ||
        "",
      category:
        title?.querySelector("em")?.textContent.trim() ||
        card.querySelector("small")?.textContent.trim() ||
        "",
      summary: card.querySelector("small")?.textContent.trim() || "",
      image: card.querySelector(":scope > img")?.getAttribute("src") || "",
      alt: card.querySelector(":scope > img")?.getAttribute("alt") || "",
      href: card.getAttribute("href") || "version-bold-projects.html",
    };
  });

  const image = modal.querySelector(".golden-project-modal__media img");
  const index = modal.querySelector(".golden-project-modal__index");
  const title = modal.querySelector("h2");
  const category = modal.querySelector(
    ".golden-project-modal__content > strong",
  );
  const description = modal.querySelector(".golden-project-modal__content > p");
  const projectLink = modal.querySelector(".golden-project-modal__all");
  const status = modal.querySelector("[data-modal-status]");
  const railButtons = [...modal.querySelectorAll("[data-modal-project]")];
  let current = 0;
  let opener = null;
  let transitionTimer = 0;

  const translateProjectText = (text) => {
    const languageApi = window.FalLanguage || window.FalBoldLanguage;
    if (!languageApi) return text;
    return languageApi.translate(text, languageApi.getLanguage());
  };

  const render = (nextIndex, direction = 1, animate = true) => {
    current = (nextIndex + projects.length) % projects.length;
    const project = projects[current];
    window.clearTimeout(transitionTimer);
    modal.classList.remove("is-switching-next", "is-switching-prev");
    if (animate) {
      void modal.offsetWidth;
      modal.classList.add(
        direction < 0 ? "is-switching-prev" : "is-switching-next",
      );
      transitionTimer = window.setTimeout(
        () => modal.classList.remove("is-switching-next", "is-switching-prev"),
        520,
      );
    }
    image.src = project.image;
    image.alt = project.alt;
    index.textContent = `${String(current + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
    title.textContent = translateProjectText(project.name);
    category.textContent = translateProjectText(project.category);
    description.textContent = translateProjectText(`${project.summary}. Ky panel mund të zgjerohet me materiale, sisteme, vendndodhje dhe fotografi të tjera të realizimit.`);
    if (projectLink) projectLink.href = project.href;
    status.textContent = translateProjectText(`Projekti ${String(current + 1).padStart(2, 0)} aktiv`);
    railButtons.forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === current);
      button.setAttribute("aria-pressed", String(buttonIndex === current));
    });
  };

  const closeProject = () => {
    modal.close();
    document.body.classList.remove("golden-modal-open");
    opener?.focus();
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      opener = trigger;
      render(Number(trigger.dataset.project), 1, false);
      modal.showModal();
      document.body.classList.add("golden-modal-open");
    }),
  );
  modal
    .querySelector(".golden-project-modal__close")
    ?.addEventListener("click", closeProject);
  modal
    .querySelector("[data-modal-prev]")
    ?.addEventListener("click", () => render(current - 1, -1));
  modal
    .querySelector("[data-modal-next]")
    ?.addEventListener("click", () => render(current + 1, 1));
  railButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const target = Number(button.dataset.modalProject);
      if (target !== current) render(target, target < current ? -1 : 1);
    }),
  );
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeProject();
  });
  modal.addEventListener("close", () =>
    document.body.classList.remove("golden-modal-open"),
  );
})();

/* Editorial inner-page sections reveal softly as visitors move through the story. */
const editorialSections = document.querySelectorAll(
  ".bold-home-manifesto, .bold-home-style-story, .fal-story-section, .fal-photo-statement, .fal-material-section, .fal-inner-cta, .fal-gallery-note, .fal-inspiration-strip, .fal-quote-guide, .fal-visit-section",
);
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const editorialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        editorialObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  editorialSections.forEach((section) => editorialObserver.observe(section));
} else {
  editorialSections.forEach((section) => section.classList.add("is-visible"));
}
