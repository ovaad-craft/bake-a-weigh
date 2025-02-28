/*

Category Component


PURPOSE :
 > Presents a group of items and or sub categories of items to the user. 


ELEMENTS :
 > Add Item Button
 > Edit Category Button
 > Category Item Component
 > SubCategory Button
 > Back Button


VIEWS : none


INTERACTIVITY :
 > Emits data about item up through an @Output when a Category Item is clicked.
 > Emits data about category through an @Output to parent when "add item" button is clicked.
 > Refreshes list of items when a subcategory button is clicked.
 > Has "next, prev" functionality for navigating sub categories of items.


FUNCTIONALITY :
 > Keep track of user's navigation through deep nested categories.
 > Update CurrentItem variable to display user's selections in template.


SENDS DATA TO :
 > Parent Component


GETS DATA FROM :
 > Parent Component


ROUTES TO : nowhere


USER STORY :
 > User should see name of current category at the top of the component.
 > User should see an edit button next to the name of the category.
 > If the current category has subcategories the subcategory container should be visible.
 > If the current category has subcategories the item container should be invisible.
 > User should see an "add" button as the first element in the item container.
 > If the current category doesn't have any subcategories the subcategory container should be invisible.
 > If the current category doesn't have any subcategories the item container should be visible.
 > If the User is at the top level of a category the "back" button should be invisible.
 > If the User is viewing a subcategory the "back" button should be visible.
 > When User clicks "edit" button data regarding the path to the current category should be emitted to parent component.
 > When User clicks on an item data regarding the path to the current item should be emitted to parent component.
 > When User clicks on a subcategory the CurrentItem should be updated with the selected category's data.
 > When User clicks "add" button the parent component must be notified.



*/







import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { CategoryIndex, CategoryKey, IngredientProfile } from '@bake-a-weigh/site-types';





const DemoIngredients : IngredientProfile[] = [
  {
    name : '100% Pure Rawn and Unfiltered Honey',
    id : 'honey_id1100011',
    brand : `Nate's Honey CO`,
    nutrition : {
      servingSize : {
        amount : 21,
        weightType : 'g'
      },
      calories : 70,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 18,
          weightType : 'g',
          percentage : 7
        },
        nutrients : {
          name : 'Total Sugars',
          totalAmount : {
            amount     : 15,
            weightType : 'g',
            percentage : 30
          }
        }
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : [ 'Honey' ]
    },
    locations : ['honeys_category_id1100011']
  },
  {
    name : 'Ground Flax Seed',
    brand : 'Badia',
    id : 'flax_seed_id1100011',
    nutrition : {
      servingSize : {
        amount : 14,
        weightType : 'g',
      },
      calories : 70,
      totalFat : {
        totalAmount : {
          amount : 6,
          weightType : 'g',
          percentage : 8
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 0.5,
            weightType : 'g'
          },
          {
            name : 'Trans Fat',
            amount : 0,
            weightType : 'g'
          },
          {
            name : 'Polyunsaturated Fat',
            amount : 4,
            weightType : 'g'
          }
        ]
      },
      cholesterol : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 4,
          weightType : 'g',
          percentage : 1
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            amount : 4,
            weightType : 'g',
            percentage : 14
          },
          {
            name : 'Total Sugars',
            amount : 0,
            weightType : 'g'
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 3,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin D',
          amount : 0,
          weightType : 'mcg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 36,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Iron',
          amount : 1,
          weightType : 'mg',
          percentage : 6
        },
        {
          name : 'Potassium',
          amount : 114,
          weightType : 'mg',
          percentage : 2
        }
      ],
      ingredients : [ 'Organic Ground Flax Seed' ]
    },
    data : {
      species : 'Flax'
    },
    locations : ['seeds_category_id1100011']
  },
  {
    name : 'Sea Salt Fine Crystals',
    brand : 'Roland',
    id : 'sea_salt_id1100011',
    nutrition : {
      servingSize : {
        amount : 1.5,
        weightType : 'g'
      },
      calories : 0,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 590,
          weightType : 'mg',
          percentage : 26
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : [ 'Sea Salt', 'Magnesium Carbonate' ]
    },
    data : {
      type : 'sea sale',
      consistency : 'fine crystal',
      sodium : {
        servingSize : 1.5,
        servingSizeWeight : 'g',
        amount : 590,
        amountWeightType : 'mg'
      },
      iodized : false
    },
    locations : ['sea_salts_category_id1100011']
  },
  {
    name : '100% Puse Sesame Seed Oil',
    brand : 'Shirakiku',
    id : 'black_sesame_seed_oil_id1100011',
    nutrition : {
      servingSize : {
        amount : 15,
        weightType : 'ml'
      },
      calories : 120,
      totalFat : {
        totalAmount : {
          amount : 14,
          weightType : 'g',
          percentage : 18
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 2,
            weightType : 'g',
            percentage : 10
          }
        ]
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : [ 'Black Sesame Seed Oil' ]
    },
    data: {
      type : 'sesame seed',
      state : 'liquid'
    },
    locations : ['sesame_seed_oils_category_id1100011']
  },
  {
    name : 'Thyme',
    brand : 'Chefzito',
    id : 'thyme_id1100011',
    nutrition : {
      servingSize : {
        amount : 0.3,
        weightType : 'g'
      },
      calories : 0,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          },
          {
            name : 'Trans Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          }
        ]
      },
      cholesterol : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            amount : 0,
            weightType : 'g',
            percentage : 0
          },
          {
            name : 'Sugars',
            amount : 0,
            weightType : 'g'
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin A',
          amount : 0,
          weightType : 'mcg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 0,
          weightType : 'mg',
          percentage : 0
        },
        {
          name : 'Iron',
          amount : 0,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Vitamin C',
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      ],
      ingredients : [ 'Thyme' ]
    },
    data: {
      species : 'Thymus vulgaris',
      part : 'leaf'
    },
    locations : ['dried_herbs_category_id1100011']
  },
  {
    name : 'California Sun Dried Raisins',
    brand : 'SunMaid',
    id : 'raisins_id1100011',
    nutrition : {
      servingSize : {
        amount : 40,
        weightType : 'g'
      },
      calories : 120,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          },
          {
            name : 'Trans Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          }
        ]
      },
      cholesterol : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 10,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 31,
          weightType : 'g',
          percentage : 11
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            amount : 2,
            weightType : 'g',
            percentage : 6
          },
          {
            name : 'Total Sugars',
            amount : 26,
            weightType : 'g'
          },
          {
            name : 'Added Sugars',
            amount : 0,
            weightType : 'g'
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 1,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin D',
          amount : 0,
          weightType : 'mcg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 20,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Iron',
          amount : 0.7,
          weightType : 'mg',
          percentage : 4
        },
        {
          name : 'Potassium',
          amount : 300,
          weightType : 'mg',
          percentage : 6
        }
      ],
      ingredients : [ 'Raisins' ]
    },
    data : {
      type : 'fruit',
      state : 'dried'
    },
    locations : ['dry_fruit_category_id1100011']
  },
  {
    name : 'California Golden Raisins',
    brand : 'SunMaid',
    id : 'golden_raisins_id1100011',
    nutrition : {
      servingSize : {
        amount : 40,
        weightType : 'g'
      },
      calories : 120,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          },
          {
            name : 'Trans Fat',
            amount : 0,
            weightType : 'g',
            percentage : 0
          }
        ]
      },
      cholesterol : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 10,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 31,
          weightType : 'g',
          percentage : 11
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            amount : 2,
            weightType : 'g',
            percentage : 6
          },
          {
            name : 'Total Sugars',
            amount : 26,
            weightType : 'g'
          },
          {
            name : 'Added Sugars',
            amount : 0,
            weightType : 'g'
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 1,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin D',
          amount : 0,
          weightType : 'mcg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 20,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Iron',
          amount : 0.7,
          weightType : 'mg',
          percentage : 4
        },
        {
          name : 'Potassium',
          amount : 300,
          weightType : 'mg',
          percentage : 6
        }
      ],
      ingredients : [ 'Raisins' ]
    },
    data : {
      type : 'fruit',
      state : 'dried'
    },
    locations : ['dry_fruit_category_id1100011']
  },
  {
    name : 'Iodized Sea Salt',
    brand : 'Morton',
    id : 'iodized_sea_salt_id1100011',
    nutrition : {
      servingSize : {
        amount : 1.3,
        weightType : 'g'
      },
      calories : 0,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 530,
          weightType : 'mg',
          percentage : 23
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Iodine',
          amount : 60,
          weightType : 'mcg',
          percentage : 40
        }
      ],
      ingredients : [
        'Sea Salt',
        'Yellow Prussiate of soda (anticaking agent)',
        'Dextrose',
        'Potassium Iodide'
      ]
    },
    locations : ['sea_salts_category_id1100011']
  },
  {
    name : 'Monkfruit Sweetener',
    brand : 'Lakanto',
    id : 'monkfruit_sweetener_id1100011',
    nutrition : {
      servingSize : {
        amount : 30,
        weightType : 'g'
      },
      calories : 0,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 30,
          weightType : 'g',
          percentage : 11
        },
        nutrients : [
          {
            name : 'Sugar Alcohol',
            amount : 30,
            weightType : 'g'
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : [ 'Monkfruit Extract', 'Erythritol' ]
    },
    locations : ['monkfruit_sweetener_category_id1100011']
  },
  {
    name : '100% Extra Virgin Olive Oil',
    brand : 'Iberia',
    id : 'olive_oil_id1100011',
    nutrition : {
      servingSize : {
        amount : 15,
        weightType : 'ml'
      },
      calories : 130,
      totalFat : {
        totalAmount : {
          amount : 14,
          weightType : 'g',
          percentage : 18
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            amount : 2,
            weightType : 'g',
            percentage : 10
          },
          {
            name : 'Trans Fat',
            amount : 0,
            weightType : 'g',
          },
          {
            name : 'Polyunsaturated Fat',
            amount : 1,
            weightType : 'g'
          },
          {
            name : 'Monounsaturated Fat',
            amount : 11,
            weightType : 'g'
          }
        ]
      },
      sodium : {
        totalAmount : {
          amount : 0,
          weightType : 'mg',
          percentage : 0
        }
      },
      totalCarbohydrates : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        }
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin E',
          amount : 36,
          weightType : 'mg',
          percentage : 20
        }
      ],
      ingredients : [ '100% Extra Virgin Olive Oil' ]
    },
    data : {
      type : 'olive',
      state : 'liquid'
    },
    locations : ['']
  }
]



const DemoKeys : CategoryKey[] = [
  {
    name: 'Flours',
    id: 'flours_category_id1100011',
    removable: false
  },
  {
    name: 'Salts',
    id: 'salts_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Sea Salts',
        id : 'sea_salts_category_id1100011',
        removable: true,
      },
      {
        name : 'Kosher Salts',
        id : 'kosher_salts_category_id1100011',
        removable: true,
      },
      {
        name : 'Table Salts',
        id : 'table_salts_category_id1100011',
        removable: true,
      }
    ]
  },
  {
    name: 'Sugars',
    id: 'sugars_category_id110001',
    removable: false
  },
  {
    name: 'Oils',
    id: 'oils_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Sesame Seed',
        id : 'sesame_seed_oils_category_id1100011',
        removable: true,
      }
    ]
  },
  {
    name: 'Grains',
    id: 'grains_category_id1100011',
    removable: false
  },
  {
    name: 'Nuts',
    id: 'nuts_category_id1100011',
    removable: false
  },
  {
    name: 'Seeds',
    id: 'seeds_category_id1100011',
    removable: false
  },
  {
    name: 'Dairy',
    id: 'dairy_category_id1100011',
    removable: false
  },
  {
    name: 'Produce',
    id: 'produce_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Fruit',
        id : 'dried_produce_category_id1100011',
        removable: true,
        subCategories : [
          {
            name : 'Dried',
            id : 'dried_fruit_category_id1100011',
            removable: true
          },
          {
            name : 'Fresh',
            id : 'fresh_fruit_category_id1100011',
            removable: true
          }
        ]
      },
      {
        name : 'Vegetables',
        id : 'fresh_produce_category_id1100011',
        removable: true,
        subCategories : [
          {
            name : 'Fresh',
            id : 'fresh_vegetables_category_id1100011',
            removable: true
          },
          {
            name : 'Dried',
            id : 'dried_vegetables_category_id1100011',
            removable: true
          }
        ]
      }
    ]
  },
  {
    name: 'Herbs',
    id: 'herbs_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Dried',
        id : 'dried_herbs_category_id1100011',
        removable: true
      },
      {
        name : 'Fresh',
        id : 'fresh_herbs_category_id1100011',
        removable: true
      }
    ]

  },
  {
    name: 'Extracts',
    id: 'extracts_category_id1100011',
    removable: false
  },
  {
    name : 'Sweeteners',
    id : 'sweeteners_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Honeys',
        id : 'honeys_category_id1100011',
        removable: true,
      },
      {
        name : 'Monkfruit',
        id : 'monkfruit_sweetener_category_id1100011',
        removable: true,
      }
    ]
  }
]

const DemoKeysEmpty : CategoryKey[] = [
  {
    name: 'Flours',
    id: 'flours_category_id1100011',
    removable: false
  },
  {
    name: 'Salts',
    id: 'salts_category_id1100011',
    removable: false
  },
  {
    name: 'Sugars',
    id: 'sugars_category_id110001',
    removable: false
  },
  {
    name: 'Oils',
    id: 'oils_category_id1100011',
    removable: false
  },
  {
    name: 'Grains',
    id: 'grains_category_id1100011',
    removable: false
  },
  {
    name: 'Nuts',
    id: 'nuts_category_id1100011',
    removable: false
  },
  {
    name: 'Seeds',
    id: 'seeds_category_id1100011',
    removable: false
  },
  {
    name: 'Dairy',
    id: 'dairy_category_id1100011',
    removable: false
  },
  {
    name: 'Produce',
    id: 'produce_category_id1100011',
    removable: false
  },
  {
    name: 'Herbs',
    id: 'herbs_category_id1100011',
    removable: false
  },
  {
    name: 'Extracts',
    id: 'extracts_category_id1100011',
    removable: false
  },
  {
    name : 'Sweeteners',
    id : 'sweeteners_category_id1100011',
    removable: false
  }
]



const DemoCategory : CategoryIndex[] = [
  {
    name: 'Salts',
    id: 'salts_category_id1100011',
    subCategories: [
      {
        name: 'Sea Salts',
        id: 'sea_salts_id220022',
        items: [
          {
            name: 'sea salt 01',
            id: 'sea_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 02',
            id: 'sea_salt_02',
            photo: 'some-photo'
          },
          {
            name: 'sea salt 03',
            id: 'sea_salt_03',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 04',
            id: 'sea_salt_04',
            icon: 'some-icon'
          },
          {
            name: 'sea salt 05',
            id: 'sea_salt_05',
            photo: 'some-photo'
          },
          {
            name: 'sea salt 06',
            id: 'sea_salt_06',
            icon: 'some-icon'
          },
        ],
        icon: 'some-icon'
      },
      {
        name: 'Kosher Salts',
        id: 'kosher_salts_id220022',
        items: [
          {
            name: 'kosher salt 01',
            id: 'kosher_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'kosher salt 02',
            id: 'kosher_salt_02',
            photo: 'some-photo'
          }
        ],
        icon: 'some-icon'
      },
      {
        name: 'Table Salts',
        id: 'table_salts_id220022',
        items: [
          {
            name: 'table salt 01',
            id: 'table_salt_01',
            icon: 'some-icon'
          },
          {
            name: 'table salt 02',
            id: 'table_salt_02',
            photo: 'some-photo'
          },
          {
            name: 'table salt 03',
            id: 'table_salt_03',
            photo: 'some-photo'
          }
        ],
        icon: 'some-icon'
      }
    ]
  }
]





@Injectable({
  providedIn: 'root'
})
export class IngredientManagerService {

  private IngredientData    : IngredientProfile[]               = [];
  private CategoryKeys      : CategoryKey[]                     = [];
  private CategoryIndexData : WritableSignal< CategoryIndex[] > = signal( [] );
  CategoryIndex             : Signal< CategoryIndex[] >         = computed( ()=> this.CategoryIndexData() );

  IngredientEditorToggler : WritableSignal< boolean > = signal( false );
  CategoryEditorToggler   : WritableSignal< boolean > = signal( false );





  // loadIngredientData(){}

  // loadCategoryKey(){}

  // loadCategoryIndexData(){}

  // generateCategoryIndexData(){}





  // toggleIngredientEditorOn(){}

  // toggleIngredientEditorOff(){}

  // toggleCategoryEditorOn(){}

  // toggleCategoryEditorOff(){}





  // addItemToIngredientData(){}

  // editIngredientDataItem(){}

  // removeItemFromIngredientData(){}




  // addCategoryToKey(){}

  // addIngredientToKey(){}

  // editCategoryInKey(){}

  // removeCategoryFromKey(){}

  // removeIngredientFromKey(){}

  


  // addCategoryToIndex(){}

  // addIngredientToIndex(){}

  // editCategoryInIndex(){}

  // removeCategoryFromIndex(){}

  // removeIngredientFromIndex(){}



}
