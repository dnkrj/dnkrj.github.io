---
layout: default
---

<header>
  <h1>Daniel Karaj</h1>
  <p>I'm a Software Engineer from London. I've worked for the <a href="//gov.uk/government/organisations/government-digital-service" target="_blank">Government Digital Service</a>, <a href="//www.google.com" target="_blank">Google</a> and the <a href="//www.designlab.ac/" target="_blank">University of Tokyo</a>.</p>
  <p>I studied Computer Science at the <a href="//www.cl.cam.ac.uk/" target="_blank">University of Cambridge</a> and Global Innovation Design at the <a href="//www.rca.ac.uk" target="_blank">Royal College of Art</a> and <a href="//www.imperial.ac.uk" target="_blank">Imperial</a>.</p>
  <ul>
    <li><a href="mailto:contact@karaj.uk">Email</a></li>
    <li><a href="//github.com/dnkrj" target="_blank">GitHub</a></li>
    <li><a href="//instagr.am/dnkrj" target="_blank">Instagram</a></li>
  </ul>
</header>

{% assign items = site.projects | concat: site.links %}
{% assign sorted_items = items | sort:"end" %}
{% for item in sorted_items reversed %}
  <section>
    {% if item.href %}
      <h2><a href="{{ item.href }}" target="_blank">{{ item.title }}</a></h2>
    {% else %}
      <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
    {% endif %}
    <p>{{ item.description }}</p>
    <p>{{ item.medium }}</p>
    <p>{{ item.year}} </p>
  </section>
{% endfor %}
