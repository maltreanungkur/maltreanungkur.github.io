---
description: Hi
---

<style>
  .about-text p {
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    -webkit-hyphens: auto;
    margin-bottom: 1.4rem;
    line-height: 1.7;
  }
</style>

<div class="about-text" style="max-width: 700px; margin: 0 auto; padding-top: 20px;">
  <p>
    I am a first-year Ph.D. student in the
    <a href="https://math.washington.edu/" style="text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: #888; text-underline-offset: 4px; color: inherit;">Department of Mathematics</a>
    at the
    <a href="https://www.washington.edu/" style="text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: #888; text-underline-offset: 4px; color: inherit;">University of Washington, Seattle</a>
    (2026–). Previously, I completed my B.Math. at the
    <a href="https://www.isibang.ac.in/" style="text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: #888; text-underline-offset: 4px; color: inherit;">Indian Statistical Institute, Bangalore</a>
    (2023–2026), where I was advised by
    <a href="https://math.iisc.ac.in/~khare/" style="text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: #888; text-underline-offset: 4px; color: inherit;">Professor Apoorva Khare</a>.
  </p>

  <p>I am interested in representation theory.</p>
  <h3>Contact</h3>

  <p><strong>Email:</strong> <span id="email"></span></p>

  <p>
    <strong>Office:</strong><br>
    PDL-C430, Department of Mathematics<br>
    University of Washington, Seattle<br>
    Padelford Hall, Seattle, WA 98195-4350
  </p>
</div>

<script>
  const user = "trmal";
  const domain = "uw.edu";
  const email = `${user}@${domain}`;
  document.getElementById("email").innerHTML =
    `<a href="mailto:${email}" style="text-decoration: underline; text-decoration-thickness: 1px; text-decoration-color: #888; text-underline-offset: 4px; color: inherit;">${email}</a>`;
</script>
