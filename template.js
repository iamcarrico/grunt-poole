/*
 * Mr. Poole
 * Creating a jekyll template with HTML5, Sass, and grunt.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Jekyll site template with HTML5, Sass and grunt itegration.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. The ' +
  'two commands already setup with grunt are _grunt server_ to work locally ' +
  'and _grunt deply_ to get the site ready for production.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      "grunt": "~0.4.0",
      "grunt-contrib-watch": "~0.4.0",
      "grunt-contrib-compass": "~0.2.0",
      "grunt-contrib-jshint": "~0.1.1",
      "grunt-contrib-uglify": "~0.2.0",
      "grunt-contrib-imagemin": "~0.1.4",
      "grunt-parallel": "~0.1.0",
      "grunt-svgmin": "~0.1.0",
      "grunt-contrib-concat": "~0.1.2",
      "grunt-jekyll": "git://github.com/ChinggizKhan/grunt-jekyll.git#add-in-config"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: '*'});

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
