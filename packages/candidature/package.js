

Package.describe({
  name: 'candidature',
});

Package.onUse(function (api) {
  api.use([
    // Here are our dependencies:
    'fourseven:scss@4.12.0',
    // vulcan core
    'promise',
    'vulcan:core@=1.16.3',

    // vulcan packages
    'vulcan:forms@=1.16.3',
    'vulcan:accounts@=1.16.3',
    'vulcan:ui-bootstrap@=1.16.3',
  ]);

  api.addFiles('lib/stylesheets/style.scss');

  // Here is the entry point for client & server:
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
