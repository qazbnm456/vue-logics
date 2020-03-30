---
layout: HomeLayout
home: true
heroImage: /logo.svg
heroText: Vue Logics
tagline: Vue Logics is a Vue Plugin to let you build your logics based on Flowy.js.
actionText: Get Started →
actionLink: /guide/
features:
- title: ☝️ A single element
  details: With Vue Logics you don't need to remember the names of a dozen components — all elements are created with a single component. Easy!
- title: 🔌 Plugin system
  details: Extend Vue Logics's functionality or reuse custom blocks, validation rules, and confitions across projects by tapping into the plugin system. Make your plugin open source to share with others!
- title: 🎨 Bring your own styles
  details: Vue Logics has simple semantic classes that make styling logics a snap. Roll your own styles or choose one of our pre-baked themes.
---

# Live Code Examples

## Form validation

Vue Logics includes [20 rules](/guide/validation/) and support for defining your own.

```html live
<FormulateInput
  type="email"
  label="What is your school email address?"
  validation="required|email|ends_with:.edu"
  validation-name="School email"
  placeholder="user@university.edu"
/>
```
