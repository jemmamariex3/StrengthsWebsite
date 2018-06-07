  $(function () {

      var counter = 0;
      var selections = [];

      //initially hide the lower section of the pages content
      $('#choices').hide();
      $('.choices').hide();

      $("table td").click(function () {

          if (counter == 4) {
              $("button.button1").show();
            //   $('table td').click(false);
          }

          var clicked = $(this).text();
          if (counter >= 5) {
              clicked = '';
              counter--;
          }
          var span = $('<span></span>')
              .text(clicked + " ")
              .on("click", function () {
                  $(this).remove();
                  var index = selections.indexOf(span[0].innerText.split(' ').join('')); //retrive proper property in span
                  selections.splice(index, 1);
                  counter--;
                  if (counter < 5) {
                      $("button").hide();
                      if (selections.length == 0) {
                          $("#choices").hide();
                      }
                  }
              });

          $("#choices").append(span);
          if (selections.length != 5) {
              var string = span[0].innerText.split(' ').join('').toLowerCase(); //remove whitespace after text and convert to lowercase
              selections.push(string);
          }
          $('#choices').show(); //show text selections
          counter++;
      });

      $('.button1').click(function () {

          $('.row.row1').empty();
          $('.row.row2').empty();
          selections.forEach(function (index, key) {
              if (key <= 2) {
                  $('.row.row1').append(
                      `
                 <div class="col-md-4">
                        <a href="cardDesc/${index}.pdf" class="thumbnail"  target="_blank">
                          <img src="card-images/${index}.png" alt="Image" />
                        </a>
                      </div>
                `
                  );
              } else {

                  $('.row.row2').append(
                      `
                 <div class="col-md-4">
                        <a href="cardDesc/${index}.pdf" class="thumbnail"  target="_blank">
                          <img src="card-images/${index}.png" alt="Image" />
                        </a>
                      </div>
                `
                  );
              }
          });
          $('.choices').show(); //reveal the carousel
          $('.button1').hide(); //hide the submit button
          $('.button2').show(); //show the reset button
          $('.button2').click(function () {
              location.reload(); //trigger reset
          });
      });
  });