function randomize() {

    /* Get the number of each category inputted */
    var animal_num = document.getElementById("animal").value;
    var plant_num = document.getElementById("plant").value;
  
    /* Determine which boxes were checked */
    var weap_bool = document.getElementById("weapon").checked;
    var styl_bool = document.getElementById("style").checked;
    var extr_bool = document.getElementById("extra").checked;
    var colo_bool = document.getElementById("color").checked;
    
      /* Add animals to the combination result string */
      var result = ""
      for (i = 0; i < animal_num; i++){
        result = result.concat(" + ", animals[getRandomInt(animals.length)])
      }
      
      /* Add plants */
      for (i = 0; i < plant_num; i++){
        result = result.concat(" + ", plants[getRandomInt(plants.length)])
      }
      
      /* Add weapons */
      if (weap_bool == true){
        result = result.concat(" + ", weapons[getRandomInt(weapons.length)])
      }

      /* Add styles */
      if (styl_bool == true){
        result = result.concat(" + ", styles[getRandomInt(styles.length)])
      }
      
      /* Add extras */
      if (extr_bool == true){
        result = result.concat(" + ", extras[getRandomInt(extras.length)])
      }

      /* Add color palettes */
      if (colo_bool == true){
        result = result.concat(" + ", colors[getRandomInt(colors.length)])
      }

        /* paste the result into the HTML */
      document.getElementById("output").innerHTML = result.slice(3);
  }

  /* Function to get a random number */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  /* Function to clear all input */
  function clearInput() {
    document.getElementById("animal").value = "";
    document.getElementById("plant").value = "";
    document.getElementById("weapon").value = "";
    document.getElementById("style").value = "";
    document.getElementById("extra").value = "";
    document.getElementById("color").value = "";
  }

  /* Function to clear all output */
  function clearOutput(){
    document.getElementById("output").innerHTML = "";
  }