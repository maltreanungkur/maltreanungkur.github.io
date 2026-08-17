---
description: Hi
---

<style>
  .about-text {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 20px;
  }

  .about-text p {
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    -webkit-hyphens: auto;
    line-height: 1.7;
    margin-bottom: 1.4rem;
  }

  .about-text h3 {
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .about-text a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: #888;
    text-underline-offset: 4px;
    color: inherit;
  }
</style>

<div class="about-text">
  <p>
    I am a first-year Ph.D. student in the
    <a href="https://math.washington.edu/">Department of Mathematics</a>
    at the
    <a href="https://www.washington.edu/">University of Washington, Seattle</a>
    (2026–). Previously, I completed my B.Math. at the
    <a href="https://www.isibang.ac.in/">Indian Statistical Institute, Bangalore</a>
    (2023–2026), where I was advised by
    <a href="https://math.iisc.ac.in/~khare/">Professor Apoorva Khare</a>.
  </p>

  <p>I am interested in representation theory.</p>

  <h3>Contact</h3>

  <p><strong>Email:</strong> <span id="email"></span></p>

  <p>
    <strong>Office:</strong> PDL C-430, Padelford Hall, Department of Mathematics, University of Washington, Seattle, WA 98195-4350, USA.
  </p>
</div>

<script>
  (() => {
    const u = "trmal";
    const d = "uw.edu";
    const e = `${u}@${d}`;
    document.getElementById("email").innerHTML =
      `<a href="mailto:${e}">${e}</a>`;
  })();
</script>
