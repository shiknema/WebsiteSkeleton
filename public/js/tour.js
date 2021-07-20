

// Instance the tour
(function () {
  var name = "pp";
  var tour =new Tour({
    storage: false
  });
  tour.addSteps([
    {
      element: ".tour-step.tour-step-one",
      placement: "bottom",
      title: "Welcome to Edureka!",
      content: "We would like to know your name?  <br> <input class='form-control' type='text' name='your_name'>",
      onNext: function (tour) {
        var nameP = $("input[name=your_name]").val();
        if ($.trim(nameP) !== ""){
          name = nameP;
        }
      }

    },

    {
      element: ".tour-step.tour-step-two",
      placement: "bottom",
      title: function(){ return "Welcome to Edureka!," + name;},
      content: "You can change your batch at anytime"
    },
    {
      element: ".tour-step.tour-step-three",
      placement: "bottom",
      title: function(){ return "Welcome to Edureka!," + name;},
      content: "We provide 24/7 support"
    },

    {
      element: ".tour-step.tour-step-four",
      placement: "bottom",
      title: function(){ return "Welcome to Edureka!," + name;},
      content: "You can contact Us for more inquery!! We are happy to help you.. "
    },

    {
      element: ".tour-step.tour-step-five",
      placement: "bottom",
      title: function(){ return "Welcome to Edureka!," + name;},
      content: "You can read our Terms and Conditions here!! "
    },
    {
      placement : "top",
      backdrop:true,
      orphan:true,
      title: function(){ return " Thank You, " + name;},
      content: function(){ return "We wish you happy learning with Edureka!"}
    }
  ]);

  // Initialize the tour
  tour.init();

  // Start the tour
  tour.start();
}());