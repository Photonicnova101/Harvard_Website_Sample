/* transcript.js */

// We use $(document).ready() or window.onload to be sure the DOM has loaded
//  before we execute any JS that references the DOM
window.onload = function(){

  //add the media player
  var player = jwplayer("playerDiv").setup({
                   file: "http://learningapi.com/cscie3/examples/week13/nasa-spinoffs.mp4",
                   height: 360,
                   width: 640,
                   controls:true,
               });

    // Create the Vue Component that sets up the transcript
    //   and attaches the behaviors to it and to the player
    var vt = Vue.component('transcript', {
        data: function(){
         return {
           transcript :  [
                 {
                    "start": "17.869",
                    "dur": "3.82",
                    "text": "Hey this is Dwayne Johnson. While playing astronaut Chuck Baker in the film Planet"
                 },
                 {
                    "start": "21.689",
                    "dur": "0.701",
                    "text": "51"
                 },
                 {
                    "start": "22.39",
                    "dur": "3.56",
                    "text": "I gained a lot of respect for our nation&#39;s space program. NASA makes new"
                 },
                 {
                    "start": "25.95",
                    "dur": "1.35",
                    "text": "discoveries about our universe"
                 },
                 {
                    "start": "27.3",
                    "dur": "4.11",
                    "text": "every day but one of the coolest things about nasa is the technologies that"
                 },
                 {
                    "start": "31.41",
                    "dur": "1.55",
                    "text": "it creates for exploring space"
                 },
                 {
                    "start": "32.96",
                    "dur": "3.739",
                    "text": "are also improving life here on earth. NASA technologies can be found"
                 },
                 {
                    "start": "36.699",
                    "dur": "0.621",
                    "text": "everywhere"
                 },
                 {
                    "start": "37.32",
                    "dur": "3.71",
                    "text": "from the soles of the shoes to the freeze dried fruit here cereal. These"
                 },
                 {
                    "start": "41.03",
                    "dur": "1.58",
                    "text": "technologies, called spinoffs,"
                 },
                 {
                    "start": "42.61",
                    "dur": "4.36",
                    "text": "help doctors heal patients with heart problems, scientists track rare animals, and"
                 },
                 {
                    "start": "46.97",
                    "dur": "2.409",
                    "text": "firefighters and police officers and soldiers"
                 },
                 {
                    "start": "49.379",
                    "dur": "4.45",
                    "text": "stay safe on the job. Space technology has even helped Olympic swimmers win"
                 },
                 {
                    "start": "53.829",
                    "dur": "0.711",
                    "text": "gold medals."
                 },
                 {
                    "start": "54.54",
                    "dur": "3.63",
                    "text": "All of these the spinoffs began as innovations for nasa missions"
                 },
                 {
                    "start": "58.17",
                    "dur": "3.86",
                    "text": "like the space shuttle, the Hubble Space Telescope, and the International Space"
                 },
                 {
                    "start": "62.03",
                    "dur": "3.18",
                    "text": "Station. You don&#39;t have to be an astronaut to trace"
                 },
                 {
                    "start": "65.21",
                    "dur": "3.47",
                    "text": "space back to where you live. Visit nasa.gov"
                 },
                 {
                    "start": "68.68",
                    "dur": "3.549",
                    "text": "to learn more about how nasa technologies play a role in your life."
                 },
                 {
                    "start": "72.229",
                    "dur": "3.331",
                    "text": "After all, there&#39;s no space like home"
                 }
              ]
            };
      },

      template: '<div><span v-for="phrase in transcript"  \
                       class="words"                 \
                       v-bind:data-start="phrase.start"   \
                       v-bind:data-dur="phrase.dur">      \
                  {{ phrase.text }}                            \
                </span></div>' ,

      // The function attached at the 'mounted' property runs once the VueJS
      //  object has been set up, so it's a good place to put code that attaches
      //  to DOM objects.
      mounted : function(){
          // This code makes the transcript SPANs clickable so the video will seek.
        $(".words").click(function(evt){
                // YOUR CODE TO ADD #2
                //   Get the value of the start attribute (the jQuery .attr() function could help here)
                //   and call player.seek([your value goes here])
                var position = $(this).attr("data-start"); //they def are assigned to certain values
                player.seek(parseInt(position));


       });

       // This code will run each time the player time updates
       //  so we can highlight the SPAN the corresponds to what's playing
       player.onTime(function(evt){

         /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
          *
          *  Follow the prompts in these comments to structure your code. Read them carefully.
          */

          /* Get the current time of the video playback and assign it to the variable 'time'.
           *  It is a property of the player's evt object. Refer to the classroom lecture, or use the
           *  documentation of onTime at
           *     http://support.jwplayer.com/customer/portal/articles/1413089-javascript-api-reference#seek
           *  to see the properties available within this event object. (Note that the 'duration' property
           *  of the JWPlayer onTime event is not related to the duration described by the transcript element
           *  in our HTML, and you will not need to use it.)
           *
           * */
           var time =  player.getPosition(); //YOUR CODE TO ADD #3 - replace the empty quotes with your code
           console.log(time);       // see if it's working


           /*  Next you need to iterate over the transcript elements (using a 'for' loop or
            *   transcript elements.each()), and for each one, see if the 'time' is greater
            *   than the element's data-start and less than the end
            *   ('end' being equal to data-start plus data-dur).  The jquery .attr() function
            *   will be useful here.
            *
            *  If the player time is in range use jQuery's addClass() to add the "hilite" class
            *   to the element. Otherwise, use removeClass() to remove it. ".hilite" is already defined
            *   in the stylesheet, so you don't have to manipulate the element styles themselves.
            *
            *  Remember that the attribute values are going to come to you as Strings
            *   and you'll need to change them into Floats or Integers (parseFloat(), parseInt()).
            *   Don't worry about non-numeric data or missing attributes - it's OK to assume that
            *   the data in the HTML is valid.
            *
            *   in pseudo-code it's something like this:
            *      for each transcript element
            *          if (time >= element_start_time && time <=element_end_time)
            *             add "hilight" class
            *          else
            *             remove "hilite" class
            *
            */

           // YOUR for() loop or $('.words').each() goes here...
           // YOUR CODE TO ADD #4
           $('.words').each(function(){
              if (time> parseInt($(this).attr("data-start")) && time <= parseInt ($(this).attr("data-start")) + parseInt($(this).attr("data-dur"))){
                 $(this).addClass("hilite");
              }
              else{
                 $(this).removeClass("hilite");
              }
              }
           );

       });
     } //end mounted
   }); // end Vue.component()

    var v = new Vue({
        el: "#videoTranscript"
      });

};
