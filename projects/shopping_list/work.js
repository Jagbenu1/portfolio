
var listController = (function(){
  var Item = function(id, item){
    this.id = id;
    this.item = item;
  }

  var data = {
    list: {
      item: []
    }
  };

  return {
    addItem: function(it){
      var newItem, ID;

      if(data.list.item.length > 0){
        ID = data.list.item[data.list.item.length - 1].id + 1;
      }else{
        ID = 0;
      }

      newItem = new Item(ID, it);
      data.list.item.push(newItem);

      return newItem;
    },

    deleteItem: function(id){
        var ids, index;

        ids = data.list.item.map(function(current){
            return current.id;
        });

        index = ids.indexOf(id);

        if(index !== -1){
            data.list.item.splice(index, 1);
        }
    },

    testing: function(){
      console.log(data);
    }
  };
})();

var uiController = (function(){
  var DOMStrings = {
    inputItem: '.add__input',
    inputBtn: '.add__btn',
    dateLabel: '.list__Title--Month',
    itemContainer: '.list',
    container: '.container',
  };

return{
  getInput: function(){
    return {
      item: document.querySelector(DOMStrings.inputItem).value
    }
  },

  addListItem: function(obj){
    var html, newHtml, element;

    element = DOMStrings.itemContainer;

    html = '<div class="item clearfix" id="item-%id%"><span class="item__check"></span><div class="item__description">%item%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>';

    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%item%', obj.item);

    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
  },

  deleteListItem: function(selectorID){
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
  },

  clearFields: function(){
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMStrings.inputItem);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current){
        current.value = "";
      });

      fieldsArr[0].focus();
  },
  dislplayMonth: function(){
    var now, year, month, day, months;

    now = new Date();

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    year = now.getFullYear();
    month = now.getMonth();
    day = now.getDate();

    document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + day + ' ' + year;
  },

  getDOMStrings: function(){
    return DOMStrings;
  }
};
})();

var appController = (function(listCtrl, UICtrl){

  var startEventListeners = function(){
      var DOM = UICtrl.getDOMStrings();
      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

      document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
               ctrlAddItem();
             }
         });

         document.querySelector(DOM.itemContainer).addEventListener('click', ctrlDeleteItem);

         $(function(){
           $(DOM.itemContainer).on('click', '.item__check', function(event){
             $(event.currentTarget).toggleClass('complete');
           });
         });

      };

  var ctrlAddItem = function(){
    var input, newItem;

    input = UICtrl.getInput();

    if(input.item !== "" ){

      newItem = listCtrl.addItem(input.item);

      UICtrl.addListItem(newItem)

      UICtrl.clearFields();
    }
  };

  var ctrlDeleteItem = function(event){
    var itemId, splitId, item, ID;
    itemId = event.target.parentNode.parentNode.parentNode.id;

    if(itemId){
      // the format os item-1
      splitId = itemId.split('-');
      ID = parseInt(splitId[1]);

      listCtrl.deleteItem(ID);

      UICtrl.deleteListItem(itemId);
    }

    // console.log(itemId);
  };

return {
  init: function(){
    console.log("This has begun.");
    UICtrl.dislplayMonth();
    startEventListeners();
    // UICtrl.check();
  }
};
})(listController, uiController);

appController.init();
