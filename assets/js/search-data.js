// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-the-consolation-of-philosophy",
          title: 'The Consolation of Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_consolation/";
            },},{id: "news-our-review-therapy-induced-senescence-through-the-redox-lens-is-now-published-in-redox-biology",
          title: 'Our review ‘Therapy-induced senescence through the redox lens’ is now published in Redox...',
          description: "",
          section: "News",},{id: "news-pre-print-alert-first-paper-on-tumor-derived-extracellular-vesicles-is-now-out-on-pre-print",
          title: 'Pre-print alert! First paper on tumor-derived extracellular vesicles is now out on pre-print....',
          description: "",
          section: "News",},{id: "news-website-updated-and-is-now-live",
          title: 'Website updated and is now live.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
