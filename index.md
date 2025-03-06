---
layout: default
---

<header>
  <h1>Daniel Karaj</h1>
  <p>I've Software Engineer from London. I've worked for the <a href="//gov.uk/government/organisations/government-digital-service" target="_blank">Government Digital Service</a>, <a href="//www.google.com" target="_blank">Google</a> and the <a href="//www.designlab.ac/" target="_blank">Univeristy of Tokyo</a>.</p>
  <p>I studied Computer Science at the <a href="//www.cl.cam.ac.uk/" target="_blank">University of Cambridge</a> and Global Innovation Design at the <a href="//www.rca.ac.uk" target="_blank">Royal College of Art</a> and <a href="//www.imperial.ac.uk" target="_blank">Imperial</a>.</p>
  <ul>
    <li><a href="mailto:contact@karaj.uk">Email</a></li>
    <li><a href="//github.com/dnkrj" target="_blank">GitHub</a></li>
    <li><a href="//instagr.am/dnkrj" target="_blank">Instagram</a></li>
  </ul>
</header>

{% assign sorted_projects = site.projects | sort:"order" %}
{% for project in sorted_projects %}
  <section data-href="{{ project.url }}">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    <p>{{ project.medium }}</p>
    <p>{{ project.year}} </p>
  </section>
{% endfor %}
