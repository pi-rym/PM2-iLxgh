(() => {
  var t = {
      411: (t) => {
        t.exports = {
          renderMovies: () => {
            const t = document.getElementById("flex");
            $.get("https://students-api.2.us-1.fl0.io/movies", (e, n) => {
              const r = e
                .map((t) => {
                  let e = t.title;
                  if (e.length > 20) {
                    const t = e.lastIndexOf(" ", 20);
                    e = `${e.slice(0, t)}<br>${e.slice(t + 1)}`;
                  }
                  return `\n              <div class="project-card-sm" id="cards"> \n                  <div class="card-border-gradient"></div>\n                  <div class="card-container">\n                      <img src="${t.poster}">\n                      <div class="wrapper">\n                          <h2 class="title pt-3 pb-1">${e}</h2>\n                          <p class="textCard"><strong>Año:</strong> ${t.year}</p>\n                          <p class="textCard"><strong>Director:</strong> ${t.director}</p>\n                          <p class="textCard"><strong>Duración:</strong> ${t.duration}</p>\n                          <p class="textCard"><strong>Género:</strong> ${t.genre}</p>\n                          <p class="textCard"><strong>Calificación:</strong> ${t.rate}</p>\n                      </div>\n                  </div>\n              </div>\n          `;
                })
                .join("");
              t.innerHTML = r;
            });
          },
        };
      },
      516: (t) => {
        const e = document.querySelector(".circle");
        document.addEventListener("mousemove", (t) => {
          const n = t.clientX,
            r = t.clientY;
          (e.style.left = n - 462.5 + "px"), (e.style.top = r - 462.5 + "px");
        }),
          (t.exports = { circle: e });
      },
      873: (t) => {
        t.exports = {
          navBarFunction: () => {
            const t = document.getElementById("menu-btn"),
              e = document.querySelector(".menu");
            t.addEventListener("click", () => {
              e.classList.toggle("active");
            });
          },
        };
      },
    },
    e = {};
  function n(r) {
    var s = e[r];
    if (void 0 !== s) return s.exports;
    var c = (e[r] = { exports: {} });
    return t[r](c, c.exports, n), c.exports;
  }
  (() => {
    const { circle: t } = n(516),
      { navBarFunction: e } = n(873);
    e();
    const { renderMovies: r } = n(411);
    r();
  })();
})();
