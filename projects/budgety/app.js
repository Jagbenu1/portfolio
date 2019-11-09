// Budget Controller
var budgetController = (function(){

  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome){
    if(totalIncome > 0){
        this.percentage = Math.round((this.value / totalIncome) * 100);
    }else{
        this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function(){
    return this.percentage;
  };


  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(curr){
            sum += curr.value;
        });
        /*
            how this loop will work
        0
        [200, 400, 100]
        sum = 0 + 200
        sum = 200 + 400
        sum = 600 + 100 = 700
        */
      data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
      budget: 0,
      percentage: -1
  };

  return{
    addItem: function(type, des, val){
        var newItem, ID;

        //create new ID
        if(data.allItems[type].length > 0){
          ID = data.allItems[type][data.allItems[type].length -1].id + 1;
          //ID = last ID + 1
        }else{
          ID = 0;
        }


        //Creates new item based on 'inc' or 'exp' type
        if(type === 'exp'){
            newItem = new Expense(ID, des, val);
        }else if(type === 'inc'){
            newItem = new Income(ID, des, val);
        }

        //Push it into our data structure
        data.allItems[type].push(newItem);

        //return the new element
        return newItem;
    },

      deleteItem: function(type, id){
        var ids, index;
        //id = 3
        //ids = [1 2 3 5 6]

        ids = data.allItems[type].map(function(current){
            return current.id;
        });

        index = ids.indexOf(id);

        if(index !== -1){
            data.allItems[type].splice(index, 1);
        }

      },

    calculateBudget: function(){

        // calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');

        //calculate the budget: income - expenses
        if(data.totals.inc > 0){
        data.budget = data.totals.inc - data.totals.exp;
        }else{
            data.percentage = -1;
        }

        //calculate the percentage of income that we spend
        data.percentage = Math.round(100 * (data.totals.exp / data.totals.inc));

        //
    },

    calculatePercentages: function(){

        /*
        a = 20
        b=10
        c=40
        income=100
        a=20/100=20%
        b=10/100=10%
        c=40/100=40%
        */

        data.allItems.exp.forEach(function(curr){
          curr.calcPercentage(data.totals.inc);
        });
    },

      getPercentages: function(){
        var allpercentages =  data.allItems.exp.map(function(curr){
          return curr.getPercentage();
        });
        return allpercentages;
      },

      getBudget: function(){

        return {
            budget: data.budget,
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            percentage: data.percentage
        }

    },

    testing: function(){
      console.log(data);
    }
  };

})();

// UI Controller
var uiController = (function(){

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel:'.item__percentage',
    dateLabel: '.budget__title--month'
  };

var formatNumber = function(num, type){
    var numSplit, int, dec, type;
    /*
    + or - befroe the number
    exactly 2 decimal points
    comma seperating the thousands

    2310.4568 -> + 2,310.46
    2000 -> 2,000.00
    */

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if(int.length > 3){
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);// input, output 2,310
    }

    dec = numSplit[1];

    return   (type === 'exp' ? '-' : '+') + ' ' + int + '.' +  dec;
  };

  var nodeListForEach = function(list, callback){
    for(var i = 0; i< list.length; i++){
      callback(list[i], i);
    }
  };

  return {
    getInput: function(){
      return {
         type: document.querySelector(DOMStrings.inputType).value,//will be either inc or exp
         description: document.querySelector(DOMStrings.inputDescription).value,
         value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },
    addListItem: function(obj, type){
      var html, newHtml, element;
      // Create HTML string with placeholder text
      if(type === 'inc'){
         element = DOMStrings.incomeContainer;

         html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    }else if (type === 'exp'){
        element = DOMStrings.expensesContainer;

        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    }
      //replace placeholder text with some actual data
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      //insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

      deleteListItem: function(selectorID){

          var el = document.getElementById(selectorID);
          el.parentNode.removeChild(el);

      },

      clearFields: function(){
        var fields, fieldsArr;


        fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

        fieldsArr = Array.prototype.slice.call(fields);

        fieldsArr.forEach(function(current, index, array){
            current.value = "";
        });

        fieldsArr[0].focus();
      },

      displayBudget: function(obj){
        var type;
        obj.budget > 0 ? type = 'inc' :  type = 'exp';

          document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
          document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
          document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

          if(obj.percentage > 0){ document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
          }else{
              document.querySelector(DOMStrings.percentageLabel).textContent = '---';
          }
      },

      displayPercentages: function(percentages){

        var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);

        nodeListForEach(fields, function(curr, index){
          if(percentages[index] > 0){
            curr.textContent = percentages[index] + '%';
          }else{
            curr.textContent = '---';
          }
        });
      },

      displayMonth: function(){
        var now, year, month, months;

        now = new Date();
        //var christmas = new Date(2019, 11, 25);
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month =  now.getMonth();


        year = now.getFullYear();
        document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
      },

      changedType: function(){

          var fields = document.querySelectorAll(
            DOMStrings.inputType + ',' + DOMStrings.inputDescription + ',' + DOMStrings.inputValue);

            nodeListForEach(fields, function(curr){
              curr.classList.toggle('red-focus');
            });
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
      },

      getDOMStrings: function(){
        return DOMStrings;
      }
  };
})();



//Global App Controller
var appController = (function(budgetCtrl, UICtrl){

    var setUpEventListeners = function(){
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which === 13){
               ctrlAddItem();
             }
        });
         document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

         document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

     };

    var updatePercentages = function(){

        // 1. calcuate the percentages
        budgetCtrl.calculatePercentages();

        //2. read them from the budgetController
      var percentages = budgetCtrl.getPercentages();

        //3. update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };


    var updateBudget = function(){
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. Return the budget
        var budget = budgetCtrl.getBudget();

        //3. display the budget on UI
        UICtrl.displayBudget(budget);
    };


    var ctrlAddItem = function() {
        var input, newItem;

      //1. Get the field input data
       input = UICtrl.getInput();

       if(input.description !== "" && !isNaN(input.value) && input.value > 0){
          //2. Add the item to the budget Controller
           newItem = budgetCtrl.addItem(input.type, input.description, input.value);

          //3. Add the new item to the user interface
            UICtrl.addListItem(newItem, input.type);

          //4. clear the fields
            UICtrl.clearFields();

          // 5 Calculate and update budget
            updateBudget();

           //6. calculate and update the percentages
           updatePercentages();
        }
    };


    var ctrlDeleteItem = function(event){
    var itemId, splitId, type, ID;

    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(itemId){
        //the format is inc-1
        splitId = itemId.split('-');
        type = splitId[0];
        ID = parseInt(splitId[1]);

        //1. Delete the item from the data structure
        budgetCtrl.deleteItem(type, ID);

        //2. Delete the item from the UI
        UICtrl.deleteListItem(itemId)

        //3. update and show the new budget
        updateBudget();

        //4. calculate and update percentages
        updatePercentages();

    }

    };


    return {
      init: function(){
        console.log("Application has started");
          UICtrl.displayMonth();
          UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
          });
          setUpEventListeners();
      }
    };

})(budgetController, uiController);

appController.init();
