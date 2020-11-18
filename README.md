## Mootools Recaptcha JS Conflict Patch
This is a Wordpress plugin created to temporarily fix an unresolved JS conflict on a Wordpress site running Gravityforms and Gantry v4.

The javascript conflict is caused by mootools.js (loaded by gantry) which prevents recaptcha.js (loaded by Gravityforms) from loading properly. This plugin loads a patch js file with a temporary workaround until Gantry releases a fixed version.

This plugin fixed (in my case) the following JavaScript error:
`gravityforms reCAPTCHA placeholder element must be an element or id`

---
The patch script file was written by [James Sleeman](https://gist.github.com/sleemanj/f076ed2c0b887ab08074b55dad2fd636).

>Learn more about the JS conflict here. (https://github.com/google/recaptcha/issues/374).
---
