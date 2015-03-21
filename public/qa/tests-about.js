/**
 * Created by panma on 3/19/15.
 */
suite('About page test',function(){
   test('page should contain link to contact page',function(){
      assert($('a[href="/contact"]').length);
   });
});