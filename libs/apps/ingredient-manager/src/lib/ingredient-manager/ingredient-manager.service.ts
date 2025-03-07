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
    name : '100% Pure Raw and Unfiltered Honey',
    brand : `Nate's Honey CO`,
    id : 'honey_id1100011',
    icon : 'some icon',
    profileType : 'sweetener',
    data : {
      type : 'honey',
      form : 'liquid'
    },
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
        nutrients : [
          {
            name : 'Total Sugars',
            totalAmount : {
              amount     : 15,
              weightType : 'g',
              percentage : 30
            }
          }
        ]
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
    icon : 'some icon',
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
            totalAmount : {
              amount : 0.5,
              weightType : 'g'
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Polyunsaturated Fat',
            totalAmount : {
              amount : 4,
              weightType : 'g'
            }
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
            totalAmount : {
              amount : 4,
              weightType : 'g',
              percentage : 14
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
    profileType : 'seed',
    data : {
      species : 'Flax'
    },
    locations : ['seeds_category_id1100011']
  },
  {
    name : 'Sea Salt Fine Crystals',
    brand : 'Roland',
    id : 'sea_salt_id1100011',
    icon : 'some icon',
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
    profileType : 'salt',
    data : {
      type : 'sea salt',
      consistency : 'fine crystal',
      sodium : {
        servingSize : {
          amount : 1.5,
          weightType : 'g'
        },
        amount : {
          amount : 590,
          weightType : 'mg'
        }
      },
      iodized : false
    },
    locations : ['sea_salts_category_id1100011']
  },
  {
    name : '100% Puse Sesame Seed Oil',
    brand : 'Shirakiku',
    id : 'black_sesame_seed_oil_id1100011',
    icon : 'some icon',
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
            totalAmount : {
              amount : 2,
              weightType : 'g',
              percentage : 10
            }
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
    profileType : 'oil',
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
    icon : 'some icon',
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
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
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
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          },
          {
            name : 'Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
    profileType : 'herb',
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
    icon : 'some icon',
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
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
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
            totalAmount : {
              amount : 2,
              weightType : 'g',
              percentage : 6
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 26,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
    profileType : 'produce',
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
    icon : 'some icon',
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
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
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
            totalAmount : {
              amount : 2,
              weightType : 'g',
              percentage : 6
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 26,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
    profileType : 'produce',
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
    icon : 'some icon',
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
    icon : 'some icon',
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
            totalAmount : {
              amount : 30,
              weightType : 'g'
            }
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
    profileType : 'sweetener',
    data:{
      type : 'Monkfruit',
      form : 'powder'
    },
    locations : ['monkfruit_sweetener_category_id1100011']
  },
  {
    name : '100% Extra Virgin Olive Oil',
    brand : 'Iberia',
    id : 'olive_oil_id1100011',
    icon : 'some icon',
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
            totalAmount : {
              amount : 2,
              weightType : 'g',
              percentage : 10
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Polyunsaturated Fat',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
          },
          {
            name : 'Monounsaturated Fat',
            totalAmount : {
              amount : 11,
              weightType : 'g'
            }
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
    profileType : 'oil',
    data : {
      type : 'olive',
      state : 'liquid'
    },
    locations : ['olive_oils_category_id1100011']
  },
  {
    name : 'Double Active Baking Powder',
    brand : 'Clabber Girl',
    id : 'baking_powder_id1100011',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 0.6,
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
          amount : 60,
          weightType : 'mg',
          percentage : 3
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
      ingredients : [
        'Corn Starch',
        'Sodium Bicarbonate',
        'Sodium Aluminum Sulfate',
        'Monocalcium Phosphate'

      ]
    },
    locations : ['']
  },
  {
    name : '100% Organic Sesame Seed',
    brand : 'Morton & Bassett Spices',
    id : 'sesame_seed_id1100011',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 0.8,
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
      ingredients : ['Certified 100% Organic Sesame Seed']
    },
    locations : ['seeds_category_id1100011']
  },
  {
    name : 'Stevia Inte The Raw',
    brand : 'In The Raw',
    id : 'stevia_id1100011',
    icon : 'some icon',
    nutrition: {
      servingSize : {
        amount : 1,
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
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
          amount : 1,
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
      ingredients : ['Dextrose', 'Stevia Leaf Extract']
    },
    profileType : 'sweetener',
    data :{
      type : 'stevia',
      form : 'powder'
    },
    locations: ['stevia_sweetener_category_id1100011']
  },
  {
    name : 'Organic Stevia',
    brand : 'Wholesome Sweeteners',
    id : 'organic_stevia_id1100011',
    icon : 'some icon',
    nutrition: {
      servingSize : {
        amount : 1,
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
          amount : 1,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 0.8,
              weightType : 'g'
            }
          },
          {
            name : 'Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : [
        'Organic Agave Inulin',
        'Organic Stevia Extract (Stevia Rebaudiana)',
        'Silica'
      ]
    },
    profileType : 'sweetener',
    data :{
      type : 'stevia',
      form : 'powder'
    },
    locations: ['stevia_sweetener_category_id1100011']
  },
  {
    name : 'Dark Brown Sugar',
    brand : 'Good & Gather',
    id : 'dark_brown_sugar_id1100011',
    icon : 'some icon',
    nutrition: {
      servingSize : {
        amount : 8,
        weightType : 'g'
      },
      calories : 30,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
          amount : 8,
          weightType : 'g',
          percentage : 3
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 8,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 8,
              weightType : 'g',
              percentage : 16
            }
          }
        ],
      },
      protein : {
        totalAmount : {
          amount : 0,
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
          name : 'Iron',
          amount : 0,
          weightType : 'mg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 0,
          weightType : 'mg'
        },
        {
          name : 'Potassium',
          amount : 0,
          weightType : 'mg'
        }
      ],
      ingredients : ['Sugar', 'Molasses']
    },
    profileType : 'sugar',
    data : {
      type : 'cane',
      info : {
        type : 'dark brown',
        consistency : 'small granules'
      },
      source : 'sugar cane'
    },
    locations : ['dark_brown_sugars_category_id1100011']
  },
  {
    name : 'Light Brown Sugar',
    brand : 'Good & Gather',
    id : 'dark_brown_sugar_id1100011',
    icon : 'some icon',
    nutrition: {
      servingSize : {
        amount : 8,
        weightType : 'g'
      },
      calories : 30,
      totalFat : {
        totalAmount : {
          amount : 0,
          weightType : 'g',
          percentage : 0
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
          amount : 8,
          weightType : 'g',
          percentage : 3
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 8,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 8,
              weightType : 'g',
              percentage : 16              
            }
          }
        ],
      },
      protein : {
        totalAmount : {
          amount : 0,
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
          name : 'Iron',
          amount : 0,
          weightType : 'mg',
          percentage : 0
        },
        {
          name : 'Calcium',
          amount : 0,
          weightType : 'mg'
        },
        {
          name : 'Potassium',
          amount : 0,
          weightType : 'mg'
        }
      ],
      ingredients : ['Sugar', 'Molasses']
    },
    profileType : 'sugar',
    data : {
      type : 'cane',
      info : {
        type : 'light brown',
        consistency : 'small granules'
      },
      source : 'sugar cane'
    },
    locations : ['light_brown_sugars_category_id1100011']
  },
  {
    name : `Premium Pure Cane Baker's Sugar`,
    brand : 'C&H',
    id : 'bakers_sugar_id1100011',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 8,
        weightType : 'g'
      },
      calories : 30,
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
          amount : 8,
          weightType : 'g',
          percentage : 3
        },
        nutrients : [
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 8,
              weightType : 'g'
            }
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 0,
          weightType : 'g'
        }
      },
      ingredients : ['Cane Sugar']
    },
    profileType : 'sugar',
    data : {
      type : 'cane',
      info : {
        type : 'white',
        consistency : 'small granules'
      },
      source : 'sugar cane'
    },
    locations : ['granulated_sugars_category_id1100011']
  },
  {
    name : 'Semolina Flour',
    brand : `Bob's Red Mill`,
    id : 'semolina_flour_id1100011',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 45,
        weightType : 'g'
      },
      calories : 160,
      totalFat : {
        totalAmount : {
          amount : 1,
          weightType : 'g',
          percentage : 1
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
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
          amount : 33,
          weightType : 'g',
          percentage : 12
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 1,
              weightType : 'g',
              percentage : 4
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 6,
          weightType : 'g'
        }
      },
      vitaminsAndMinerals : [
        {
          name : 'Vitamin D',
          amount : 0,
          weightType : 'mcg'
        },
        {
          name : 'Calcium',
          amount : 13,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Iron',
          amount : 2,
          weightType : 'mg',
          percentage : 10
        },
        {
          name : 'Potassium',
          amount : 115,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Thiamin',
          amount : 0.5,
          weightType : 'mg',
          percentage : 40
        },
        {
          name : 'Riboflavin',
          amount : 0.2,
          weightType : 'mcg',
          percentage : 15
        },
        {
          name : 'Niacin',
          amount : 4,
          weightType : 'mg',
          percentage : 25
        },
        {
          name : 'Folate',
          amount : 341,
          weightType : 'mcg',
          percentage : 90
        },
        {
          name : 'Folic Acid',
          amount : 119,
          weightType : 'mcg'
        }
      ],
      ingredients : [
        'Enriched Durum Flour (Durum Wheat)',
        'Niacin',
        'Iron',
        'Thiamin Mononitrate',
        'Riboflavin',
        'Folic Acid'
      ]
    },
    profileType : 'flour',
    data : {
      type : 'wheat',
      classification : '00',
      bleached : false
    },
    locations : ['semolina_flours_category_id1100011']
  },
  {
    name : 'Steel Cut Oats',
    brand : 'Quaker Oats',
    id : 'oats_id1100011',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 40,
        weightType : 'g'
      },
      calories : 150,
      totalFat : {
        totalAmount : {
          amount : 3,
          weightType : 'g',
          percentage : 4
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            totalAmount : {
              amount : 0.5,
              weightType : 'g',
              percentage : 3
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Polyunsaturated Fat',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
          },
          {
            name : 'Monounsaturated Fat',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
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
          amount : 27,
          weightType : 'g',
          percentage : 10
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 4,
              weightType : 'g',
              percentage : 13
            }
          },
          {
            name : 'Soluble Fiber',
            totalAmount : {
              amount : 2,
              weightType : 'g'
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 5,
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
          name : 'Iron',
          amount : 1.5,
          weightType : 'mg',
          percentage : 8
        },
        {
          name : 'Thiamin',
          amount : 0.2,
          weightType : 'mg',
          percentage : 15,
        },
        {
          name : 'Magnesium',
          amount : 40,
          weightType : 'mg',
          percentage : 10
        },
        {
          name : 'Calcium',
          amount : 20,
          weightType : 'mg',
          percentage : 0
        },
        {
          name : 'Potassium',
          amount : 150,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Phosphorus',
          amount : 130,
          weightType : 'mg'
        }
      ],
      ingredients : ['Steel Cut Oats']
    },
    locations : ['oats_category_id1100011']
  },
  {
    name : 'Old Fashioned Rolled Oats',
    brand : 'Quaker Oats',
    id : 'oats_id2200022',
    icon : 'some icon',
    nutrition : {
      servingSize : {
        amount : 40,
        weightType : 'g'
      },
      calories : 150,
      totalFat : {
        totalAmount : {
          amount : 3,
          weightType : 'g',
          percentage : 4
        },
        nutrients : [
          {
            name : 'Saturated Fat',
            totalAmount : {
              amount : 0.5,
              weightType : 'g',
              percentage : 3
            }
          },
          {
            name : 'Trans Fat',
            totalAmount : {
              amount : 0,
              weightType : 'g'
            }
          },
          {
            name : 'Polyunsaturated Fat',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
          },
          {
            name : 'Monounsaturated Fat',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
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
          amount : 27,
          weightType : 'g',
          percentage : 10
        },
        nutrients : [
          {
            name : 'Dietary Fiber',
            totalAmount : {
              amount : 4,
              weightType : 'g',
              percentage : 13
            }
          },
          {
            name : 'Soluble Fiber',
            totalAmount : {
              amount : 2,
              weightType : 'g'
            }
          },
          {
            name : 'Total Sugars',
            totalAmount : {
              amount : 1,
              weightType : 'g'
            }
          },
          {
            name : 'Added Sugars',
            totalAmount : {
              amount : 0,
              weightType : 'g',
              percentage : 0
            }
          }
        ]
      },
      protein : {
        totalAmount : {
          amount : 5,
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
          name : 'Iron',
          amount : 1.5,
          weightType : 'mg',
          percentage : 8
        },
        {
          name : 'Thiamin',
          amount : 0.2,
          weightType : 'mg',
          percentage : 15,
        },
        {
          name : 'Magnesium',
          amount : 40,
          weightType : 'mg',
          percentage : 10
        },
        {
          name : 'Calcium',
          amount : 20,
          weightType : 'mg',
          percentage : 0
        },
        {
          name : 'Potassium',
          amount : 150,
          weightType : 'mg',
          percentage : 2
        },
        {
          name : 'Phosphorus',
          amount : 130,
          weightType : 'mg'
        }
      ],
      ingredients : ['Whole Grain Rolled Oats']
    },
    locations : ['oats_category_id1100011']
  },
  {
    name : 'Extra Virgin Olive Oil',
    brand : 'Kroger',
    id : 'olive_oil_id2200022',
    icon : 'some icon',
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
            totalAmount : {
              amount : 2,
              weightType : 'g',
              percentage : 10
            }
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
      ingredients : ['Extra Virgin Olive Oil']
    },
    locations : ['olive_oils_category_id1100011']
  }
]



const DemoKeys : CategoryKey[] = [
  {
    name: 'Flours',
    id: 'flours_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Semolina Flours',
        id : 'semolina_flours_category_id1100011',
        icon : 'some icon',
        removable : true
      },
      {
        name : '00 Flours',
        id : '00_flours_category_id1100011',
        icon : 'some icon',
        removable : true
      }
    ]
  },
  {
    name: 'Salts',
    id: 'salts_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Sea Salts',
        id : 'sea_salts_category_id1100011',
        icon : 'some icon',
        removable: true,
      },
      {
        name : 'Kosher Salts',
        id : 'kosher_salts_category_id1100011',
        icon : 'some icon',
        removable: true,
      },
      {
        name : 'Table Salts',
        id : 'table_salts_category_id1100011',
        icon : 'some icon',
        removable: true,
      }
    ]
  },
  {
    name: 'Sugars',
    id: 'sugars_category_id110001',
    removable: false,
    subCategories : [
      {
        name : 'Cane Sugars',
        id : 'cane_sugars_category_id1100011',
        icon : 'some icon',
        removable: true,
        subCategories : [
          {
            name : 'Brown Sugars',
            id : 'brown_sugars_category_id1100011',
            icon : 'some icon',
            removable: true,
            subCategories : [
              {
                name : 'Dark Brown Sugars',
                id : 'dark_brown_sugars_category_id1100011',
                icon : 'some icon',
                removable: true
              },
              {
                name : 'Light Brown Sugars',
                id : 'light_brown_sugars_category_id1100011',
                icon : 'some icon',
                removable: true
              }
            ]
          },
          {
            name : 'White Sugars',
            id : 'white_sugars_category_id1100011',
            icon : 'some icon',
            removable: true,
            subCategories : [
              {
                name : 'Granulated Sugars',
                id : 'granulated_sugars_category_id1100011',
                icon : 'some icon',
                removable: true
              },
              {
                name : 'Powdered Sugars',
                id : 'powdered_sugars_category_id1100011',
                icon : 'some icon',
                removable: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Oils',
    id: 'oils_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Sesame Seed Oils',
        id : 'sesame_seed_oils_category_id1100011',
        icon : 'some icon',
        removable: true,
      },
      {
        name : 'Olive Oils',
        id : 'olive_oils_category_id1100011',
        icon : 'some icon',
        removable: true,
      }
    ]
  },
  {
    name: 'Grains',
    id: 'grains_category_id1100011',
    removable: false,
    subCategories : [
      {
        name : 'Oats',
        id : 'oats_category_id1100011',
        icon : 'some icon',
        removable : true
      }
    ]
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
        id : 'fruit_produce_category_id1100011',
        icon : 'some icon',
        removable: true,
        subCategories : [
          {
            name : 'Dried',
            id : 'dried_fruit_category_id1100011',
            icon : 'some icon',
            removable: true
          },
          {
            name : 'Fresh',
            id : 'fresh_fruit_category_id1100011',
            icon : 'some icon',
            removable: true
          }
        ]
      },
      {
        name : 'Vegetables',
        id : 'vegetable_produce_category_id1100011',
        removable: true,
        subCategories : [
          {
            name : 'Fresh',
            id : 'fresh_vegetables_category_id1100011',
            icon : 'some icon',
            removable: true
          },
          {
            name : 'Dried',
            id : 'dried_vegetables_category_id1100011',
            icon : 'some icon',
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
        icon : 'some icon',
        removable: true
      },
      {
        name : 'Fresh',
        id : 'fresh_herbs_category_id1100011',
        icon : 'some icon',
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
        name : 'Honey',
        id : 'honeys_category_id1100011',
        icon : 'some icon',
        removable: true,
      },
      {
        name : 'Monkfruit',
        id : 'monkfruit_sweetener_category_id1100011',
        icon : 'some icon',
        removable: true,
      },
      {
        name : 'Stevia',
        id : 'stevia_sweetener_category_id1100011',
        icon : 'some icon',
        removable: true,
      }
    ]
  },
  {
    name : 'Powders',
    id : 'powders_category_id1100011',
    removable: true
  },
  {
    name : 'Uncategorized',
    id : 'uncategorized_category_id1100011',
    removable: false,
    hidden: true
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
  CategoryIndex             : Signal< CategoryIndex[] >         = computed( () => this.CategoryIndexData() );

  private IngredientEditorToggleData : WritableSignal< boolean > = signal( false );
  private CategoryEditorToggleData   : WritableSignal< boolean > = signal( false );
  
  IngredientEditorToggler : Signal< boolean > = computed( () => this.IngredientEditorToggleData() );
  CategoryEditorToggler   : Signal< boolean > = computed( () => this.CategoryEditorToggleData() );
  
  private IngredientToEdit : IngredientProfile = { id :'', name : '', brand : '', locations : [] };





  ingredientServiceInit() : void {

    this.loadIngredientData( DemoIngredients );

    this.loadCategoryKey( DemoKeys );

    this.CategoryIndexData.set( this.generateCategoryIndexData( this.CategoryKeys, this.IngredientData ) );

  }





  private loadIngredientData( data : IngredientProfile[] ) : void { this.IngredientData = [ ...data ]; }

  
  
  private loadCategoryKey( key : CategoryKey[] ) : void { this.CategoryKeys = [ ...key ]; }

  
  
  private loadCategoryIndexData( data : CategoryIndex[] ) : void { this.CategoryIndexData.set( [ ...data ] ); }

  
  
  
  
  generateCategoryIndexData( key : CategoryKey[], ingredients : IngredientProfile[] ) : CategoryIndex[] {
    const indexData : CategoryIndex[] = [];

    key.forEach( a => {

      if( !a.hidden ) {

        const items    : IngredientProfile[] = ingredients.filter( b => b.locations.includes( a.id ) );
        const category : CategoryIndex = {        
  
          name          : a.name,
          id            : a.id,
          photo         : a.photo               ? a.photo : undefined,
          icon          : a.icon                ? a.icon  : undefined,
          items         : items && items.length ? []      : undefined,
          subCategories : a.subCategories       ? []      : undefined
  
        };
  
  
  
        if( items.length > 0 ) {
          const ingredientData : CategoryIndex[] = [];
  
          items.forEach( c => {
            const item : CategoryIndex = {
              name  : c.name,
              id    : c.id,
              photo : c.photo ? c.photo : undefined,
              icon  : c.icon  ? c.icon  : undefined
            };
  
            ingredientData.push(item);
            
          });
          
          category.items?.push( ...ingredientData.sort( ( a, b ) => a.name.localeCompare( b.name ) ) );
        }
  
  
  
        if( a.subCategories && a.subCategories.length ) {
          const subCategoryData : CategoryIndex[] = this.generateCategoryIndexData( a.subCategories, ingredients )
                                                    .sort( (d, e ) => d.name.localeCompare( e.name ) );
                                                    
          category.subCategories?.push(...subCategoryData)
        }
  
        indexData.push( category );

      }
      
    });
    return indexData.sort( ( a, b ) => a.name.localeCompare( b.name ) );
  }



  //findIngredient(location : string) : IngredientProfile {}





  toggleIngredientEditorOn() : void { this.IngredientEditorToggleData.set( true ); }

  toggleIngredientEditorOff() : void { this.IngredientEditorToggleData.set( false ); }

  toggleCategoryEditorOn() : void { this.CategoryEditorToggleData.set( true ); }

  toggleCategoryEditorOff() : void { this.CategoryEditorToggleData.set( false ); }





  // addItemToIngredientData(){}

  

  editIngredientDataItem( itemId : string ) : void {

    const ingredient : IngredientProfile | undefined = this.IngredientData.find( a => a.id === itemId );


    if( ingredient ) {
      
      this.IngredientToEdit = ingredient;
      this.toggleIngredientEditorOn();

    }

    else { console.error( `Ingredient with id ${ itemId } not found` ); }

  }



  getIngredientToEdit() : IngredientProfile { return this.IngredientToEdit }







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
