---
layout: default
---

<header>
  <h1>Daniel Karaj</h1>
  <p>I'm a Designer/Engineer studying <a href="//www.rca.ac.uk/schools/school-of-design/global-innovation-design/" target="_blank">Global Innovation Design</a> at the <a href="//www.rca.ac.uk" target="_blank">Royal College of Art</a>, London.</p>
  <p>Previously, I worked as Software Engineer at <a href="//www.google.com" target="_blank">Google</a> and studied Computer Science at the <a href="//www.cl.cam.ac.uk/" target="_blank">University of Cambridge</a>.</p>
  <ul>
    <li><a href="mailto:hey@krj.io">Email</a></li>
    <li><a href="//github.com/dnkrj" target="_blank">GitHub</a></li>
    <li><a href="//instagr.am/dnkrj" target="_blank">Instagram</a></li>
  </ul>
</header>

{% assign sorted_projects = site.projects | sort:"order" %}
{% for project in sorted_projects %}
  <section>
    {% if project.wide %}
      {{ project.wide }}
    {% else %}
      <img src="images/{{ project.title | slugify }}/wide.jpg">
    {% endif %}
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.description }}</p>
    <p>{{ project.medium }}</p>
    <p>{{ project.year}} </p>
  </section>
{% endfor %}
