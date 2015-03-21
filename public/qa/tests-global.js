/**
 * Created by panma on 3/19/15.
 */
suite('Global Tests',function(){
   test('page has a valid title',function(){
     assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');

   });
});