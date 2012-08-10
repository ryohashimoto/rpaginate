$(document).ready(function(){
  var books = [];
  books.push({'title': 'コアjQuery＋プラグイン/jQuery UI 開発実践技法', 'author': 'Bear Bibeault'});
  books.push({'title': 'jQuery Mobile', 'author': 'Jon Reid'});
  books.push({'title': 'JavaScript & jQuery: The Missing Manual', 'author': 'David Sawyer McFarland'});
  books.push({'title': 'jQuery Pocket Reference ', 'author': 'David Flanagan'});
  books.push({'title': 'jQuery in Action, Second Edition', 'author': 'Bear Bibeault and Yehuda Katz'});
  books.push({'title': 'Learning jQuery, Third Edition', 'author': 'Jonathan Chaffer and Karl Swedberg'});
  books.push({'title': 'Pro jQuery', 'author': 'Adam Freeman'});
  books.push({'title': 'jQuery Cookbook: Solutions & Examples for jQuery Developers (Animal Guide)', 'author': 'Cody Lindley'});
  books.push({'title': 'jQuery: Novice to Ninja', 'author': 'Earle Castledine and Craig Shark'});
  books.push({'title': 'Head First jQuery', 'author': 'Ryan Benedetti and Ronan Cranley'});
  books.push({'title': 'Professional jQuery (Wrox Programmer to Programmer)', 'author': 'Cesar Otero and Rob Larsen'});
  books.push({'title': 'jQuery UI 1.8: The User Interface Library for jQuery', 'author': 'Dan Wellman'});
  books.push({'title': "jQuery for Designers: Beginner\'s Guide", 'author': 'Natalie MacLees'});
  books.push({'title': 'jQuery For Dummies', 'author': 'Lynn Beighley'});
  books.push({'title': 'jQuery UI', 'author': 'Eric Sarrion'});
  books.push({'title': 'Smashing jQuery (Smashing Magazine Book Series)', 'author': 'Jake Rutter'});
  books.push({'title': 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)', 'author': 'Richard York'});
  books.push({'title': 'jQuery Mobile: Up and Running', 'author': 'Maximiliano Firtman'});
  books.push({'title': 'jQuery UI 1.7: The User Interface Library for jQuery', 'author': 'Dan Wellman'});
  books.push({'title': 'jQuery Mobile', 'author': 'Jon Reid'});
  books.push({'title': 'Learning jQuery: Better Interaction Design and Web Development with Simple JavaScript Techniques', 'author': 'Jonathan Chaffer and Karl Swedberg'});
  books.push({'title': 'Learning jQuery 1.3', 'author': 'Jonathan Chaffer, Karl Swedberg and John Resig'});
  books.push({'title': 'Supercharged JavaScript Graphics: with HTML5 canvas, jQuery, and More', 'author': 'Raffaele Cecco'});
  books.push({'title': 'jQuery 1.4 Animation Techniques: Beginners Guide', 'author': 'Dan Wellman'});
  books.push({'title': 'Modern JavaScript: Develop and Design', 'author': 'Larry E. Ullman'});
  console.dir(books);

  $('#books').hide();
  var tmpl_book = _.template($('#bookTemplate').html());
  _.each(books, function(book) {
    $('#books').append(tmpl_book(book));
  });
  $('#books').rpaginate();
  $('#books').show();


  crossroads.addRoute('/books/pages/{num}', function(num) {
    $('books').rpagenav.goTo('books', num);
  });
  // crossroads.addRoute('/books/next_page', function() {
  //   $('books').rpagenav.next('books');
  // });
  // crossroads.addRoute('/books/prev_page', function() {
  //   $('books').rpagenav.prev('books');
  // });

  function parse_hash(new_hash, old_hash) {
    crossroads.parse(new_hash);
  }
  hasher.prependHash = '!';
  hasher.initialized.add(parse_hash);
  hasher.changed.add(parse_hash);
  hasher.init();
});
